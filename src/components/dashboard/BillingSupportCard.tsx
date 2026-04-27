import { Headphones, Receipt } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

export function BillingSupportCard() {
  const cards = [
    {
      title: "Billing",
      body: "View invoices, activation fees, subscriptions, and payment history.",
      cta: "Open billing",
      icon: Receipt,
    },
    {
      title: "Support",
      body: "Open support requests, contact sales, and track service assistance.",
      cta: "Get support",
      icon: Headphones,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <Card key={card.title} className="p-6">
          <IconBadge icon={card.icon} />
          <h2 className="mt-5 text-xl font-semibold text-text-primary">{card.title}</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">{card.body}</p>
          <ButtonLink href="/get-started" variant="secondary" className="mt-6 h-10 px-5">
            {card.cta}
          </ButtonLink>
        </Card>
      ))}
    </div>
  );
}
