import { Clock3, MessageCircle, Palette, Smartphone, Phone, ClipboardCheck } from "lucide-react";
import { Section } from "./Section";

const reasons = [
  { icon: MessageCircle, title: "Comunicare directă", text: "Vorbești direct cu omul care lucrează la proiectul tău." },
  { icon: Palette, title: "Design personalizat", text: "Structură și vizual construite pentru afacerea ta." },
  { icon: Smartphone, title: "Optimizare pentru mobil", text: "Site-ul este verificat pe ecrane mici, unde contează prima impresie." },
  { icon: Clock3, title: "Livrare clară și rapidă", text: "Știi de la început ce primești și când îl primești." },
  { icon: ClipboardCheck, title: "Formular de contact", text: "Cereri simple, trimise direct către echipa Nexora." },
  { icon: Phone, title: "Apel direct", text: "Poți suna atunci când vrei să clarifici rapid un detaliu." },
];

export function WhyNexora() {
  return (
    <Section
      id="de-ce-nexora"
      eyebrow="De ce Nexora?"
      title="O echipă mică, implicată în proiectul tău"
      description="Lucrăm simplu și transparent, cu atenție la detalii care ajută site-ul să inspire încredere și să aducă cereri."
      className="pt-12 lg:pt-16"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.title} className="surface-card flex gap-4 p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
              <reason.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold">{reason.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
