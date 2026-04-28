import {
  Banknote,
  Cloud,
  Code2,
  CreditCard,
  MessageSquareText,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { productIconItems } from "@/data/mockPlatform";

const iconMap = [
  { Icon: CreditCard, tone: "text-primary bg-blue-50" },
  { Icon: MessageSquareText, tone: "text-success bg-green-50" },
  { Icon: Smartphone, tone: "text-amber-700 bg-amber-50" },
  { Icon: RotateCcw, tone: "text-error bg-red-50" },
  { Icon: Cloud, tone: "text-primary bg-blue-50" },
  { Icon: ShieldCheck, tone: "text-success bg-green-50" },
  { Icon: Code2, tone: "text-error bg-red-50" },
  { Icon: UsersRound, tone: "text-amber-700 bg-amber-50" },
];

const productHrefs: Record<string, string> = {
  "Payment Gateway": "/products/payment-gateway",
  SMS: "/products/messaging-suite",
  "Corporate Top-Up": "/products/corporate-recharge",
  "Virtual Recharge": "/products/corporate-recharge",
};

export function ProductIconStrip() {
  return (
    <div className="mt-12 flex flex-wrap items-start justify-center gap-x-5 gap-y-5">
      {productIconItems.map((item, index) => {
        const { Icon, tone } = iconMap[index];
        return (
          <Link
            key={item}
            href={productHrefs[item] ?? "/get-started"}
            className="flex w-[92px] flex-col items-center gap-2 text-center"
          >
            <span
              className={`inline-flex size-9 items-center justify-center rounded-xl ${tone}`}
            >
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-xs leading-4 text-text-secondary">{item}</span>
          </Link>
        );
      })}
    </div>
  );
}

export function MiniPaymentMarks() {
  const marks = [
    { icon: CreditCard, tone: "text-primary bg-blue-50" },
    { icon: Smartphone, tone: "text-success bg-green-50" },
    { icon: Banknote, tone: "text-amber-700 bg-amber-50" },
    { icon: Code2, tone: "text-error bg-red-50" },
  ];

  return (
    <div className="flex items-center justify-center gap-3">
      {marks.map(({ icon: Icon, tone }, index) => (
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
