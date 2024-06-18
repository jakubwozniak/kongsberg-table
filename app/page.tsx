"use client";

import BooksTable from "@/components/BooksTable";
import { basicBooksColumns, booksColumns } from "@/constants/intex";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <BooksTable columns={booksColumns} />

        <BooksTable columns={basicBooksColumns} />
      </div>
    </main>
  );
}
