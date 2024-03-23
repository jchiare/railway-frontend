import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Message Analysis",
  description: "Analysis messages"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
