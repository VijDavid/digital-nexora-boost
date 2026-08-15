import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { CtaLink } from "./CtaButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={site.name}>
          <span className="grid size-9 place-items-center rounded-lg bg-primary/15 text-primary">
            <span className="font-display text-lg font-bold">N</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
        </a>

        <nav aria-label="Navigare principală" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href={site.phoneHref} variant="outline">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </CtaLink>
          <CtaLink href="#contact">Solicită o ofertă</CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          className="grid size-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-6 pt-4 backdrop-blur-xl lg:hidden">
          <nav aria-label="Navigare mobilă" className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-base text-foreground/90"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <CtaLink href="#contact" size="lg" onClick={() => setOpen(false)}>
              Solicită o ofertă
            </CtaLink>
            <CtaLink href={site.phoneHref} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Sună acum
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
