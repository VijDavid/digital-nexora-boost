import { Check, Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { CtaLink } from "./CtaButton";

const trust = [
  "Design modern",
  "Optimizat pentru mobil",
  "Orientat spre conversii",
  "Livrare rapidă",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-44">
      <div className="ambient-blur -top-32 left-1/2 size-[520px] -translate-x-1/2 bg-primary" />
      <div className="ambient-blur right-[-10%] top-40 size-[380px] bg-violet" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
            simplu, rapid
          </span>
          <p className="mt-3 text-sm text-muted-foreground">Plătești doar la final</p>
          <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Site-uri care transformă <span className="text-gradient">vizitatorii în clienți</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Creăm site-uri moderne, rapide și optimizate pentru conversii pentru afaceri care vor să
            crească online.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <CtaLink href="#contact" size="lg">
              Solicită o ofertă
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={site.phoneHref} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Sună acum
            </CtaLink>
          </div>

          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="size-4 text-success" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
