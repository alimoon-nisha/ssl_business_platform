import { cn } from "@/lib/cn";

export function RegionSelect({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor="region" className="mb-2 block text-sm text-text-secondary">
        Region<span className="text-error">*</span>
      </label>
      <select
        id="region"
        name="region"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-12 w-full rounded-lg border border-border bg-white px-4 text-base text-text-primary focus:border-primary",
          error && "border-error focus:border-error",
        )}
      >
        <option value="">Select region</option>
        <option value="Bangladesh">Bangladesh</option>
      </select>
      {error ? <p className="mt-2 text-sm text-error">{error}</p> : null}
    </div>
  );
}
