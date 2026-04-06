import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      className={`relative text-background max-w-7xl mx-auto px-4 ${className}`}
    >
      <div className={`container py-16 md:py-24 mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div
      className={`border-b-4 border-accent text-accent-foreground text-2xl font-bold tracking-wider mb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export function FullWidthSection({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <div
      className={`bg-foreground text-background py-18 lg:py-24 ${className}`}
    >
      <section
        className={`relative max-w-7xl mx-auto px-4 ${containerClassName}`}
      >
        {children}
      </section>
    </div>
  );
}
