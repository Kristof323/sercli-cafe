"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";

export function Contact() {
  const t = useTranslations("Contact");
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
    <section id="contact" className="px-6 py-20 md:py-32 bg-[#ede8e0] text-[#1a0f08] dark:bg-[#0b0503] dark:text-[#f5eee5]">
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-start">

        {/* Bal oldal */}
        <div>
          <FadeIn delay={0}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8a6a45] dark:text-[#b49a7a] mb-5">{t("eyebrow")}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 leading-tight">{t("title")}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[#5a3e28] dark:text-[#d9cbb1] leading-relaxed mb-10">{t("description")}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-7 text-[#5a3e28] dark:text-[#d9cbb1]">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a] mb-2">{t("address_label")}</p>
                <p className="text-base">{t("address_value")}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a] mb-2">{t("phone_label")}</p>
                  {!phoneCopied ? (
                    <button onClick={copyPhone} className="text-base hover:text-[#1a0f08] dark:hover:text-[#f5eee5] transition-colors cursor-pointer text-left">
                      +36 30 228 0706
                    </button>
                  ) : (
                    <span className="text-[#8a6a45] dark:text-[#e4c08b] text-sm">+36 30 228 0706 — {t("copied")}</span>
                  )}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a] mb-2">{t("email_label")}</p>
                  {!emailCopied ? (
                    <button onClick={copyEmail} className="text-base hover:text-[#1a0f08] dark:hover:text-[#f5eee5] transition-colors cursor-pointer text-left">
                      rendeles@serclikavezo.hu
                    </button>
                  ) : (
                    <span className="text-[#8a6a45] dark:text-[#e4c08b] text-sm">rendeles@serclikavezo.hu — {t("copied")}</span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a45] dark:text-[#b49a7a] mb-2">{t("hours_label")}</p>
                <p className="text-base">{t("weekdays")}: {t("weekdays_hours")}</p>
                <p className="text-base">{t("saturday")}: {t("saturday_hours")}</p>
                <p className="text-base">{t("sunday")}: {t("closed")}</p>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=1093+Budapest,+Páva+utca+5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[#c8b49a] dark:border-[#3b2517] px-5 py-2.5 text-sm font-medium tracking-[0.18em] uppercase hover:bg-[#e4ddd3] dark:hover:bg-[#241109] transition-colors"
                >
                  {t("maps_link")}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Jobb oldal */}
        <FadeIn delay={0.2} direction="left">
          <div className="space-y-6">
            <div className="bg-[#e4ddd3] border border-[#c8b49a] dark:bg-[#1c0f0a] dark:border-[#3b2517] rounded-2xl p-7 md:p-9 shadow-[0_18px_45px_rgba(0,0,0,0.1)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <h3 className="font-serif text-3xl font-light mb-4">{t("card_title")}</h3>
              <p className="text-base text-[#5a3e28] dark:text-[#d9cbb1] leading-relaxed mb-6">{t("card_desc")}</p>

              {!emailCopied ? (
                <button onClick={copyEmail} className="inline-flex w-full items-center justify-center rounded-full bg-[#c49a5a] dark:bg-[#e4c08b] text-white dark:text-[#1b0f08] px-5 py-3.5 text-base font-medium tracking-wide hover:bg-[#b08a4a] dark:hover:bg-[#f1cf9d] transition-colors cursor-pointer">
                  {t("card_cta")}
                </button>
              ) : (
                <div className="inline-flex w-full items-center justify-between rounded-full bg-[#ede5d8] dark:bg-[#2a1a0f] border border-[#c49a5a]/40 dark:border-[#e4c08b]/40 px-5 py-3.5 text-base font-medium text-[#8a6a45] dark:text-[#e4c08b]">
                  <span>rendeles@serclikavezo.hu</span>
                  <span className="text-sm opacity-70">{t("copied")}</span>
                </div>
              )}

              <p className="mt-4 text-sm text-[#8a7060] dark:text-[#a89273] leading-relaxed">{t("card_footnote")}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#c8b49a] dark:border-[#3b2517] h-72 md:h-80">
              <iframe
                title="Sercli Kávézó – 1093 Budapest, Páva utca 5."
                src="https://maps.google.com/maps?q=Sercli+K%C3%A1v%C3%A9z%C3%B3,Budapest&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}