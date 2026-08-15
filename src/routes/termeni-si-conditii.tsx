import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nexora/Header";
import { Footer } from "@/components/nexora/Footer";
import { site } from "@/lib/site";

const title = "Termeni și condiții — Nexora Digital";
const description =
  "Condițiile în care Nexora Digital oferă servicii de web design, landing pages, Google Ads și mentenanță site.";

export const Route = createFileRoute("/termeni-si-conditii")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termeni-si-conditii" },
    ],
    links: [{ rel: "canonical", href: "/termeni-si-conditii" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-36 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Termeni și condiții</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Servicii</h2>
            <p className="mt-2">
              Nexora Digital oferă servicii de creare site-uri de prezentare, landing pages,
              administrare campanii Google Ads, marketing digital și mentenanță site.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Oferte și prețuri</h2>
            <p className="mt-2">
              Prețurile afișate pe site sunt prețuri de pornire, exprimate în RON. Prețul final se
              stabilește în oferta transmisă în scris, după discutarea cerințelor proiectului.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Colaborare și livrare</h2>
            <p className="mt-2">
              Termenele de livrare estimate se confirmă în ofertă și depind de primirea la timp a
              materialelor necesare (texte, imagini, acces la domeniu sau hosting).
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Pentru clarificări scrie la{" "}
              <a href={site.emailHref} className="text-primary hover:underline">
                {site.email}
              </a>{" "}
              sau sună la{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
