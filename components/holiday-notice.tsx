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
      className="max-w-md rounded-lg border border-primary/30 bg-background/70 backdrop-blur-sm p-5 shadow-sm"
    >
      <div className="flex items-center gap-2 text-primary">
        <IconCalendarEvent className="size-4" aria-hidden />
        <p className="text-xs tracking-[0.3em] uppercase">
          {t("holiday_eyebrow")}
        </p>
      </div>

      <p className="font-serif text-xl md:text-2xl font-light leading-snug mt-3">
        {t("holiday_title")}
      </p>

      <dl className="mt-4 divide-y divide-border/70 text-sm">
        {rows.map((r) => (
          <div key={r.day} className="flex items-center justify-between py-2">
            <dt className="text-muted-foreground">{r.day}</dt>
            <dd
              className={
                r.closed ? "font-medium text-primary" : "font-medium tabular-nums"
              }
            >
              {r.hours}
            </dd>
          </div>
        ))}
      </dl>

      <p className="text-xs text-muted-foreground mt-3">{t("holiday_note")}</p>
    </aside>
  );
}
