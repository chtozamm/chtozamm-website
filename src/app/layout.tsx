import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark M @chtozamm",
  description: "Creative personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex h-8 items-center justify-center bg-black text-sm font-light text-white">
          hello there!
        </header>
        {children}
      </body>
    </html>
  );
}
