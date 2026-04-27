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

const anchors = ["Overview", "Services", "Activation", "Dashboard", "FAQ"];

export function ProductIconStrip() {
  return (
    <section className="container-lg -mt-2 pb-16">
      <div className="mx-auto mb-10 flex w-fit max-w-full flex-wrap items-center justify-center rounded-full border border-border-soft bg-white px-3 py-2 text-sm text-text-secondary shadow-sm">
        {anchors.map((item) => (
          <Link
            key={item}
            href={`/#${item === "FAQ" ? "faq" : item.toLowerCase()}`}
            className="rounded-full px-4 py-2 hover:bg-surface hover:text-text-primary"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-5">
        {productIconItems.map((item, index) => {
          const { Icon, tone } = iconMap[index];
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
    </section>
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
