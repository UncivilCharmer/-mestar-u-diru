import Portfolio from "@/app/components/Portfolio";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/locales";
import { BUSINESS_INFO } from "@/lib/constants";
import { Hammer, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hr" }];
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const backToHome = locale === "hr" ? "Natrag na početnu" : "Back to Home";
  const contactUs = locale === "hr" ? "Kontaktirajte nas" : "Contact Us";

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-zinc-950 text-white py-6 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hammer className="w-6 h-6" />
            <span className="font-bold text-xl">{BUSINESS_INFO.name}</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href={`/${locale}#contact`}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              {contactUs}
            </Link>
          </div>
        </div>
      </header>

      {/* Portfolio Content */}
      <Portfolio dict={dict?.portfolio} />

      {/* Simple Footer */}
      <footer className="bg-zinc-950 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Hammer className="w-5 h-5" />
            <span className="font-bold">{BUSINESS_INFO.name}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-green-400 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-green-400 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {BUSINESS_INFO.email}
            </a>
          </div>
          <Link
            href={`/${locale}`}
            className="inline-block text-green-400 hover:text-green-300 transition-colors text-sm"
          >
            ← {backToHome}
          </Link>
          <p className="text-xs text-gray-500 pt-4">
            © 2025 {BUSINESS_INFO.name}. {locale === "hr" ? "Sva prava pridržana." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
