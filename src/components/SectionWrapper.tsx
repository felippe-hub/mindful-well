import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const SectionWrapper = ({ children, className, id, dark }: Props) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-20 md:py-[120px] transition-all duration-700",
        dark ? "bg-brand-deep text-primary-foreground" : "",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionWrapper;
