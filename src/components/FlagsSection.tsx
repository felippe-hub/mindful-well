import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const flags = [
  { color: "bg-flag-red", shadow: "shadow-[0_0_15px_rgba(229,62,62,0.4)]", label: "Flag Vermelha", action: "Ação emergencial", desc: "Indivíduo em risco muito alto. Requer ação imediata ou emergencial pelo Acolhe Center." },
  { color: "bg-flag-orange", shadow: "shadow-[0_0_15px_rgba(237,137,54,0.4)]", label: "Flag Laranja", action: "Ação de curto prazo", desc: "Risco elevado com ao menos um indicador muito alterado. Exige acompanhamento até a normalização." },
  { color: "bg-flag-yellow", shadow: "shadow-[0_0_15px_rgba(236,201,75,0.4)]", label: "Flag Amarela", action: "Atenção e prevenção", desc: "Indicador fora de controle, mas sem risco imediato. Requer orientação especializada e monitoramento evolutivo." },
  { color: "bg-flag-green", shadow: "shadow-[0_0_15px_rgba(56,161,105,0.4)]", label: "Flag Verde", action: "Estabilidade", desc: "Indicadores próximos à normalidade. Foco em orientação, informação e manutenção da qualidade de vida." },
  { color: "bg-flag-blue", shadow: "shadow-[0_0_15px_rgba(49,130,206,0.4)]", label: "Flag Azul", action: "Acompanhamento preventivo", desc: "Colaborador sem indicadores de risco. Incluído no programa de acompanhamento preventivo para longevidade." },
];

const FlagsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="flags" ref={ref} className="relative bg-brand-deep py-24 md:py-[140px] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-primary/5 rounded-full blur-[120px]" />

      <div className={cn(
        "container relative z-10 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="section-tag">Triagem Inteligente</span>
          <h2 className="section-heading-light mt-4">
            O sistema detecta.<br />A equipe entra em ação.
          </h2>
          <p className="text-primary-foreground/50 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Dados captados na plataforma são analisados pela equipe Acolhe.IA, gerando alertas, comunicações e respostas imediatas — tudo em conformidade com a LGPD.
          </p>
        </div>

        <div className={cn(
          "grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14",
          isVisible ? "stagger-children" : ""
        )}>
          {flags.map((f) => (
            <div
              key={f.label}
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className={cn("w-5 h-5 rounded-full mx-auto mb-5 animate-pulse-flag", f.color, f.shadow)} />
              <h3 className="font-display text-sm font-bold text-primary-foreground mb-1">{f.label}</h3>
              <p className="text-accent text-[10px] font-label uppercase tracking-[0.15em] mb-4">{f.action}</p>
              <p className="text-primary-foreground/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagsSection;
