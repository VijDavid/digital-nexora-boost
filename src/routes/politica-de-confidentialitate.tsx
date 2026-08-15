import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nexora/Header";
import { Footer } from "@/components/nexora/Footer";
import { site } from "@/lib/site";

const title = "Politica de confidențialitate — Nexora Digital";
const description =
  "Cum colectează și folosește Nexora Digital datele trimise prin formularul de contact și de cerere de ofertă.";

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-confidentialitate" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-confidentialitate" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-36 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Politica de confidențialitate</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Ce date colectăm</h2>
            <p className="mt-2">
              Colectăm doar datele pe care le trimiți voluntar prin formularul de cerere de ofertă:
              nume, denumirea companiei, număr de telefon, adresă de email, tipul proiectului,
              bugetul estimat și mesajul tău.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">În ce scop le folosim</h2>
            <p className="mt-2">
              Folosim aceste date exclusiv pentru a răspunde solicitării tale și pentru a pregăti o
              ofertă. Nu vindem și nu transmitem datele către terți în scopuri de marketing.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Drepturile tale</h2>
            <p className="mt-2">
              Poți solicita oricând accesul, corectarea sau ștergerea datelor tale scriindu-ne la{" "}
              <a href={site.emailHref} className="text-primary hover:underline">
                {site.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Pentru orice întrebare legată de prelucrarea datelor ne poți contacta telefonic la{" "}
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
