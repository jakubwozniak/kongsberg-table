import React from "react";
import { CardHeader, CardTitle } from "../ui/card";
import TableBreadcrumb from "./TableBreadcrumb";

const TableCardHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="pl-2 pt-2">
        <TableBreadcrumb />
      </CardTitle>
    </CardHeader>
  );
};

export default TableCardHeader;
