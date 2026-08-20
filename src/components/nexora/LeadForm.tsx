import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

type Values = {
  nume: string;
  companie: string;
  telefon: string;
  email: string;
  tipProiect: string;
  buget: string;
  mesaj: string;
};

const empty: Values = {
  nume: "",
  companie: "",
  telefon: "",
  email: "",
  tipProiect: "",
  buget: "",
  mesaj: "",
};

const projectTypes = [
  "Site de prezentare",
  "Landing page",
  "Google Ads",
  "Mentenanță & optimizare",
  "Altceva",
];

const budgets = ["Până la 600 RON", "600 – 1.000 RON", "1.000 – 2.500 RON", "Peste 2.500 RON", "Nu știu încă"];

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (v.nume.trim().length < 2) e.nume = "Te rugăm să introduci numele tău.";
  if (!/^[+0-9()\s-]{9,20}$/.test(v.telefon.trim()))
    e.telefon = "Introdu un număr de telefon valid.";
  if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v.email.trim()))
    e.email = "Introdu o adresă de email validă.";
  if (!v.tipProiect) e.tipProiect = "Selectează tipul proiectului.";
  if (v.mesaj.trim().length < 10) e.mesaj = "Spune-ne în câteva cuvinte ce ai nevoie.";
  return e;
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40";

export function LeadForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const next = validate(values);
  setErrors(next);

  if (Object.keys(next).length > 0) return;

  setSending(true);

  try {
    const response = await fetch("https://formspree.io/f/xppajrwg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setSent(true);
  } catch (error) {
    console.error("Formspree error:", error);
    alert("A apărut o eroare. Te rugăm să încerci din nou.");
  } finally {
    setSending(false);
  }
};

  if (sent) {
    return (
      <div className="surface-card flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="size-12 text-success" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold">Cererea ta a fost trimisă</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Îți mulțumim, {values.nume.split(" ")[0]}. Revenim cu un răspuns în cel mai scurt timp, în
          timpul programului de lucru. Dacă preferi o discuție imediată, ne poți suna direct.
        </p>
        <CtaButton
          variant="outline"
          className="mt-7"
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
        >
          Trimite o altă cerere
        </CtaButton>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card p-7 lg:p-9">
      <h3 className="text-2xl font-semibold">Hai să discutăm despre proiectul tău</h3>
      <p className="mt-3 text-sm text-muted-foreground">
        Completează formularul și primești o ofertă personalizată, fără obligații.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Nume" error={errors.nume} htmlFor="nume" required>
          <input
            id="nume"
            name="nume"
            autoComplete="name"
            value={values.nume}
            onChange={set("nume")}
            placeholder="Ion Popescu"
            className={cn(fieldClass, errors.nume && "border-destructive")}
          />
        </Field>
        <Field label="Companie" htmlFor="companie">
          <input
            id="companie"
            name="companie"
            autoComplete="organization"
            value={values.companie}
            onChange={set("companie")}
            placeholder="Numele afacerii tale"
            className={fieldClass}
          />
        </Field>
        <Field label="Telefon" error={errors.telefon} htmlFor="telefon" required>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            value={values.telefon}
            onChange={set("telefon")}
            placeholder="07xx xxx xxx"
            className={cn(fieldClass, errors.telefon && "border-destructive")}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            placeholder="nume@companie.ro"
            className={cn(fieldClass, errors.email && "border-destructive")}
          />
        </Field>
        <Field label="Tip proiect" error={errors.tipProiect} htmlFor="tipProiect" required>
          <select
            id="tipProiect"
            name="tipProiect"
            value={values.tipProiect}
            onChange={set("tipProiect")}
            className={cn(fieldClass, errors.tipProiect && "border-destructive")}
          >
            <option value="">Selectează</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Buget estimat" htmlFor="buget">
          <select
            id="buget"
            name="buget"
            value={values.buget}
            onChange={set("buget")}
            className={fieldClass}
          >
            <option value="">Selectează</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Mesaj" error={errors.mesaj} htmlFor="mesaj" required>
            <textarea
              id="mesaj"
              name="mesaj"
              rows={5}
              value={values.mesaj}
              onChange={set("mesaj")}
              placeholder="Descrie scurt afacerea ta și ce ai nevoie."
              className={cn(fieldClass, "resize-y", errors.mesaj && "border-destructive")}
            />
          </Field>
        </div>
      </div>

      <CtaButton type="submit" size="lg" className="mt-7 w-full" disabled={sending}>
        <Send className="size-4" aria-hidden="true" />
        {sending ? "Se trimite..." : "Solicită oferta gratuită"}
      </CtaButton>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Datele tale sunt folosite exclusiv pentru a răspunde solicitării.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground/90">
        {label}
        {required && (
          <span className="text-primary" aria-hidden="true">
            {" *"}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
