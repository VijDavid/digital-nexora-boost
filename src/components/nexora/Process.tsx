import { Section } from "./Section";

const steps = [
  {
    n: "01",
    title: "Discuție",
    text: "Vorbim despre afacerea ta, clienții tăi și obiectivul site-ului. Primești recomandări clare, fără termeni tehnici.",
  },
  {
    n: "02",
    title: "Concept",
    text: "Definim structura paginilor și direcția de design, astfel încât fiecare secțiune să aibă un rol în conversie.",
  },
  {
    n: "03",
    title: "Dezvoltare",
    text: "Construim site-ul rapid și responsive, cu texte, imagini, formulare și optimizări tehnice SEO.",
  },
  {
    n: "04",
    title: "Lansare",
    text: "Publicăm site-ul, verificăm totul pe mobil și desktop și îți arătăm cum urmărești cererile primite.",
  },
];

export function Process() {
  return (
    <Section
      id="proces"
      eyebrow="Proces"
      title="Un proces simplu, în 4 pași"
      description="Știi exact ce urmează la fiecare etapă și cât durează. Fără surprize și fără costuri ascunse."
    >
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="surface-card relative p-6">
            <span className="font-display text-3xl font-bold text-primary/40">{s.n}</span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
