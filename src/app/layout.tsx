import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcbot Playwright Generator",
  description: "Generate cucumber tests visually",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-end align-middle py-4 container">
            <ModeToggle />
          </div>
          <main className="container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
