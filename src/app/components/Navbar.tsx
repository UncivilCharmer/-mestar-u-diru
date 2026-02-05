// REPLACE ENTIRE FILE: src/app/[locale]/../components/Navbar.tsx
// (YES: full file, same as you had, but typed with Locale so sve bude konzistentno)
import Link from "next/link";
import type { Locale } from "@/lib/locales";

export default function Navbar({ locale }: { locale: Locale }) {
  const toEn = "/en";
  const toHr = "/hr";

  return (
    <div className="w-full border-b border-zinc-800 bg-zinc-950/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-white font-semibold">
          Meštar u Điru
        </Link>

        <div className="flex items-center gap-4 text-2xl">
          <Link
            href={toEn}
            className={locale === "en" ? "opacity-100" : "opacity-50 hover:opacity-75 transition-opacity"}
            title="English"
          >
            🇬🇧
          </Link>
          <Link
            href={toHr}
            className={locale === "hr" ? "opacity-100" : "opacity-50 hover:opacity-75 transition-opacity"}
            title="Hrvatski"
          >
            🇭🇷
          </Link>
        </div>
      </div>
    </div>
  );
}
