"use client";

import { useRouter } from "next/navigation";

import { LOCALES, routePath, type Locale } from "../lib/seo";

type Props = {
  id: string;
  locale: Locale;
  segment?: string;
};

export function LanguageSelect({ id, locale, segment }: Props) {
  const router = useRouter();

  return (
    <label className="lang-inline" htmlFor={id}>
      <select
        id={id}
        value={locale}
        onChange={(event) => {
          router.push(routePath(event.target.value as Locale, segment));
        }}
      >
        {LOCALES.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
