"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Téma váltás"
    >
      {/* mounted előtt ne renderelj ikont – hydration mismatch elkerülése */}
      {mounted ? (
        resolvedTheme === "dark" ? (
          <IconSun className="size-4" />
        ) : (
          <IconMoon className="size-4" />
        )
      ) : (
        <IconMoon className="size-4" />
      )}
    </Button>
  );
}