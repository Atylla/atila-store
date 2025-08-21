import type { Metadata } from "next";
import '../styles/global.scss'
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
