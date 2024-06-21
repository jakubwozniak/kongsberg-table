import BooksTableAllColumns from "@/components/BooksTableAllColumns";
import BooksTableBasicColumns from "@/components/BooksTableBasicColumns";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-12">
      <div className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex flex-col">
        <BooksTableAllColumns />
        <div className="w-full pt-24">
          <BooksTableBasicColumns />
        </div>
      </div>
    </main>
  );
}
