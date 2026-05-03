import {
  CreditCard,
  MessageSquareText,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/cn";

export const serviceIconMap = {
  "Payment Gateway": { Icon: CreditCard, tone: "text-primary bg-blue-50", hoverTone: "group-hover:bg-blue-100 group-focus-visible:bg-blue-100" },
  "Bulk SMS": { Icon: MessageSquareText, tone: "text-success bg-green-50", hoverTone: "group-hover:bg-green-100 group-focus-visible:bg-green-100" },
  "Corporate Top-Up": { Icon: Smartphone, tone: "text-amber-700 bg-amber-50", hoverTone: "group-hover:bg-amber-100 group-focus-visible:bg-amber-100" },
  "Sales Force Automation": { Icon: UsersRound, tone: "text-orange-800 bg-orange-50", hoverTone: "group-hover:bg-orange-100 group-focus-visible:bg-orange-100" },
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
