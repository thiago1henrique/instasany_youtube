import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: "Instasany",
  description: "Projeto de estudo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
