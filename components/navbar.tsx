"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "menu", href: "#menu" },
  { key: "about", href: "#about" },
  { key: "rendezveny", href: "#rendezveny" },
  { key: "gallery", href: "#galeria" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const logoSrc = !mounted || resolvedTheme === "dark"
    ? "/images/logo/feher_atlatszo.png"
    : "/images/logo/fekete_atlatszo.png";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">

          {/* Logo + Név */}
          <button
            onClick={() => scrollTo("#top")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Sercli Kávézó főoldal"
          >
            <Image
              src={logoSrc}
              alt="Sercli logó"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
              priority
            />
            <span className="font-serif text-lg tracking-wide">Sercli</span>
          </button>

          {/* Desktop navigáció */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {t(link.key)}
                </button>
              </li>
            ))}
          </ul>

          {/* Jobb oldal: Theme + Lang + Mobile menu */}
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobil hamburger */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden ml-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü megnyitása"
            >
              {isOpen ? <IconX className="size-4" /> : <IconMenu2 className="size-4" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobil menü */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {t(link.key)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}