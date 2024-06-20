import React, { createContext, useContext, useMemo, useState } from "react";

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(
  undefined
);

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};

export const BreadcrumbProvider: React.FC<BreadcrumbProviderProps> = ({
  children,
}) => {
  const [breadcrumbNamePath, setBreadcrumbNamePath] = useState<string>("");
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbItem[]>([]);

  const addBreadcrumbItem = (item: BreadcrumbItem) => {
    setBreadcrumb((prev) => [...prev, item]);
  };

  const removeAllBreadcrumbItemChilds = (label: string) => {
    setBreadcrumb((prev) => {
      const index = prev.findIndex((item) => item.label === label);
      return prev.slice(0, index + 1);
    });
  };

  const value = useMemo(
    () => ({
      breadcrumbNamePath,
      setBreadcrumbNamePath,
      breadcrumb,
      setBreadcrumb,
      addBreadcrumbItem,
      removeAllBreadcrumbItemChilds,
    }),
    [breadcrumbNamePath, breadcrumb]
  );

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbProvider;
