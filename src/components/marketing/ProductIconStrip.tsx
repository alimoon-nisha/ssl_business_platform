import {
  Banknote,
  Code2,
  CreditCard,
  MessageSquareText,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { productIconItems } from "@/data/mockPlatform";

export const serviceIconMap = {
  "Payment Gateway": { Icon: CreditCard, tone: "text-primary bg-blue-50" },
  "Bulk SMS": { Icon: MessageSquareText, tone: "text-success bg-green-50" },
  "Corporate Top-Up": { Icon: Smartphone, tone: "text-amber-700 bg-amber-50" },
  "Sales Force Automation": { Icon: UsersRound, tone: "text-orange-800 bg-orange-50" },
};



export function ProductIconStrip() {
  return (
    <div className="mb-8 mt-12 flex flex-wrap items-start justify-center gap-x-5 gap-y-5">
      {productIconItems.map((item) => {
        const { Icon, tone } = serviceIconMap[item as keyof typeof serviceIconMap];
        return (
          <div
            key={item}
            className="flex w-[92px] flex-col items-center gap-2 text-center"
          >
            <span
              className={`inline-flex size-9 items-center justify-center rounded-xl ${tone}`}
            >
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-xs leading-4 text-text-secondary">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export function MiniPaymentMarks() {
  const marks = Object.values(serviceIconMap);

  return (
    <div className="flex items-center justify-center gap-3">
      {marks.map(({ Icon, tone }, index) => (
        <span
          key={index}
          className={`inline-flex size-8 items-center justify-center rounded-lg ${tone}`}
        >
          <Icon className="size-4" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
