import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const flags = [
  { color: "bg-flag-red", label: "Flag Vermelha", action: "Ação emergencial", desc: "Indivíduo em risco muito alto. Requer ação imediata ou emergencial pelo Acolhe Center." },
  { color: "bg-flag-orange", label: "Flag Laranja", action: "Ação de curto prazo", desc: "Risco elevado com ao menos um indicador muito alterado. Exige acompanhamento até a normalização." },
  { color: "bg-flag-yellow", label: "Flag Amarela", action: "Atenção e prevenção", desc: "Indicador fora de controle, mas sem risco imediato. Requer orientação especializada e monitoramento evolutivo." },
  { color: "bg-flag-green", label: "Flag Verde", action: "Estabilidade", desc: "Indicadores próximos à normalidade. Foco em orientação, informação e manutenção da qualidade de vida." },
  { color: "bg-flag-blue", label: "Flag Azul", action: "Acompanhamento preventivo", desc: "Colaborador sem indicadores de risco. Incluído no programa de acompanhamento preventivo para longevidade." },
];

const FlagsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="flags" ref={ref} className="bg-brand-deep py-20 md:py-[120px]">
      <div className={cn(
        "container transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="section-tag">Triagem Inteligente</span>
          <h2 className="section-heading-light mt-4">
            O sistema detecta. A equipe entra em ação.
          </h2>
          <p className="text-primary-foreground/60 mt-4 text-lg leading-relaxed">
            Dados captados na plataforma são analisados pela equipe Acolhe.IA, gerando alertas, comunicações e respostas imediatas — tudo em conformidade com a LGPD.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {flags.map((f, i) => (
            <div
              key={f.label}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={cn("w-5 h-5 rounded-full mx-auto mb-4 animate-pulse-flag", f.color)} />
              <h3 className="font-display text-sm font-bold text-primary-foreground mb-1">{f.label}</h3>
              <p className="text-accent text-xs font-label uppercase tracking-wider mb-3">{f.action}</p>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagsSection;
