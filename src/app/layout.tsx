import type {Metadata} from "next";
import {inter} from "@/config/fonts";
import "./globals.css";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "A Virtual Shop of Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
