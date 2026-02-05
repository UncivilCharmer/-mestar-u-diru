import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meštar u Điru - Handyman Services Dubrovnik",
  description: "Professional handyman and property maintenance services in Dubrovnik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
