import Container from "../components/Container";
import CTASection from "../components/CTASection";
import ModuleGrid from "../components/ModuleGrid";
import HeroSection from "../components/HeroSection";
import StatsStrip from "../components/StatsStrip";
import WhoItsForHeader from "../components/WhoItsForHeader";
import HomeWorkflow from "../components/HomeWorkflow";
import HomeTestimonials from "../components/HomeTestimonials";

export const metadata = {
  title: "ServicePro — Billing, Inventory, CRM & Repair Service Software for Electronics Shops",
  description:
    "ServicePro is an all-in-one platform for electronics stores and repair centres in India — sales & billing, inventory & purchases, CRM, accounting and end-to-end service ticket tracking, in one app.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Animated Stats strip */}
      <StatsStrip />

      {/* Who it's for */}
      <section className="bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-slate-950 py-16 sm:py-24">
        <Container>
          <WhoItsForHeader />
          <div className="mt-12">
            <ModuleGrid />
          </div>
        </Container>
      </section>

      {/* Animated Service Workflow & Accounting Sections */}
      <HomeWorkflow />

      {/* Animated Testimonials */}
      <HomeTestimonials />

      {/* Animated Call-to-action Section */}
      <CTASection />
    </>
  );
}

