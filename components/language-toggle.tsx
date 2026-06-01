"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    const next = locale === "hu" ? "en" : "hu";
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={toggleLocale}
      aria-label="Nyelv váltás"
      className="font-medium tracking-wide"
    >
      {locale === "hu" ? "EN" : "HU"}
    </Button>
  );
}