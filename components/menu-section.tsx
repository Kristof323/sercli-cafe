"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";

const allFoodImages = [
  { src: "/images/etel/etel_1.jpg",  alt: "Reggeli tányér" },
  { src: "/images/etel/etel_2.jpg",  alt: "Tojásos reggeli" },
  { src: "/images/etel/etel_3.jpg",  alt: "Friss reggeli" },
  { src: "/images/etel/etel_4.jpg",  alt: "Reggeli különlegesség" },
  { src: "/images/etel/etel_5.jpg",  alt: "Napi ajánlat" },
  { src: "/images/etel/etel_6.jpg",  alt: "Fogás" },
  { src: "/images/etel/etel_7.jpg",  alt: "Különlegesség" },
  { src: "/images/etel/etel_8.jpg",  alt: "Ebéd" },
  { src: "/images/etel/etel_9.jpg",  alt: "Főétel" },
  { src: "/images/etel/etel_10.jpg", alt: "Napi menü" },
  { src: "/images/etel/etel_11.jpg", alt: "Salátás tál" },
  { src: "/images/etel/etel_12.jpg", alt: "Könnyű fogás" },
  { src: "/images/etel/etel_13.jpg", alt: "Szezonális ajánlat" },
  { src: "/images/etel/etel_14.jpg", alt: "Szendvics" },
  { src: "/images/etel/etel_15.jpg", alt: "Panini" },
  { src: "/images/etel/etel_16.jpg", alt: "Wrap" },
  { src: "/images/etel/etel_17.jpg", alt: "Toast" },
  { src: "/images/etel/etel_18.jpg", alt: "Friss sütemény" },
  { src: "/images/etel/etel_19.jpg", alt: "Desszert" },
  { src: "/images/etel/etel_20.jpg", alt: "Kávé" },
  { src: "/images/etel/etel_21.jpg", alt: "Specialty kávé" },
];

const doubled = [...allFoodImages, ...allFoodImages];

export function MenuSection() {
  const t = useTranslations("Menu");
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const SPEED = 0.5;
  const ITEM_WIDTH = 280;
  const TOTAL_WIDTH = allFoodImages.length * (ITEM_WIDTH + 12);

  const [lightbox, setLightbox] = useState<number | null>(null);

  const animate = useCallback(() => {
    if (!pausedRef.current && trackRef.current) {
      posRef.current += SPEED;
      if (posRef.current >= TOTAL_WIDTH) {
        posRef.current -= TOTAL_WIDTH;
      }
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [TOTAL_WIDTH]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? (i + 1) % allFoodImages.length : null);
      if (e.key === "ArrowLeft")  setLightbox((i) => i !== null ? (i - 1 + allFoodImages.length) % allFoodImages.length : null);
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section id="menu" className="pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12 mb-10">

        {/* Animált header */}
        <FadeIn delay={0}>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t("eyebrow")}
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl lg:text-5xl font-light">
              {t("title")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="flex gap-3 flex-wrap">
              <a
                href="/images/menu/etlap_1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium border border-border rounded-full px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                {t("foodMenu")} ↗
              </a>
              <a
                href="/images/menu/etlap_2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium border border-border rounded-full px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                {t("drinkMenu")} ↗
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Végtelen carousel – változatlan */}
      <div
        className="relative w-full cursor-pointer select-none"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div ref={trackRef} className="flex gap-3 will-change-transform">
          {doubled.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              onClick={() => setLightbox(i % allFoodImages.length)}
              className="relative shrink-0 overflow-hidden rounded-xl"
              style={{ width: ITEM_WIDTH, height: 320 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="280px"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox – változatlan */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={allFoodImages[lightbox].src}
                alt={allFoodImages[lightbox].alt}
                fill
                sizes="(max-width: 1024px) 90vw, 800px"
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={() => setLightbox((lightbox - 1 + allFoodImages.length) % allFoodImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg"
              aria-label="Előző kép"
            >‹</button>
            <button
              onClick={() => setLightbox((lightbox + 1) % allFoodImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg"
              aria-label="Következő kép"
            >›</button>
            <p className="text-center text-white/60 text-sm mt-4">
              {lightbox + 1} / {allFoodImages.length}
            </p>
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl transition-colors"
            aria-label="Bezárás"
          >✕</button>
        </div>
      )}
    </section>
  );
}