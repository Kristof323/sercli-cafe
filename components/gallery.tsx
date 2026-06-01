"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";

const galleryImages = [
  { src: "/images/nice/bent.PNG",               alt: "Belső tér" },
  { src: "/images/nice/kint.PNG",               alt: "Kávézó kívülről" },
  { src: "/images/rendezveny/rendezveny_1.jpg", alt: "Rendezvény – büfé" },
  { src: "/images/rendezveny/rendezveny_2.jpg", alt: "Rendezvény – hideg tál" },
  { src: "/images/rendezveny/rendezveny_3.jpg", alt: "Rendezvény – vendégasztal" },
  { src: "/images/rendezveny/rendezveny_4.jpg", alt: "Rendezvény – hamburger" },
  { src: "/images/rendezveny/rendezveny_5.jpg", alt: "Rendezvény – saláta" },
  { src: "/images/etel/etel_6.jpg",             alt: "Kávézó hangulat" },
  { src: "/images/etel/etel_12.jpg",            alt: "Ételek közelről" },
];

type GalleryItemProps = {
  index: number;
  className: string;
  sizes: string;
  delay: number;
  onClick: (i: number) => void;
};

function GalleryItem({ index, className, sizes, delay, onClick }: GalleryItemProps) {
  const img = galleryImages[index];
  return (
    <FadeIn delay={delay} direction="up">
      <div
        onClick={() => onClick(index)}
        className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        {/* Gradient overlay – alulról sötétedik */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        {/* Alt szöveg alul */}
        <p className="absolute bottom-3 left-4 text-white/90 text-xs tracking-widest uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          {img.alt}
        </p>
      </div>
    </FadeIn>
  );
}

export function Gallery() {
  const t = useTranslations("Gallery");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightbox((l) => l !== null ? (l - 1 + galleryImages.length) % galleryImages.length : null);
  }, []);

  const next = useCallback(() => {
    setLightbox((l) => l !== null ? (l + 1) % galleryImages.length : null);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <section id="galeria" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12">
          <FadeIn delay={0}>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {t("eyebrow")}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl lg:text-5xl font-light">
              {t("title")}
            </h2>
          </FadeIn>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          <GalleryItem index={0} className="col-span-2 row-span-2 min-h-[300px] md:min-h-[440px]" sizes="(max-width: 768px) 100vw, 50vw" delay={0.1}  onClick={setLightbox} />
          <GalleryItem index={1} className="aspect-square"                                          sizes="(max-width: 768px) 50vw, 25vw"  delay={0.15} onClick={setLightbox} />
          <GalleryItem index={2} className="aspect-square"                                          sizes="(max-width: 768px) 50vw, 25vw"  delay={0.2}  onClick={setLightbox} />
          <GalleryItem index={3} className="aspect-square"                                          sizes="(max-width: 768px) 50vw, 25vw"  delay={0.25} onClick={setLightbox} />
          <GalleryItem index={4} className="aspect-square"                                          sizes="(max-width: 768px) 50vw, 25vw"  delay={0.3}  onClick={setLightbox} />
          <GalleryItem index={5} className="col-span-2 aspect-[16/7]"                              sizes="(max-width: 768px) 100vw, 50vw" delay={0.2}  onClick={setLightbox} />
          <GalleryItem index={6} className="aspect-square"                                          sizes="(max-width: 768px) 50vw, 25vw"  delay={0.25} onClick={setLightbox} />
          <GalleryItem index={7} className="aspect-square"                                          sizes="(max-width: 768px) 50vw, 25vw"  delay={0.3}  onClick={setLightbox} />
          <GalleryItem index={8} className="col-span-2 md:col-span-4 aspect-[21/7]"               sizes="100vw"                          delay={0.2}  onClick={setLightbox} />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kép */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Navigáció */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
              aria-label="Előző"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
              aria-label="Következő"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Számláló + alt */}
            <div className="flex items-center justify-between mt-4 px-1">
              <p className="text-white/50 text-sm">{galleryImages[lightbox].alt}</p>
              <p className="text-white/30 text-sm tabular-nums">
                {lightbox + 1} <span className="mx-1.5">—</span> {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Bezárás */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            aria-label="Bezárás"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      )}
    </section>
  );
}