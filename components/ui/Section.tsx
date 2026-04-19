import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

interface PageTitleSectionProps {
  title: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative text-background max-w-7xl mx-auto px-4",
        className,
      )}
    >
      <div className={cn("container py-16 md:py-24", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "border-b-4 border-accent text-accent-foreground text-2xl font-bold tracking-wider mb-3",
        className,
      )}
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
      className={cn("bg-foreground text-background py-18 lg:py-24", className)}
    >
      <section
        className={cn("relative max-w-7xl mx-auto px-4", containerClassName)}
      >
        {children}
      </section>
    </div>
  );
}

export function PageTitleSection({
  title,
  children,
  className = "",
  containerClassName = "",
}: PageTitleSectionProps) {
  return (
    <div
      className={cn(
        "relative min-h-52 md:min-h-96 bg-foreground text-background flex flex-col justify-end-safe pb-6 md:pb-14",
        className,
      )}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0">
        <Image
          src="/images/pattern-blue.jpg"
          alt="pattern image"
          fill
          className="object-cover brightness-75"
        />
      </div>
      <section
        className={cn(
          "relative w-full max-w-7xl mx-auto px-4",
          containerClassName,
        )}
      >
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wider">
          {title}
        </h1>
        {children}
      </section>
    </div>
  );
}
