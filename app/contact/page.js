import Container from "../../components/Container";
import Eyebrow from "../../components/Eyebrow";
import JsonLd from "../../components/JsonLd";
import { site } from "../../lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ServicePro team — email, phone, WhatsApp, or visit BUYP Technologies in Tenkasi, Tamil Nadu. Support available 24/7.",
  alternates: { canonical: "/contact/" },
};

const contactCards = [
  {
    label: "Email",
    value: site.company.email,
    href: `mailto:${site.company.email}`,
    icon: "M4 4h16v16H4V4zm0 0l8 8 8-8",
  },
  {
    label: "Phone / WhatsApp",
    value: site.company.phone,
    sub: site.company.phoneAvailability,
    href: `tel:${site.company.phone.replace(/\s/g, "")}`,
    icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  },
  {
    label: "Address",
    value: site.company.legalName,
    sub: site.company.address,
    icon: "M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11zM12 8a3 3 0 110 6 3 3 0 010-6z",
  },
  {
    label: "Website",
    value: site.company.website,
    href: `https://${site.company.website}`,
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20",
  },
  {
    label: "LinkedIn",
    value: "BUYP Technologies",
    href: site.company.linkedin,
    icon: "M4 4h16v16H4V4zm4 8v4m0-7v.01M12 16v-4m0 0a2 2 0 014 0v4",
  },
  {
    label: "Instagram",
    value: "@buyptechnologies",
    href: site.company.instagram,
    icon: "M4 4h16v16H4V4zm12 2h.01M8 8h8v8H8V8z",
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ServicePro",
  url: `${site.url}/contact/`,
  about: {
    "@type": "Organization",
    name: site.company.legalName,
    email: site.company.email,
    telephone: site.company.phone,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="text-4xl font-extrabold text-brand-navy dark:text-white">We&rsquo;d love to hear from you</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Questions about ServicePro, pricing, or setting up your shop? Reach us any way that works for you.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-slate-950 pb-16 sm:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {contactCards.map((c) => {
              const Wrapper = c.href ? "a" : "div";
              const wrapperProps = c.href
                ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={c.label}
                  {...wrapperProps}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card hover:shadow-cardHover transition-shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue dark:bg-blue-950/40 dark:text-blue-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d={c.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">{c.label}</p>
                  <p className="mt-1 text-sm font-bold text-brand-navy dark:text-white">{c.value}</p>
                  {c.sub && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{c.sub}</p>}
                </Wrapper>
              );
            })}
          </div>

          <div className="mt-14 max-w-2xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-card">
            <h2 className="text-xl font-extrabold text-brand-navy dark:text-white">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              This form opens your email client addressed to our support team.
            </p>
            <form
              action={`mailto:${site.company.email}`}
              method="post"
              encType="text/plain"
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input
                type="text"
                name="Name"
                placeholder="Your name"
                required
                className="sm:col-span-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-brand-blue"
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Mobile number"
                required
                className="sm:col-span-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-brand-blue"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email address"
                required
                className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-brand-blue"
              />
              <textarea
                name="Message"
                placeholder="Tell us about your shop and what you need"
                rows={4}
                required
                className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-brand-blue"
              />
              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-navy transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
