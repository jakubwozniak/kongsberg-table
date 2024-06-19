"use client";
import React, { useState } from "react";
import { Table, TableBody } from "@/components/ui/table";

import TableHeader from "./TableHeader";
import TableItemCollapsible from "./TableItemCollapsible";

const ExpandableTable = <T extends { id: string } | undefined>({
  DetailsComponent,
  items,
  columns,
  ...props
}: ExpandableTableProps<T>) => {
  const [expandedId, setExpandedIndex] = useState<string | null>(null);

  if (items === undefined) return null;

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {items !== undefined
          ? items.map((item, index) => (
              <TableItemCollapsible
                DetailsComponent={DetailsComponent}
                key={item!.id}
                item={item}
                columns={columns as Column<T>[]}
                expandedId={expandedId}
                setExpandedIndex={setExpandedIndex}
                {...props}
              />
            ))
          : null}
      </TableBody>
    </Table>
  );
};

export default ExpandableTable;
