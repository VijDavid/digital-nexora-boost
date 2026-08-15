import { Section } from "./Section";
import construction from "@/assets/portfolio-construction.jpg";
import salon from "@/assets/portfolio-salon.jpg";
import services from "@/assets/portfolio-services.jpg";

const projects = [
  {
    image: construction,
    name: "Firmă de construcții",
    type: "Site de prezentare",
    text: "Structură care pune în față lucrările realizate și un formular de cerere ofertă prezent pe fiecare secțiune.",
    tags: ["Prezentare", "Galerie lucrări", "Formular ofertă"],
  },
  {
    image: salon,
    name: "Salon de înfrumusețare",
    type: "Site local + rezervări",
    text: "Pagină de servicii cu prețuri, program și buton de programare vizibil permanent pe mobil.",
    tags: ["Local SEO", "Programări", "Mobil first"],
  },
  {
    image: services,
    name: "Companie de servicii profesionale",
    type: "Landing page campanie",
    text: "Landing page dedicat campaniilor Google Ads, cu un singur obiectiv: cererea de consultanță.",
    tags: ["Google Ads", "Landing page", "Conversii"],
  },
];

export function Portfolio() {
  return (
    <Section
      id="portofoliu"
      eyebrow="Portofoliu"
      title="Exemple de proiecte demonstrative"
      description="Proiectele de mai jos sunt concepte demonstrative create de echipa noastră pentru a arăta modul în care abordăm designul și structura orientată spre conversii."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="surface-card overflow-hidden">
            <div className="relative border-b border-border">
              <img
                src={p.image}
                alt={`Concept de design pentru ${p.name.toLowerCase()}`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-4/3 w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs text-foreground backdrop-blur">
                Proiect demonstrativ
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-primary">{p.type}</p>
              <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
