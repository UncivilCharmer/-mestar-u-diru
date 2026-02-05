import en from "@/lib/locales/en";
import hr from "@/lib/locales/hr";

export function getDictionary(locale: string) {
  return locale === "hr" ? hr : en;
}

export default getDictionary;
