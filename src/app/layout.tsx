import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reloop Templates — Email Previewer & Gallery",
  description: "Modern, production-ready email templates built for Reloop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#090a0f] text-[#f4f4f6]">
        {children}
      </body>
    </html>
  );
}
