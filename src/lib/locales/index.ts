import en from "./en";
import hr from "./hr";

export const locales = {
  en,
  hr,
};

export type Locale = keyof typeof locales;

export function getLocaleDict(locale: Locale) {
  return locales[locale] || locales.en;
}
