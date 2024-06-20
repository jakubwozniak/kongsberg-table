"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell } from "@/components/ui/table";

import TableHeader from "./TableHeader";
import TableItemCollapsible from "./TableItemCollapsible";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import ExpandableRow from "./ExpandableRow";
import { getPropertyByPath } from "@/lib/utils";

const ExpandableTable = <T extends { id: string } | undefined>({
  DetailsComponent,
  items,
  columns,
  rootName,
  breadcrumbNamePath,
  itemCategoryPath,
  ...props
}: ExpandableTableProps<T>) => {
  const { setBreadcrumb, setBreadcrumbNamePath } = useBreadcrumb();
  const [expandedId, setExpandedIndex] = useState<string | null>(null);

  useEffect(() => {
    const handleBreadcrumbClick = () => {
      setExpandedIndex(null);
      setBreadcrumb((prev) => [prev[0]]);
    };

    setBreadcrumbNamePath(breadcrumbNamePath);
    setBreadcrumb([
      { label: rootName, onClick: () => handleBreadcrumbClick() },
    ]);
  }, [setBreadcrumb, setBreadcrumbNamePath, breadcrumbNamePath, rootName]);

  const categorizedItems = useMemo(() => {
    const educationItems: T[] = [];
    const historyItems: T[] = [];
    const otherItems: T[] = [];

    items?.forEach((item) => {
      const categories = getPropertyByPath(
        item,
        itemCategoryPath
      ) as Array<any>;

      if (!Array.isArray(categories)) return;

      if (categories.includes("Education")) {
        educationItems.push(item);
      }
      if (categories.includes("History")) {
        historyItems.push(item);
      }

      if (
        !categories.includes("Education") &&
        !categories.includes("History")
      ) {
        otherItems.push(item);
      }
    });

    return {
      educationItems,
      historyItems,
      otherItems,
    };
  }, [items, itemCategoryPath]);

  if (items === undefined) return null;

  const renderItem = (item: T) => (
    <TableItemCollapsible
      DetailsComponent={DetailsComponent}
      key={item!.id}
      item={item}
      columns={columns as Column<T>[]}
      expandedId={expandedId}
      setExpandedIndex={setExpandedIndex}
      parentName={rootName}
      {...props}
    />
  );

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        <ExpandableRow
          id="Education"
          expandedId={expandedId}
          setExpandedIndex={setExpandedIndex}
        >
          <>
            {categorizedItems.educationItems !== undefined
              ? categorizedItems.educationItems.map((item, index) =>
                  renderItem(item)
                )
              : null}
          </>
        </ExpandableRow>
        <ExpandableRow
          id="History"
          expandedId={expandedId}
          setExpandedIndex={setExpandedIndex}
        >
          <>
            {categorizedItems.educationItems !== undefined
              ? categorizedItems.educationItems.map((item, index) =>
                  renderItem(item)
                )
              : null}
          </>
        </ExpandableRow>
        {categorizedItems.otherItems !== undefined
          ? categorizedItems.otherItems.map((item, index) => renderItem(item))
          : null}
      </TableBody>
    </Table>
  );
};

export default ExpandableTable;
