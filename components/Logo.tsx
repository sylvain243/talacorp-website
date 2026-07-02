import Link from "next/link";

interface LogoProps {
  /** color = logo couleur (menu blanc) · light = logo blanc (fond marine) */
  variant?: "color" | "light";
  className?: string;
}

/** Fichiers originaux dans /public — ne pas retoucher */
const logos = {
  color: "/logo-color.png",
  light: "/logo-white.png",
} as const;

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Talacorp — Accueil">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${logos[variant]}?v=3`}
        alt="Talacorp"
        className="block h-10 w-auto max-w-[200px] object-contain sm:h-11 sm:max-w-[220px]"
        width={220}
        height={60}
        decoding="async"
      />
    </Link>
  );
}
