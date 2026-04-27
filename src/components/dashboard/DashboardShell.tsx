import type { ReactNode } from "react";
import { SidebarNav } from "./SidebarNav";
import { TopBar } from "./TopBar";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-surface">
      <TopBar />
      <div className="flex">
        <SidebarNav />
        <section className="min-w-0 flex-1 p-4 md:p-8">
          <div className="mx-auto max-w-[1200px]">{children}</div>
        </section>
      </div>
    </main>
  );
}
