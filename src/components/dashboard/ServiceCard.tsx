import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ServiceCard({
  service,
}: {
  service: {
    title: string;
    status: string;
    description: string;
    cta: string;
    logo: string;
    href?: string;
  };
}) {
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <Image src={service.logo} alt="" width={120} height={24} className="h-5 w-auto object-contain" />
        {service.status === "Recommended" ? (
          <Badge tone="blue">Recommended</Badge>
        ) : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-6 text-text-primary">
        {service.title}
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
