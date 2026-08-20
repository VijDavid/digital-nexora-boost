import { Check } from "lucide-react";
import { Section } from "./Section";
import { CtaLink } from "./CtaButton";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "START",
    oldPrice: "2.000 RON",
    price: "600 RON",
    discount: "70% reducere",
    note: "Ideal pentru afaceri la început de drum",
    features: [
      "Site de prezentare, o pagină",
      "Design modern, adaptat mobil",
      "Formular de contact",
      "Optimizare tehnică de bază",
      "Livrare în 5–7 zile",
    ],
    cta: "Solicită o ofertă",
    highlight: false,
  },
  {
    name: "BUSINESS",
    oldPrice: "3.000 RON",
    price: "999 RON",
    discount: "67% reducere",
    note: "Cea mai aleasă variantă pentru afaceri locale",
    features: [
      "Site de prezentare, până la 5 pagini",
      "Structură orientată spre conversii",
      "Texte optimizate pentru Google",
      "Integrare Google Maps și WhatsApp",
      "Configurare analytics",
      "Livrare în 7–10 zile",
    ],
    cta: "Vreau pachetul Business",
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
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {p.oldPrice && <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>}
              <p className="font-display text-3xl font-bold">{p.price}</p>
              {p.discount && <span className="text-xs font-semibold text-success">{p.discount}</span>}
            </div>
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
