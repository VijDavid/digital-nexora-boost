import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nexora/Header";
import { Hero } from "@/components/nexora/Hero";
import { Services } from "@/components/nexora/Services";
import { Portfolio } from "@/components/nexora/Portfolio";
import { Process } from "@/components/nexora/Process";
import { Pricing } from "@/components/nexora/Pricing";
import { ContactSection } from "@/components/nexora/ContactSection";
import { FinalCta } from "@/components/nexora/FinalCta";
import { Footer } from "@/components/nexora/Footer";
import { site } from "@/lib/site";

const title = "Nexora Digital — Site-uri care aduc clienți | Web Design România";
const description =
  "Agenție digitală din România: site-uri de prezentare, landing pages, Google Ads și mentenanță. Design modern, optimizat pentru mobil și conversii. Cere o ofertă gratuită.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          description,
          telephone: site.phone,
          email: site.email,
          areaServed: "RO",
          serviceType: [
            "Web design",
            "Landing pages",
            "Google Ads",
            "Marketing digital",
            "Mentenanță site",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
