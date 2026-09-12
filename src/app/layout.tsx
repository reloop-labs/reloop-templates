import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reloop Templates — Production-Ready Email Templates",
  description: "A curated collection of beautiful, responsive email templates built for Reloop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-white text-zinc-900 dark:bg-black dark:text-zinc-50 selection:bg-zinc-200 dark:selection:bg-zinc-800">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
