import { Globe, Trophy, CheckCircle, Zap, type LucideIcon } from "lucide-react";

/**
 * "Why Choose Us" items for the Home page.
 * Icons are lucide-react, drawn in gold on a forest-green rounded square.
 */

export type WhyUsItem = {
  key: "network" | "experience" | "quality" | "response";
  icon: LucideIcon;
};

export const whyUsItems: WhyUsItem[] = [
  { key: "network", icon: Globe },
  { key: "experience", icon: Trophy },
  { key: "quality", icon: CheckCircle },
  { key: "response", icon: Zap },
];
