import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import ThemeButton from "./ThemeButton";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <header className="flex h-8 items-center justify-between gap-3 bg-zinc-900 px-3 text-sm font-light text-zinc-100">
            Mark M @chtozamm
            <ThemeButton />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
