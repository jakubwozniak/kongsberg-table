"use client";

import React, { useEffect } from "react";
import ExpandableTable from "./ExpandableTable";
import { useGetAllBooksQuery } from "@/lib/state/books/apiSlice";

import { Card, CardContent } from "./ui/card";
import TableCardHeader from "./TableCardHeader";

const BooksTable = <T,>({ columns }: TableHeaderProps<T>) => {
  const { data, error, isLoading } = useGetAllBooksQuery({
    key: process.env.GOOGLE_API_KEY || "",
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      console.log("New Books:", data);
    }
  }, [data, error, isLoading]);

  if (isLoading) return null;

  return (
    <Card className="w-full">
      <TableCardHeader title="Table title" />
      <CardContent>
        <ExpandableTable<Book | undefined>
          items={data?.items as (Book | undefined)[]}
          columns={columns as Column<Book | undefined>[]}
        />
      </CardContent>
    </Card>
  );
};

export default BooksTable;
