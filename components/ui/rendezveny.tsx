"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";

export function Rendezveny() {
  const t = useTranslations("Rendezveny");
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rendeles@serclikavezo.hu");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+36302280706");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  return (
    <section id="rendezveny" className="px-6 py-20 md:py-32 bg-[#f5f0e8] text-[#1a0f08] dark:bg-[#120806] dark:text-[#f5eee5]">
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-[1.05fr,0.95fr] items-start">

        {/* Szöveges blokk */}
        <div>
          <FadeIn delay={0}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8a6a45] dark:text-[#b49a7a] mb-5">
              {t("eyebrow")}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 leading-tight">
              {t("title")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-5">
              <p className="text-lg text-[#5a3e28] dark:text-[#d9cbb1] leading-relaxed">{t("p1")}</p>
              <p className="text-lg text-[#5a3e28] dark:text-[#d9cbb1] leading-relaxed">{t("p2")}</p>
              <p className="text-lg text-[#5a3e28] dark:text-[#d9cbb1] leading-relaxed">{t("p3")}</p>
            </div>
          </FadeIn>
        </div>

        {/* Kártya */}
        <FadeIn delay={0.2} direction="left">
          <div className="bg-[#ede5d8] border border-[#c8b49a] dark:bg-[#1c0f0a]/90 dark:border-[#3b2517] rounded-2xl p-7 md:p-9 shadow-[0_18px_45px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <h3 className="font-serif text-3xl font-light mb-6">{t("card_title")}</h3>

            <div className="space-y-5 text-[#5a3e28] dark:text-[#d9cbb1]">
              <div className="flex items-baseline justify-between gap-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a]">
                  {t("capacity_label")}
                </span>
                <span className="font-medium text-base text-[#1a0f08] dark:text-[#f5eee5]">{t("capacity_value")}</span>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a] shrink-0">
                  {t("timeslot_label")}
                </span>
                <span className="text-base text-[#1a0f08] dark:text-[#f5eee5] text-right">{t("timeslot_value")}</span>
              </div>
              <div className="border-t border-[#c8b49a] dark:border-[#3b2517] pt-5 mt-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a]">{t("quote_label")}</p>
                <p className="text-base leading-relaxed">{t("quote_desc")}</p>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {!emailCopied ? (
                <button
                  onClick={copyEmail}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#c49a5a] dark:bg-[#e4c08b] text-white dark:text-[#1b0f08] px-5 py-3.5 text-base font-medium tracking-wide hover:bg-[#b08a4a] dark:hover:bg-[#f1cf9d] transition-colors cursor-pointer"
                >
                  {t("cta_email")}
                </button>
              ) : (
                <div className="inline-flex w-full items-center justify-between rounded-full bg-[#e4ddd3] dark:bg-[#2a1a0f] border border-[#c49a5a]/40 dark:border-[#e4c08b]/40 px-5 py-3.5 text-base font-medium text-[#8a6a45] dark:text-[#e4c08b]">
                  <span>rendeles@serclikavezo.hu</span>
                  <span className="text-sm opacity-70">{t("copied")}</span>
                </div>
              )}

              {!phoneCopied ? (
                <button
                  onClick={copyPhone}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#c8b49a] dark:border-[#3b2517] px-5 py-3.5 text-base font-medium tracking-wide text-[#1a0f08] dark:text-[#f5eee5] hover:bg-[#e4ddd3] dark:hover:bg-[#241109] transition-colors cursor-pointer"
                >
                  {t("cta_phone")}
                </button>
              ) : (
                <div className="inline-flex w-full items-center justify-between rounded-full bg-[#e4ddd3] dark:bg-[#2a1a0f] border border-[#1a0f08]/20 dark:border-[#f5eee5]/20 px-5 py-3.5 text-base font-medium text-[#1a0f08] dark:text-[#f5eee5]">
                  <span>+36 30 228 0706</span>
                  <span className="text-sm opacity-70">{t("copied")}</span>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#8a7060] dark:text-[#a89273]">{t("footnote")}</p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}