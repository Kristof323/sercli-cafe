"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IconCalendarEvent } from "@tabler/icons-react";

// A közlemény 2026. október 25. végéig (budapesti idő szerint) látszik, utána magától eltűnik.
const SHOW_UNTIL = new Date("2026-10-26T00:00:00+02:00");

export function HolidayNotice() {
  const t = useTranslations("Hero");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(new Date() < SHOW_UNTIL);
  }, []);

  if (!visible) return null;

  const rows = [
    { day: t("holiday_day1"), hours: t("holiday_hours"), closed: false },
    { day: t("holiday_day2"), hours: t("holiday_hours"), closed: false },
    { day: t("holiday_day3"), hours: t("holiday_closed"), closed: true },
  ];

  return (
    <aside
      role="note"
      aria-label={t("holiday_eyebrow")}
      className="relative max-w-xl overflow-hidden rounded-xl border-2 border-primary/60 bg-gradient-to-br from-primary/25 via-background/85 to-background/85 backdrop-blur-md p-6 md:p-7 shadow-2xl shadow-primary/20"
    >
      {/* Bal oldali kiemelő csík */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1.5 bg-primary"
      />

      <div className="flex items-center gap-3">
        <span className="relative flex size-2.5" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
        </span>
        <IconCalendarEvent className="size-5 text-primary" aria-hidden />
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary">
          {t("holiday_eyebrow")}
        </p>
      </div>

      <p className="font-serif text-2xl md:text-4xl font-light leading-tight mt-4">
        {t("holiday_title")}
      </p>

      <dl className="mt-5 divide-y divide-primary/20 text-base md:text-lg">
        {rows.map((r) => (
          <div key={r.day} className="flex items-center justify-between gap-4 py-3">
            <dt className="text-foreground/80">{r.day}</dt>
            <dd
              className={
                r.closed
                  ? "rounded-md bg-primary px-3 py-0.5 font-semibold text-primary-foreground"
                  : "font-semibold tabular-nums text-foreground"
              }
            >
              {r.hours}
            </dd>
          </div>
        ))}
      </dl>

      <p className="text-sm text-muted-foreground mt-4">{t("holiday_note")}</p>
    </aside>
  );
}
