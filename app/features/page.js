import Link from "next/link";
import Container from "../../components/Container";
import Eyebrow from "../../components/Eyebrow";
import CTASection from "../../components/CTASection";
import ModuleBlock from "../../components/ModuleBlock";
import JsonLd from "../../components/JsonLd";
import { moduleGroups, roadmapItems } from "../../lib/modules";
import { site } from "../../lib/site";

export const metadata = {
  title: "Features — Every Module Inside ServicePro",
  description:
    "Explore every ServicePro module in detail: Dashboard, Settings, Purchase & Inventory, Sales & Billing, Service & Repair Management, Day Sheet, Reports & Auditing, Invoice Centre and Warranty tracking.",
  alternates: { canonical: "/features/" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ServicePro Modules",
  itemListElement: moduleGroups.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: m.title,
    description: m.summary,
    url: `${site.url}/features/#${m.id}`,
  })),
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow>Full feature breakdown</Eyebrow>
            <h1 className="text-4xl font-extrabold text-brand-navy dark:text-white">
              Everything ServicePro can do, module by module
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales, purchases, inventory, CRM, accounting and a complete repair-service
              workflow — all included in every plan, with no feature gated behind a higher tier.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {moduleGroups.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                {m.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <div className="divide-y divide-slate-100">
          {moduleGroups.map((m, i) => (
            <ModuleBlock key={m.id} mod={m} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>

      {/* Roadmap */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blueLight mb-3">
              What&rsquo;s next
            </p>
            <h2 className="text-3xl font-extrabold text-white">On the ServicePro roadmap</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              ServicePro is actively evolving. Here&rsquo;s what we&rsquo;re building next for
              businesses that are scaling beyond a single counter.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {roadmapItems.map((r) => (
              <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="inline-block rounded-full bg-brand-blue/20 px-3 py-1 text-[11px] font-bold text-brand-blueLight">
                  COMING SOON
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 dark:text-slate-500">{r.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="See every module in action"
        subtitle="Start your free 15-day trial and explore the full ServicePro workspace yourself."
      />
    </>
  );
}
