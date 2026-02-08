import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";

import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/locales";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hr" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <Hero dict={dict?.hero} />
      <Services
        items={dict?.services?.items ?? {}}
        title={dict?.services?.title ?? "What I Do"}
        subtitle={dict?.services?.subtitle ?? ""}
      />
      <Portfolio dict={dict?.portfolio} />
      <ContactForm dict={dict?.contact} businessInfo={dict?.businessInfo} />
      <Footer dict={dict?.footer} />
      <Toaster />
    </div>
  );
}
