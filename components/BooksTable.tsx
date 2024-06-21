"use client";

import React, { useEffect } from "react";
import ExpandableTable from "./ExpandableTable";
import { useGetAllBooksQuery } from "@/lib/state/books/apiSlice";

import { Card, CardContent } from "./ui/card";
import TableCardHeader from "./TableCardHeader";
import LoaderSpinner from "./LoaderSpinner";
import Error from "./Error";
import BooksTableDetails from "./BooksTableDetails";
import BreadcrumbProvider from "@/providers/BreadcrumbProvider";
import ErrorBoundary from "./ErrorBoundary";

const BooksTable = <T,>({ columns }: BooksTableProps<T>) => {
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
    return (
      <Card className="py-6">
        <Error error="Error loading books. Please try again later." />
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <BreadcrumbProvider>
        <TableCardHeader />
        <CardContent>
          <ErrorBoundary>
            <ExpandableTable<Book | undefined>
              items={data?.items as (Book | undefined)[]}
              columns={columns as Column<Book | undefined>[]}
              DetailsComponent={BooksTableDetails}
              breadcrumbNamePath="volumeInfo.title"
              itemCategoryPath="volumeInfo.categories"
              rootName="Books"
              listOfCategories={[
                { name: "Business & Economics", color: "emerald-400" },
                { name: "Education", color: "cyan-500" },
                { name: "History", color: "indigo-400" },
                { name: "Social Science", color: "pink-500" },
              ]}
            />
          </ErrorBoundary>
        </CardContent>
      </BreadcrumbProvider>
    </Card>
  );
};

export default BooksTable;
