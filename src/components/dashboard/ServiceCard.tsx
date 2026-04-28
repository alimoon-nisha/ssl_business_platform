import { CreditCard, MessageSquareText, ShieldCheck, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

const icons = [CreditCard, MessageSquareText, Smartphone, ShieldCheck];

export function ServiceCard({
  service,
  index,
}: {
  service: {
    name: string;
    status: string;
    description: string;
    cta: string;
    href?: string;
  };
  index: number;
}) {
  const Icon = icons[index] ?? CreditCard;

  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <IconBadge icon={Icon} tone={index === 1 ? "green" : index === 2 ? "amber" : "blue"} />
        <Badge tone={service.status === "Recommended" ? "blue" : "gray"}>
          {service.status}
        </Badge>
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-6 text-text-primary">
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
        {service.description}
      </p>
      <ButtonLink
        href={service.href ?? "/get-started"}
        variant="secondary"
        className="mt-5 h-10 w-fit px-5"
      >
        {service.cta}
      </ButtonLink>
    </Card>
  );
}
