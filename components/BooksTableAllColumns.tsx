"use client";

import React from "react";
import BooksTable from "./BooksTable";
import { booksColumns } from "@/constants/intex";

const BooksTableAllColumns = () => {
  return <BooksTable columns={booksColumns} />;
};

export default BooksTableAllColumns;
