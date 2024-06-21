import React from "react";
import {
  TableHead,
  TableHeader as ShadcnTableHeader,
  TableRow,
} from "@/components/ui/table";
const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <ShadcnTableHeader className="sticky top-0 bg-card">
      <TableRow className="sticky">
        {columns.map((column, index) => {
          return (
            <TableHead
              key={index}
              className={`${column.className} ${
                index !== columns.length - 1 ? "relative left-2" : ""
              }`}
            >
              {column.header}
            </TableHead>
          );
        })}
      </TableRow>
    </ShadcnTableHeader>
  );
};

export default TableHeader;
