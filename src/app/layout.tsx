import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { } from "@/utils/KEYS_ENVIRONMENT"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="bg-gradient-to-r from-gray-50 to-blue-200">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
