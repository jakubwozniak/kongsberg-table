import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kingsberg table",
  description: "Recruitment process task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <div className="fixed w-screen h-screen brightness-50 grayscale-[75%]">
            <Image
              src="/images/books.webp"
              alt="books"
              layout="fill"
              quality={100}
              className="fixed top-0 left-0"
            />
          </div>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
