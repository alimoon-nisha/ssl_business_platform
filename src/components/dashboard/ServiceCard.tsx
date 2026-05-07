import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    <Card className="group flex h-full flex-col p-5 transition-all duration-300 hover:border-primary/20">
      <div className="flex items-center justify-between gap-4">
        <div className="relative h-8 w-28 shrink-0">
          <Image 
            src={service.logo} 
            alt="" 
            fill 
            className="object-contain object-left" 
          />
        </div>
        {service.status === "Active" ? (
          <Badge tone="green" className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
            Active
          </Badge>
        ) : null}
      </div>
      
      <div className="mt-7 flex flex-1 flex-col">
        <h3 className="text-[17px] font-bold leading-tight text-text-primary">
          {service.title}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-text-secondary">
          {service.description}
        </p>
      </div>

      <div className="mt-8">
        <ButtonLink
          href={service.href ?? "/get-started"}
          variant="secondary"
          className="h-10 w-fit min-w-[140px] px-4 text-[13px] font-bold border-border-soft hover:bg-blue-50 hover:text-primary hover:border-primary/30 transition-all"
        >
          {service.cta}
        </ButtonLink>
      </div>
    </Card>
  );
}
