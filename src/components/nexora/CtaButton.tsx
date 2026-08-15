import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:glow-ring active:translate-y-0",
        outline:
          "border border-border bg-surface/60 text-foreground hover:border-primary/60 hover:bg-surface-2",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ComponentProps<"a"> & VariantProps<typeof ctaVariants>;

export function CtaLink({ className, variant, size, ...props }: Props) {
  return <a className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}

export function CtaButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof ctaVariants>) {
  return <button className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}
