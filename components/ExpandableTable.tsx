"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const ExpandableTable = <T extends { id: string } | undefined>({
  items,
  columns,
}: ExpandableTableProps<T>) => {
  const [expandedId, setExpandedIndex] = useState<string | null>(null);

  const handleTriggerClick = (id: string) => {
    if (id === expandedId) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(id);
    }
  };

  if (items === undefined) return null;

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {items !== undefined
          ? items.map((item, index) => (
              <Collapsible
                key={item!.id}
                asChild
                open={item!.id === expandedId}
              >
                <>
                  <CollapsibleTrigger
                    asChild
                    onClick={() => handleTriggerClick(item!.id)}
                  >
                    <TableRow
                      item={item}
                      columns={columns as Column<unknown>[]}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent asChild>
                    <TableRow
                      className="bg-red-700"
                      item={item}
                      columns={columns as Column<unknown>[]}
                    />
                  </CollapsibleContent>
                </>
              </Collapsible>
            ))
          : null}
      </TableBody>
    </Table>
  );
};

export default ExpandableTable;
