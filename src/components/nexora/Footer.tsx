import { Link } from "@tanstack/react-router";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
        </div>

        <nav aria-label="Secțiuni site" className="text-sm">
          <p className="font-medium">Site</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="font-medium">Informații</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/politica-de-confidentialitate"
                className="text-muted-foreground hover:text-foreground"
              >
                Politica de confidențialitate
              </Link>
            </li>
            <li>
              <Link to="/termeni-si-conditii" className="text-muted-foreground hover:text-foreground">
                Termeni și condiții
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={site.phoneHref} className="text-muted-foreground hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="text-muted-foreground hover:text-foreground">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.
      </p>
    </footer>
  );
}
