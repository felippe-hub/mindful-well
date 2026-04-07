import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { HeartCrack, TrendingDown, DoorOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: HeartCrack,
    title: "Custos médicos diretos",
    desc: "Planos de saúde, afastamentos, INSS e processos trabalhistas acumulam passivos silenciosos que crescem sem gestão preventiva.",
  },
  {
    icon: TrendingDown,
    title: "Queda drástica de produtividade",
    desc: "Colaboradores com doenças crônicas não monitoradas faltam 6,3x mais e custam 2,3x mais em presenteísmo do que os próprios gastos médicos.",
  },
  {
    icon: DoorOpen,
    title: "Explosão no turnover",
    desc: "O Brasil lidera as taxas globais de rotatividade. Substituir um colaborador custa até 200% do seu salário anual — incluindo rescisão, reposição e perda de conhecimento.",
  },
];

const visibleCosts = ["Plano de saúde", "Afastamentos"];
const hiddenCosts = [
  "Presenteísmo",
  "Turnover oculto",
  "Queda de engajamento",
  "Passivos trabalhistas",
  "Perda de conhecimento",
  "Clima organizacional",
];

const Iceberg = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress 0→1 as element scrolls through viewport
      const raw = 1 - (rect.top - viewH * 0.3) / (viewH * 0.8);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // How much of the underwater part is revealed (0→1)
  const underwaterReveal = Math.max(0, (progress - 0.25) / 0.75);

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto" style={{ height: 520 }}>
      {/* Water line */}
      <div className="absolute left-0 right-0 top-[140px] h-px bg-accent/40 z-20">
        <span className="absolute -top-3 left-4 text-[10px] font-label uppercase tracking-[0.15em] text-accent">
          Linha d'água — o que o RH enxerga
        </span>
      </div>

      {/* Water surface shimmer */}
      <div className="absolute left-0 right-0 top-[140px] h-[6px] bg-gradient-to-r from-transparent via-accent/20 to-transparent z-10 blur-sm" />

      {/* Tip of iceberg (above water) */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-[40px] transition-all duration-700",
          progress > 0.05 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ zIndex: 15 }}
      >
        <div className="relative">
          {/* Iceberg tip shape */}
          <div className="w-0 h-0 mx-auto"
            style={{
              borderLeft: "60px solid transparent",
              borderRight: "60px solid transparent",
              borderBottom: "100px solid hsl(var(--accent) / 0.25)",
            }}
          />
          {/* Labels on tip */}
          <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[160px] text-center space-y-1">
            {visibleCosts.map((c) => (
              <p key={c} className="text-[11px] font-label text-foreground/70 font-medium">{c}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Underwater iceberg (large) — revealed progressively */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[140px] overflow-hidden transition-all duration-500"
        style={{
          height: `${underwaterReveal * 360}px`,
          zIndex: 5,
        }}
      >
        <div className="relative w-full" style={{ height: 360 }}>
          {/* Large underwater shape */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0"
            style={{
              width: 0,
              height: 0,
              borderLeft: "180px solid transparent",
              borderRight: "180px solid transparent",
              borderTop: "360px solid hsl(var(--brand-primary) / 0.12)",
              transform: "translateX(-50%) rotate(180deg)",
              transformOrigin: "top center",
            }}
          />
          {/* Glow effect */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[200px] h-[200px] bg-brand-primary/10 rounded-full blur-[60px]" />

          {/* Hidden cost labels — staggered reveal */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[280px] text-center space-y-3">
            {hiddenCosts.map((c, i) => {
              const threshold = (i + 1) / (hiddenCosts.length + 1);
              const visible = underwaterReveal > threshold;
              return (
                <p
                  key={c}
                  className={cn(
                    "text-sm font-semibold transition-all duration-500",
                    visible
                      ? "opacity-100 translate-y-0 text-brand-primary"
                      : "opacity-0 translate-y-3"
                  )}
                >
                  {c}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Percentage indicator */}
      <div
        className={cn(
          "absolute right-0 top-[180px] transition-all duration-700 text-right",
          underwaterReveal > 0.3 ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="text-4xl font-display font-bold text-accent">
          {Math.round(underwaterReveal * 78)}%
        </p>
        <p className="text-xs text-muted-foreground mt-1">dos custos estão<br />abaixo da superfície</p>
      </div>
    </div>
  );
};

const ProblemaSection = () => (
  <SectionWrapper id="problema">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="section-tag">O Problema que Ninguém Calcula</span>
      <h2 className="section-heading mt-4">
        Existe um ecossistema invisível{" "}
        <span className="text-brand-primary">pulverizando o seu caixa.</span>
      </h2>
    </div>

    {/* Iceberg visualization */}
    <div className="mb-20">
      <Iceberg />
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-16 stagger-children">
      {cards.map((c) => (
        <div
          key={c.title}
          className="glass-card rounded-2xl p-8 card-hover group"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors duration-300">
            <c.icon className="w-6 h-6 text-brand-primary" />
          </div>
          <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{c.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto glass-light rounded-2xl p-8 border-l-4 border-l-accent">
      <p className="text-foreground/80 italic leading-relaxed text-lg">
        "Imagine seu colaborador acordando exausto, com pressão alta ou glicose descontrolada... ou ainda abatido pela ansiedade, incapaz de sair de casa. Ele pediu ajuda antes de falhar? Sua empresa estava pronta para ouvi-lo?"
      </p>
    </div>
  </SectionWrapper>
);

export default ProblemaSection;
