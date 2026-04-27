import Image from "next/image";
import type { ReactNode } from "react";
import { Logo } from "@/components/marketing/Header";
import { Badge } from "@/components/ui/Badge";

export function AuthShell({
  children,
  badge = "Included feature",
  title,
  body,
  image = "/illustrations/business-profile.svg",
}: {
  children: ReactNode;
  badge?: string;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex h-[74px] items-center justify-center border-b border-border">
        <Logo centered />
      </div>
      <div className="container-lg grid gap-16 py-16 lg:grid-cols-[460px_1fr] lg:items-start lg:py-20">
        <section>{children}</section>
        <aside className="hidden text-center lg:block">
          <Image
            src={image}
            alt=""
            width={520}
            height={420}
            className="mx-auto h-auto w-[360px]"
            priority
          />
          <Badge tone="green" className="mt-4">
            {badge}
          </Badge>
          <h2 className="mx-auto mt-7 max-w-md text-3xl font-medium leading-tight text-text-primary">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-text-secondary">
            {body}
          </p>
        </aside>
      </div>
    </main>
  );
}
