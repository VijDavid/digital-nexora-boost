import { Monitor, Target, LineChart, Wrench, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    text: "Site-uri de prezentare construite pe măsura afacerii tale: structură clară, viteză mare și un design care inspiră încredere din primul ecran.",
    points: ["Design personalizat", "Structură orientată spre vânzare", "Optimizare tehnică SEO"],
  },
  {
    icon: Target,
    title: "Landing Pages",
    text: "Pagini dedicate campaniilor, gândite pentru un singur obiectiv: să obții cereri de ofertă și apeluri telefonice.",
    points: ["Mesaj și ofertă clare", "Formulare scurte", "Pregătite pentru reclame"],
  },
  {
    icon: LineChart,
    title: "Google Ads",
    text: "Campanii configurate corect pe cuvinte cheie cu intenție de cumpărare, cu monitorizarea cererilor generate.",
    points: ["Setare cont și campanii", "Cuvinte cheie locale", "Raportare lunară"],
  },
  {
    icon: Wrench,
    title: "Mentenanță & Optimizare",
    text: "Ne ocupăm de actualizări, securitate, backup și îmbunătățiri continue, ca site-ul să funcționeze impecabil.",
    points: ["Actualizări și backup", "Monitorizare viteză", "Modificări de conținut"],
  },
];

export function Services() {
  return (
    <Section
      id="servicii"
      eyebrow="Servicii"
      title="Tot ce îți trebuie pentru o prezență online care aduce clienți"
      description="Lucrăm cu afaceri mici și mijlocii din România și ne concentrăm pe rezultate măsurabile: mai multe cereri de ofertă, mai multe apeluri."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="surface-card group relative p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary">
                <s.icon className="size-6" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="size-5 text-muted-foreground/50 transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            <ul className="mt-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
