import React from "react";
import {
  TableHead,
  TableHeader as ShadcnTableHeader,
  TableRow,
} from "@/components/ui/table";
const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <ShadcnTableHeader>
      <TableRow>
        {columns.map((column, index) => (
          <TableHead key={index} className={column.className}>
            {column.header}
          </TableHead>
        ))}
      </TableRow>
    </ShadcnTableHeader>
  );
};

export default TableHeader;
