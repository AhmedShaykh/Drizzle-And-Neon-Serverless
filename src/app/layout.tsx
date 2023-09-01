import { ThemeProvider } from "@/Components/ThemeProvider";
import { ModeToggle } from "@/Components/ModeToggle";
import ClientToast from "@/Components/ClientToast";
import Sidebar from "@/Components/Sidebar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drizzle And Neon Serverless App",
  description: "Drizzle And Neon Serverless App"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="h-screen">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />
              <div
                className="col-span-3 border-x-[1px] border-neutral-200 dark:border-neutral-800 lg:col-span-2"
              >
                {children}
              </div>
            </div>
          </div>
          <ClientToast />
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html >
  )
};