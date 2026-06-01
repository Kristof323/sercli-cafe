"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IconArrowDown } from "@tabler/icons-react";

export function Hero() {
  const t = useTranslations("Hero");
  const { resolvedTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Háttérkép – teljes szélesség */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/nice/kint.PNG"
          alt="Sercli Kávézó – Budapest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Mobil: erősebb overlay bal oldalt hogy szöveg olvasható legyen */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 md:to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Tartalom */}
      <div className="relative z-10 w-full px-6 lg:px-12 mx-auto max-w-screen-xl">
        <div className="max-w-lg md:max-w-2xl space-y-6 pt-32 pb-24">
          {/* Eyebrow */}
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {t("eyebrow")}
          </p>

          {/* Főcím */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-balance">
            {t("title")}
          </h1>

          {/* Alcím */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            {t("subtitle")}
          </p>

          {/* CTA gombok */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => scrollTo("menu")}
              className="group"
            >
              {t("cta1")}
              <IconArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="border-foreground/20 hover:bg-foreground/5"
            >
              {t("cta2")}
            </Button>
          </div>

          {/* Nyitvatartás */}
          <p className="text-xs text-muted-foreground pt-2 tracking-wide">
            {t("hours")}
          </p>
        </div>
      </div>

      {/* Scroll indikátor */}
      <button
        onClick={() => scrollTo("menu")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Görgetés le"
      >
        <IconArrowDown className="size-5" />
      </button>
    </section>
  );
}