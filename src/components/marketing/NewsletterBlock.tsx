import { Button } from "@/components/ui/Button";

export function NewsletterBlock() {
  return (
    <section id="newsletter" className="container-lg py-16">
      <div className="grid gap-8 rounded-2xl bg-[#eaf3ff] p-6 md:grid-cols-[0.9fr_1.4fr] md:p-8">
        <div>
          <h2 className="max-w-sm text-2xl font-medium leading-tight text-primary">
            Sign up for product updates, service launches, and business tips.
          </h2>
          <p className="mt-5 text-sm text-text-secondary">
            Get calm, practical updates for SSL Business Platform customers.
          </p>
        </div>
        <form className="grid gap-3 self-center sm:grid-cols-2">
          <label className="sr-only" htmlFor="newsletter-first-name">
            First name
          </label>
          <input
            id="newsletter-first-name"
            className="h-11 rounded-sm border border-border-soft bg-white px-3 text-sm"
            placeholder="First name"
          />
          <label className="sr-only" htmlFor="newsletter-last-name">
            Last name
          </label>
          <input
            id="newsletter-last-name"
            className="h-11 rounded-sm border border-border-soft bg-white px-3 text-sm"
            placeholder="Last name"
          />
          <label className="sr-only" htmlFor="newsletter-email">
            Business email
          </label>
          <input
            id="newsletter-email"
            type="email"
            className="h-11 rounded-sm border border-border-soft bg-white px-3 text-sm"
            placeholder="Business email"
          />
          <label className="sr-only" htmlFor="newsletter-region">
            Region
          </label>
          <select
            id="newsletter-region"
            className="h-11 rounded-sm border border-border-soft bg-white px-3 text-sm text-text-secondary"
            defaultValue="Bangladesh"
          >
            <option>Bangladesh</option>
          </select>
          <div className="sm:col-span-2 sm:justify-self-end">
            <Button type="button" className="h-10 px-5">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
