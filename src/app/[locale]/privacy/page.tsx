import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/locales";
import { BUSINESS_INFO } from "@/lib/constants";
import { Hammer } from "lucide-react";
import Link from "next/link";

type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

type PrivacyContact = {
  heading: string;
  text: string;
};

type PrivacyDict = {
  title: string;
  lastUpdated: string;
  sections?: PrivacySection[];
  contact?: PrivacyContact;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hr" }];
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const privacy = dict?.privacy as PrivacyDict | undefined;

  const backToHome = locale === "hr" ? "Natrag na početnu" : "Back to Home";

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-zinc-950 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hammer className="w-6 h-6" />
            <span className="font-bold text-xl">{BUSINESS_INFO.name}</span>
          </Link>
          <Link
            href={`/${locale}`}
            className="text-green-400 hover:text-green-300 transition-colors text-sm"
          >
            ← {backToHome}
          </Link>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {privacy ? (
            <>
              <h1 className="text-4xl font-bold mb-2">{privacy.title}</h1>
              <p className="text-sm text-gray-500 mb-8">{privacy.lastUpdated}</p>
              
              {privacy.sections?.map((section: PrivacySection, idx: number) => (
                <div key={idx} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
                  {section.paragraphs?.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="mb-3 text-gray-700">{p}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc ml-6 space-y-2">
                      {section.list.map((item: string, lIdx: number) => (
                        <li key={lIdx} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">{privacy.contact?.heading}</h3>
                <p className="mb-4 text-gray-700">{privacy.contact?.text}</p>
                <p className="text-sm mb-2">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-green-600 hover:underline">
                    {BUSINESS_INFO.email}
                  </a>
                </p>
                <p className="text-sm">
                  <strong>{locale === "hr" ? "Telefon" : "Phone"}:</strong>{" "}
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-green-600 hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
