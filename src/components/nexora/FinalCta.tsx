import { Phone, ArrowRight } from "lucide-react";
import { CtaLink } from "./CtaButton";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="surface-card relative overflow-hidden px-7 py-14 text-center lg:px-16 lg:py-20">
          <div className="ambient-blur left-1/2 top-0 size-[420px] -translate-x-1/2 bg-primary" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            Este timpul ca afacerea ta să arate la fel de bine online precum în realitate.
          </h2>
          <div className="relative mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <CtaLink href="#contact" size="lg">
              Solicită o ofertă
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={site.phoneHref} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Sună acum
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
