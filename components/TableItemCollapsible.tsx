import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

import TableRow from "./TableRow";
import { TableRow as ShadcnTableRow, TableCell } from "@/components/ui/table";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import { getPropertyByPath } from "@/lib/utils";
const TableItemCollapsible = <T extends { id: string } | undefined>({
  DetailsComponent,
  item,
  columns,
  expandedId,
  setExpandedIndex,
  parentName,
  ...props
}: TableItemCollapsibleProps<T>) => {
  const {
    breadcrumbNamePath,
    breadcrumb,
    setBreadcrumb,
    addBreadcrumbItem,
    removeAllBreadcrumbItemChilds,
  } = useBreadcrumb();
  const handleTriggerClick = (id: string, title: string) => {
    removeAllBreadcrumbItemChilds(parentName);
    if (id === expandedId) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(id);
      addBreadcrumbItem({
        label: title,
        onClick: () => null,
      });
    }
  };

  return (
    <Collapsible key={item!.id} asChild open={item!.id === expandedId}>
      <>
        <CollapsibleTrigger
          asChild
          onClick={() =>
            handleTriggerClick(
              item!.id,
              getPropertyByPath(item, breadcrumbNamePath)
            )
          }
        >
          <TableRow item={item} columns={columns as Column<unknown>[]} />
        </CollapsibleTrigger>
        <CollapsibleContent asChild>
          <ShadcnTableRow>
            <TableCell colSpan={columns.length} className="bg-slate-50 py-12">
              <DetailsComponent item={item} {...props} />
            </TableCell>
          </ShadcnTableRow>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default TableItemCollapsible;
