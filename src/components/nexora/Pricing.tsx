import { Check } from "lucide-react";
import { Section } from "./Section";
import { CtaLink } from "./CtaButton";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "START",
    oldPrice: "2000 RON",
    price: "699 RON",
    savings: "75% reducere",
    note: "Ideal pentru afaceri la început de drum",
    features: [
      "Landing page sau site de prezentare",
      "Design modern, adaptat mobil",
      "Formular de contact",
      "Optimizare tehnică de bază",
      "Livrare în maxim 24 de ore",
    ],
    cta: "Solicită oferta START",
    highlight: false,
  },
  {
    name: "PROFESSIONAL",
    oldPrice: "3000 RON",
    price: "999 RON",
    savings: "65% reducere",
    note: "Cea mai aleasă variantă pentru afaceri locale",
    features: [
      "Site de prezentare, până la 5 pagini",
      "Structură orientată spre conversii",
      "Texte optimizate pentru Google",
      "Integrare Google Maps și WhatsApp",
      "Configurare analytics",
      "Livrare în 2–5 zile",
    ],
    cta: "Vreau pachetul Professional",
    highlight: true,
  },
  {
    name: "CUSTOM",
    price: "Solicită oferta",
    note: "Pentru proiecte complexe sau campanii Ads",
    features: [
      "Site sau landing page personalizat",
      "Campanii Google Ads",
      "Funcționalități la cerere",
      "Mentenanță lunară",
      "Consultanță dedicată",
    ],
    cta: "Discutăm proiectul",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="preturi"
      eyebrow="Prețuri"
      title="Pachete transparente, fără costuri ascunse"
      description="Prețurile sunt de start și se stabilesc final după o scurtă discuție despre nevoile proiectului tău."
    >
      <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
        {plans.map((p) => (
          <article
            key={p.name}
            className={cn(
              "surface-card relative flex h-full flex-col p-7",
              p.highlight && "border-primary/50 glow-ring lg:-mt-4 lg:p-8",
            )}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Recomandat
              </span>
            )}
            <h3 className="text-sm font-semibold tracking-[0.16em] text-muted-foreground">
              {p.name}
            </h3>
            {p.oldPrice ? (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-lg text-muted-foreground line-through">{p.oldPrice}</span>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {p.savings}
                </span>
              </div>
            ) : null}
            <p className="mt-2 font-display text-3xl font-bold">{p.price}</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            <ul className="mt-7 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <CtaLink
              href="#contact"
              variant={p.highlight ? "primary" : "outline"}
              size="lg"
              className="mt-8 w-full"
            >
              {p.cta}
            </CtaLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
