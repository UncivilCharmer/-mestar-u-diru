import Navbar from "../components/Navbar";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/locales";
import { locales } from "@/lib/locales";

export const dynamic = "force-dynamic";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // only allow /en and /hr
  if (!(locale in locales)) notFound();

  return (
    <>
      <Navbar locale={locale} />
      {children}
    </>
  );
}
