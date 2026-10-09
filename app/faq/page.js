import Container from "../../components/Container";
import Eyebrow from "../../components/Eyebrow";
import FaqAccordion from "../../components/FaqAccordion";
import CTASection from "../../components/CTASection";
import JsonLd from "../../components/JsonLd";
import { faqData } from "../../lib/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about ServicePro: features, pricing, free trial, WhatsApp invoicing, data security and customer support.",
  alternates: { canonical: "/faq/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Support</Eyebrow>
            <h1 className="text-4xl font-extrabold text-brand-navy dark:text-white">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Can&rsquo;t find what you&rsquo;re looking for?{" "}
              <a href="/contact/" className="font-bold text-brand-blue">
                Talk to our team
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FaqAccordion categories={faqData} />
        </Container>
      </section>

      <CTASection
        title="Still have questions?"
        subtitle="Our team replies over phone, WhatsApp and email — every day of the week."
      />
    </>
  );
}
