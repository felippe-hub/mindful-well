import SectionWrapper from "./SectionWrapper";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de agendar uma demonstração da Acolhe.IA";

const steps = [
  { num: "01", title: "Diagnóstico Individual", desc: "Avaliação personalizada de cada colaborador com identificação de riscos crônicos e psicossociais antes que se tornem afastamentos." },
  { num: "02", title: "Monitoramento em Tempo Real", desc: "Alertas inteligentes e acompanhamento contínuo dos indicadores clínicos e emocionais com suporte 24/7 da equipe Acolhe Center." },
  { num: "03", title: "Acolhimento por Especialistas", desc: "Equipe multidisciplinar de médicos, enfermeiros e psicólogos atua imediatamente quando um risco é identificado." },
  { num: "04", title: "Resultados Mensuráveis", desc: "Foco total na redução do absenteísmo e aumento de produtividade, com relatórios e indicadores para RH e liderança." },
];

const SolucaoSection = () => (
  <SectionWrapper id="solucao">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="section-tag">Nossa Proposta</span>
      <h2 className="section-heading mt-4">
        Do diagnóstico ao resultado.<br />
        <span className="text-brand-primary">Ciclo completo de gestão integral.</span>
      </h2>
    </div>

    {/* Timeline */}
    <div className="relative max-w-4xl mx-auto mb-16">
      {/* Vertical line — behind the number circles */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-brand-primary/30 to-transparent z-0" />

      <div className="space-y-6">
        {steps.map((s, i) => (
          <div key={s.num} className="flex gap-6 md:gap-10 group" style={{ animationDelay: `${i * 150}ms` }}>
            {/* Number circle */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-background bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                <span className="font-display text-lg font-extrabold text-accent">{s.num}</span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 flex-1 card-hover">
              <h3 className="font-display text-xl font-bold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent/5 to-accent/10 backdrop-blur-sm border border-accent/15 rounded-2xl p-8 text-center mb-10">
      <p className="text-foreground font-medium text-lg leading-relaxed">
        "Acolhe.IA <strong>NÃO</strong> é só software. É uma plataforma tecnológica com acolhimento e gerenciamento contínuo por equipe multidisciplinar."
      </p>
    </div>

    <div className="text-center">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,201,167,0.3)] hover:scale-[1.02] transition-all duration-300"
      >
        Agendar demonstração <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </SectionWrapper>
);

export default SolucaoSection;
