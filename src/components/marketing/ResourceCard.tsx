import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const swatches = ["bg-blue-50", "bg-green-50", "bg-amber-50", "bg-red-50", "bg-surface"];

export function ResourceCard({ title, index }: { title: string; index: number }) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-32 border-b border-border-soft ${swatches[index % swatches.length]}`}>
        <div className="flex h-full items-center justify-center">
          <div className="w-36 rounded-2xl border border-border-soft bg-white p-4">
            <div className="mb-3 h-2.5 w-24 rounded-full bg-border" />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-border-soft" />
              <div className="h-2 w-2/3 rounded-full bg-border-soft" />
            </div>
            <div className="mt-4 h-6 w-20 rounded-full bg-primary/10" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="min-h-14 text-base font-semibold leading-6 text-text-primary">
          {title}
        </h3>
        <Link
          href="/get-started"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary"
        >
          Learn more
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
