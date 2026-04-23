import { ui, defaultLang, type Lang } from "./ui";

export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Returns the URL for the alternate language version of the current page. */
export function getAlternateLangUrl(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split("/").filter(Boolean);

  // Remove current lang prefix if present (non-default langs)
  const currentLangs = Object.keys(ui);
  if (segments.length > 0 && currentLangs.includes(segments[0])) {
    segments.shift();
  }

  // Build new path
  if (targetLang === defaultLang) {
    return "/" + segments.join("/");
  }
  return "/" + [targetLang, ...segments].join("/");
}
