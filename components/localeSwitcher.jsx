"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LocaleSwitcher = () => {
  const locales = { english: "en", french: "fr" };
  const pathname = usePathname();
  const router = useRouter();

  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const detectedLocale = pathname.split("/")[1];
    if (Object.values(locales).includes(detectedLocale)) {
      setCurrentLocale(detectedLocale);
    } else {
      setCurrentLocale("en");
    }
  }, [pathname]);

  const handleLocaleChange = (locale) => {
    const newPathname = `/${locale}${pathname.replace(/^\/(en|fr)/, "")}`;
    router.push(newPathname);
  };

  return (
    <nav>
      <label htmlFor="locale-select"></label>
      <select
        className="rounded-md text-xs font-fira p-2"
        id="locale-select"
        value={currentLocale}
        onChange={(e) => handleLocaleChange(e.target.value)}
      >
        {Object.keys(locales).map((label) => (
          <option
            className="!font-fira"
            key={locales[label]}
            value={locales[label]}
          >
            {label.toUpperCase()}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default LocaleSwitcher;
