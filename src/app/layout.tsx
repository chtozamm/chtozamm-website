import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark M | @chtozamm",
  description: "Creative personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden overflow-y-hidden bg-black selection:text-white selection:bg-amber-400">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
