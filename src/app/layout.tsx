import { ThemeProvider } from "@/Components/ThemeProvider";
import { ModeToggle } from "@/Components/ModeToggle";
import { Toaster } from "@/Components/ui/toaster";
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <div className="absolute top-6 right-6">
            <ModeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  )
};