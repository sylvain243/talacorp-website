import { LucideIcon, Megaphone, Monitor, Palette, Target } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  megaphone: Megaphone,
  monitor: Monitor,
  palette: Palette,
};

interface ServiceIconProps {
  icon: string;
  className?: string;
  variant?: "gold" | "navy";
}

export default function ServiceIcon({ icon, className = "", variant = "navy" }: ServiceIconProps) {
  const Icon = iconMap[icon] ?? Target;

  const styles =
    variant === "gold"
      ? "bg-gold text-white"
      : "bg-navy text-gold";

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-card ${styles} ${className}`}
    >
      <Icon size={26} aria-hidden="true" />
    </div>
  );
}
