import BooksTableAllColumns from "@/components/BooksTableAllColumns";
import BooksTableBasicColumns from "@/components/BooksTableBasicColumns";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex flex-col">
        <BooksTableAllColumns />
        <Separator className="my-12" />
        <BooksTableBasicColumns />
      </div>
    </main>
  );
}
