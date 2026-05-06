import type { ReactNode } from "react";
import { SimplifiedFooter } from "@/components/marketing/Footer";
import { SidebarNav } from "./SidebarNav";
import { TopBar } from "./TopBar";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-surface">
      <TopBar />
      <div className="flex min-h-0 flex-1">
        <SidebarNav />
        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          <section className="min-w-0 flex-1 p-4 md:p-8">
            <div className="mx-auto max-w-[1200px]">{children}</div>
          </section>
          <SimplifiedFooter />
        </div>
      </div>
    </main>
  );
}
