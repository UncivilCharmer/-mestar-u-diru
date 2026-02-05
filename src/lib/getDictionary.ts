import type { Locale } from "./locales";

export async function getDictionary(locale: Locale) {
  const dictionaries = {
    en: () => import("./locales/en").then((m) => m.default),
    hr: () => import("./locales/hr").then((m) => m.default),
  };

  return dictionaries[locale]();
}
