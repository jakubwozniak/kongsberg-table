import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { TableCell, TableRow } from "./ui/table";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";

const ExpandableRow = ({
  id,
  colSpan,
  parentName,
  children,
}: ExpandableRowProps) => {
  const {
    breadcrumbIds,
    setBreadcrumb,
    addBreadcrumbItem,
    removeAllBreadcrumbItemChilds,
  } = useBreadcrumb();
  const handleTriggerClick = (id: string) => {
    const isIdOpen = breadcrumbIds.includes(id);

    removeAllBreadcrumbItemChilds(parentName);

    if (!isIdOpen)
      addBreadcrumbItem({
        id: id,
        label: id,
        onClick: () => null,
      });
  };
  return (
    <Collapsible key={id} asChild open={breadcrumbIds.includes(id)}>
      <>
        <CollapsibleTrigger asChild onClick={() => handleTriggerClick(id)}>
          <TableRow>
            <TableCell colSpan={colSpan}>{id}</TableCell>
          </TableRow>
        </CollapsibleTrigger>
        <CollapsibleContent asChild>{children}</CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default ExpandableRow;
