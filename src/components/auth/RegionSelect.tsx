export function RegionSelect() {
  return (
    <div>
      <label htmlFor="region" className="mb-2 block text-sm text-text-secondary">
        Region*
      </label>
      <select
        id="region"
        name="region"
        className="h-12 w-full rounded-lg border border-border bg-white px-4 text-base text-text-primary focus:border-primary"
        defaultValue="Bangladesh"
      >
        <option>Bangladesh</option>
      </select>
    </div>
  );
}
