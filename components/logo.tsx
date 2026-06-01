import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 40, height = 40 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-label="Sercli Kávézó logó"
    >
      {/* Csésze alap */}
      <path
        d="M8 28 Q8 32 20 32 Q32 32 32 28 L30 18 H10 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Csésze perem */}
      <path
        d="M8 18 H32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Fül */}
      <path
        d="M32 20 Q38 20 38 24 Q38 28 32 28"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Gőz bal */}
      <path
        d="M14 14 Q13 11 14 8 Q15 5 14 2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Gőz közép */}
      <path
        d="M20 15 Q19 12 20 9 Q21 6 20 3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Gőz jobb */}
      <path
        d="M26 14 Q25 11 26 8 Q27 5 26 2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Alap tányér */}
      <path
        d="M5 33 Q5 35 20 35 Q35 35 35 33 L33 32 H7 Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}