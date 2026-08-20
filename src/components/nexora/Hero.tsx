import { Check, Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { CtaLink } from "./CtaButton";

const trust = [
  "Design profesional",
  "Optimizat pentru mobil",
  "Site rapid",
  "Orientat spre conversii",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-28 sm:pb-20 sm:pt-32 lg:pb-32 lg:pt-44">
      <div className="ambient-blur -top-32 left-1/2 size-[420px] -translate-x-1/2 bg-primary" />
      <div className="ambient-blur right-[-10%] top-40 hidden size-[320px] bg-violet sm:block" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground">
            Agenție digitală din România
          </span>
          <h1 className="mt-6 text-[2.35rem] font-bold leading-[1.08] sm:mt-7 sm:text-5xl lg:text-6xl">
            Site-uri care transformă <span className="text-gradient">vizitatorii în clienți</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Creăm site-uri moderne, rapide și optimizate pentru conversii pentru afaceri care vor să
            crească online.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <CtaLink href="#contact" size="lg" className="shadow-lg shadow-primary/15">
              Solicită o ofertă
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={site.phoneHref} variant="outline" size="lg" className="border-primary/30 bg-surface/40">
              <Phone className="size-4" aria-hidden="true" />
              Sună acum
            </CtaLink>
          </div>

          <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-3 border-t border-border/70 pt-6 text-left sm:mt-10 sm:flex sm:justify-center sm:border-0 sm:pt-0">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <Check className="size-4 shrink-0 text-success" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
