import {
  CreditCard,
  MessageSquareText,
  Smartphone,
  UsersRound,
  ShieldCheck,
  Zap,
  Link2,
  FileSignature,
  Bot,
  Cloud
} from "lucide-react";
import { cn } from "@/lib/cn";

export const serviceIconMap = {
  "Payment Gateway": { Icon: CreditCard, tone: "text-primary bg-blue-50", hoverTone: "group-hover:bg-blue-100 group-focus-visible:bg-blue-100" },
  "Bulk SMS": { Icon: MessageSquareText, tone: "text-success bg-green-50", hoverTone: "group-hover:bg-green-100 group-focus-visible:bg-green-100" },
  "Corporate Top-Up": { Icon: Smartphone, tone: "text-amber-700 bg-amber-50", hoverTone: "group-hover:bg-amber-100 group-focus-visible:bg-amber-100" },
  "Sales Force Automation": { Icon: UsersRound, tone: "text-orange-800 bg-orange-50", hoverTone: "group-hover:bg-orange-100 group-focus-visible:bg-orange-100" },
  "Hercules": { Icon: ShieldCheck, tone: "text-slate-600 bg-slate-50", hoverTone: "group-hover:bg-slate-100 group-focus-visible:bg-slate-100" },
  "Recharge": { Icon: Zap, tone: "text-emerald-600 bg-emerald-50", hoverTone: "group-hover:bg-emerald-100 group-focus-visible:bg-emerald-100" },
  "Pay Link": { Icon: Link2, tone: "text-teal-600 bg-teal-50", hoverTone: "group-hover:bg-teal-100 group-focus-visible:bg-teal-100" },
  "e-Sign": { Icon: FileSignature, tone: "text-indigo-600 bg-indigo-50", hoverTone: "group-hover:bg-indigo-100 group-focus-visible:bg-indigo-100" },
  "AI Chat": { Icon: Bot, tone: "text-pink-600 bg-pink-50", hoverTone: "group-hover:bg-pink-100 group-focus-visible:bg-pink-100" },
  "Storage": { Icon: Cloud, tone: "text-cyan-600 bg-cyan-50", hoverTone: "group-hover:bg-cyan-100 group-focus-visible:bg-cyan-100" },
} as const;

export type ServiceIconName = keyof typeof serviceIconMap;

export function ServiceIconBlock({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const { Icon, tone } = serviceIconMap[name];

  return (
    <span
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-xl",
        tone,
        className,
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}
