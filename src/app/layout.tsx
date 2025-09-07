import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meštar u Điru - Handyman Services",
  description: "Professional handyman services for all your home repair needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
