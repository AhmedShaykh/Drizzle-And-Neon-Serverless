import { ThemeProvider } from "@/Components/ThemeProvider";
import { ModeToggle } from "@/Components/ModeToggle";
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
        className={`${inter.className} dark:bg-zinc-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
};