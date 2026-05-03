import Image from "next/image";
import type { ReactNode } from "react";
import { Logo } from "@/components/marketing/Header";
import { Badge } from "@/components/ui/Badge";
import { SimplifiedFooter } from "@/components/marketing/Footer";
import { cn } from "@/lib/cn";

export function AuthShell({
  children,
  badge,
  title,
  body,
  image = "/illustrations/business-profile.svg",
  contentAlign = "start",
}: {
  children: ReactNode;
  badge?: string;
  title: string;
  body: string;
  image?: string;
  contentAlign?: "start" | "center";
}) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex h-16 items-center justify-center border-b border-border">
        <Logo centered />
      </div>
      <div className="container-lg flex-1 grid gap-16 py-16 lg:grid-cols-[460px_1fr] lg:items-start lg:py-20">
        <section className={cn(contentAlign === "center" && "lg:self-center")}>{children}</section>
        <aside className="hidden text-center lg:block">
          <Image
            src={image}
            alt=""
            width={520}
            height={420}
            className="mx-auto h-auto w-[360px]"
            priority
          />
          {badge && (
            <Badge tone="green" className="mt-4">
              {badge}
            </Badge>
          )}
          <h2 className="mx-auto mt-7 max-w-md text-3xl font-medium leading-tight text-text-primary">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-text-secondary">
            {body}
          </p>
        </aside>
      </div>
      <SimplifiedFooter />
    </main>
  );
}
