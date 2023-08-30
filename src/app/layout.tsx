import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Drizzle ORM & Neon Serverless App",
  description: "Drizzle ORM & Neon Serverless App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-950 text-slate-200`}
      >
        {children}
      </body>
    </html>
  )
};