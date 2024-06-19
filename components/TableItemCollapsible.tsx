import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

import TableRow from "./TableRow";
import { TableRow as ShadcnTableRow, TableCell } from "@/components/ui/table";
const TableItemCollapsible = <T extends { id: string } | undefined>({
  DetailsComponent,
  item,
  columns,
  expandedId,
  setExpandedIndex,
  ...props
}: TableItemCollapsibleProps<T>) => {
  const handleTriggerClick = (id: string) => {
    if (id === expandedId) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(id);
    }
  };

  return (
    <Collapsible key={item!.id} asChild open={item!.id === expandedId}>
      <>
        <CollapsibleTrigger
          asChild
          onClick={() => handleTriggerClick(item!.id)}
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
