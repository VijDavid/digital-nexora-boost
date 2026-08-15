import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Section } from "./Section";
import { LeadForm } from "./LeadForm";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Cere o ofertă sau sună-ne direct"
      description="Îți răspundem rapid, în timpul programului de lucru. Poți alege varianta care ți se potrivește: un apel scurt sau formularul de mai jos."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div className="space-y-4">
          <a
            href={site.phoneHref}
            className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-primary/50"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary">
              <Phone className="size-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Telefon
              </span>
              <span className="mt-1 block font-display text-xl font-semibold">{site.phone}</span>
            </span>
          </a>
          <a
            href={site.emailHref}
            className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-primary/50"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary">
              <Mail className="size-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Email
              </span>
              <span className="mt-1 block text-base font-medium break-all">{site.email}</span>
            </span>
          </a>
          <div className="surface-card space-y-4 p-6 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              {site.hours}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              Colaborăm cu afaceri din toată România, online.
            </p>
          </div>
        </div>

        <LeadForm />
      </div>
    </Section>
  );
}
