import {
  Activity,
  BookOpen,
  Bot,
  Compass,
  Heart,
  Home,
  Palette,
  Sun,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  book: BookOpen,
  heart: Heart,
  palette: Palette,
  activity: Activity,
  compass: Compass,
  bot: Bot,
  sun: Sun,
  users: Users,
  home: Home,
  sparkles: Sparkles,
};

export const TONE_BG: Record<string, string> = {
  gold: "bg-gold/20 text-navy",
  coral: "bg-coral/20 text-navy",
  apricot: "bg-apricot/20 text-navy",
  leaf: "bg-leaf/20 text-navy",
  sky: "bg-sky/25 text-navy",
  navy: "bg-navy/10 text-navy",
};

export function ToneIcon({
  name,
  tone = "gold",
  size = 22,
  className = "",
}: {
  name: string;
  tone?: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Sparkles;
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl ${TONE_BG[tone] ?? TONE_BG.gold} ${className}`}
      style={{ width: size * 2.1, height: size * 2.1 }}
    >
      <Icon size={size} strokeWidth={1.7} aria-hidden="true" />
    </span>
  );
}
