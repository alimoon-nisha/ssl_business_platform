import type { ReactNode } from "react";
import Image from "next/image";
import { TopBar } from "@/components/dashboard/TopBar";
import { SimplifiedFooter } from "@/components/marketing/Footer";

export function ServiceApplicationShell({
  children,
  title,
  body,
  image = "/illustrations/business-profile.svg",
}: {
  children: ReactNode;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar showSearch={false} />
      <div className="container-lg flex-1 grid gap-16 py-12 lg:grid-cols-[1fr_400px] lg:items-start lg:py-16">
        <section>{children}</section>
        <aside className="hidden text-center lg:block">
          <div className="sticky top-24">
            <Image
              src={image}
              alt=""
              width={520}
              height={420}
              className="mx-auto h-auto w-[360px]"
              priority
            />
            <h2 className="mx-auto mt-10 max-w-md text-3xl font-medium leading-tight text-text-primary">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-text-secondary">
              {body}
            </p>
          </div>
        </aside>
      </div>
      <SimplifiedFooter />
    </main>
  );
}
