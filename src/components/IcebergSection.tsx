import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import icebergImg from "@/assets/iceberg.png";

const visibleLabels = ["Plano de saúde", "Afastamentos"];
const hiddenLabels = [
  "Presenteísmo",
  "Turnover oculto",
  "Queda de engajamento",
  "Passivos trabalhistas",
  "Perda de conhecimento",
  "Clima organizacional",
];

const IcebergSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = 1 - (rect.top - vh * 0.2) / (vh * 1.0);
      setProgress(Math.max(0, Math.min(1, raw)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const underwaterReveal = Math.max(0, (progress - 0.2) / 0.8);

  return (
    <section
      ref={ref}
      className="relative bg-brand-deep py-24 md:py-[140px] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag">O Que Você Não Vê</span>
          <h2 className="section-heading-light mt-4">
            A maior parte do custo está{" "}
            <span className="text-accent">abaixo da superfície.</span>
          </h2>
          <p className="text-primary-foreground/50 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            Assim como um iceberg, os custos visíveis de saúde são apenas a ponta. O impacto real está escondido — e cresce silenciosamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Iceberg image with scroll-controlled clip */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Water line indicator */}
            <div
              className={cn(
                "absolute left-0 right-0 z-20 transition-opacity duration-700",
                progress > 0.1 ? "opacity-100" : "opacity-0"
              )}
              style={{ top: "33%" }}
            >
              <div className="h-px bg-accent/50 relative">
                <span className="absolute -top-3 right-0 text-[10px] font-label uppercase tracking-[0.15em] text-accent whitespace-nowrap">
                  Linha d'água
                </span>
              </div>
            </div>

            {/* The iceberg image — clip reveals underwater portion */}
            <div
              className="relative rounded-2xl overflow-hidden glass"
              style={{
                clipPath: `inset(0 0 ${Math.max(0, (1 - progress) * 60)}% 0)`,
                transition: "clip-path 0.3s ease-out",
              }}
            >
              <img
                src={icebergImg}
                alt="Iceberg representando custos visíveis e ocultos de saúde corporativa"
                className="w-full h-auto"
              />
              {/* Gradient overlay at the bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
            </div>

            {/* Percentage badge */}
            <div
              className={cn(
                "absolute bottom-6 left-6 z-20 glass rounded-xl px-4 py-3 transition-all duration-700",
                underwaterReveal > 0.4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="text-3xl font-display font-bold text-accent">78%</p>
              <p className="text-[11px] text-primary-foreground/60 mt-0.5">dos custos estão ocultos</p>
            </div>
          </div>

          {/* Labels side */}
          <div className="space-y-8">
            {/* Visible costs */}
            <div>
              <h3 className="text-xs font-label uppercase tracking-[0.2em] text-primary-foreground/40 mb-4">
                Custos visíveis
              </h3>
              <div className="space-y-3">
                {visibleLabels.map((label, i) => (
                  <div
                    key={label}
                    className={cn(
                      "glass rounded-xl px-5 py-3 flex items-center gap-3 transition-all duration-500",
                      progress > 0.1 + i * 0.1
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-primary-foreground/80 font-medium text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hidden costs */}
            <div>
              <h3
                className={cn(
                  "text-xs font-label uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-500",
                  underwaterReveal > 0.1 ? "opacity-100" : "opacity-0"
                )}
              >
                Custos ocultos — o verdadeiro impacto
              </h3>
              <div className="space-y-3">
                {hiddenLabels.map((label, i) => {
                  const threshold = (i + 1) / (hiddenLabels.length + 2);
                  const visible = underwaterReveal > threshold;
                  return (
                    <div
                      key={label}
                      className={cn(
                        "glass rounded-xl px-5 py-3 flex items-center gap-3 border border-accent/10 transition-all duration-500",
                        visible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-flag-red shrink-0 animate-pulse" />
                      <span className="text-primary-foreground/80 font-medium text-sm">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IcebergSection;
