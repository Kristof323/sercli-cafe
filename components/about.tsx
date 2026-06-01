import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="pt-8 pb-16 md:pt-14 md:pb-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Bal: szöveg */}
          <div className="space-y-8">
            <FadeIn delay={0}>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {t("eyebrow")}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-serif text-5xl lg:text-6xl font-light leading-[1.1] text-balance">
                {t("title")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-lg">{t("p1")}</p>
                <p className="text-lg">{t("p2")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="pt-6 border-t border-border space-y-3">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  {t("hours_title")}
                </p>
                <div className="flex justify-between text-base">
                  <span className="text-muted-foreground">{t("weekdays")}</span>
                  <span className="font-medium">{t("weekdays_hours")}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-muted-foreground">{t("saturday")}</span>
                  <span className="font-medium">{t("saturday_hours")}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-muted-foreground">{t("sunday")}</span>
                  <span className="text-muted-foreground italic">{t("sunday_hours")}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Jobb: kép */}
          <FadeIn delay={0.15} direction="left">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/nice/bent.PNG"
                alt="Sercli Kávézó belső tér"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}