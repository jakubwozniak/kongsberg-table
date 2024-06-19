"use client";

import React, { useEffect } from "react";
import ExpandableTable from "./ExpandableTable";
import { useGetAllBooksQuery } from "@/lib/state/books/apiSlice";

import { Card, CardContent } from "./ui/card";
import TableCardHeader from "./TableCardHeader";
import LoaderSpinner from "./LoaderSpinner";
import Error from "./Error";
import BooksTableDetails from "./BooksTableDetails";

const BooksTable = <T,>({ columns }: TableHeaderProps<T>) => {
  const { data, error, isLoading } = useGetAllBooksQuery({
    key: process.env.GOOGLE_API_KEY || "",
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      console.log("New Books:", data);
    }
  }, [data, error, isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoaderSpinner />
      </div>
    );
  }

  if (error) {
    return <Error error="Error loading books. Please try again later." />;
  }

  return (
    <Card className="w-full">
      <TableCardHeader title="Table title" />
      <CardContent>
        <ExpandableTable<Book | undefined>
          items={data?.items as (Book | undefined)[]}
          columns={columns as Column<Book | undefined>[]}
          DetailsComponent={BooksTableDetails}
        />
      </CardContent>
    </Card>
  );
};

export default BooksTable;
