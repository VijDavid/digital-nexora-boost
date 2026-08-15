import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {(eyebrow || title) && (
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <div className={eyebrow || title ? "mt-12 lg:mt-14" : undefined}>{children}</div>
      </div>
    </section>
  );
}
