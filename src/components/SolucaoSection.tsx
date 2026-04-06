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
        Do diagnóstico ao resultado. <span className="text-brand-primary">Ciclo completo de gestão integral.</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {steps.map((s) => (
        <div key={s.num} className="flex gap-6 bg-brand-light border border-foreground/[0.07] rounded-2xl p-8 card-hover">
          <span className="font-display text-4xl font-extrabold text-accent/30 leading-none">{s.num}</span>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center mb-10">
      <p className="text-foreground font-medium text-lg leading-relaxed">
        "Acolhe.IA <strong>NÃO</strong> é só software. É uma plataforma tecnológica com acolhimento e gerenciamento contínuo por equipe multidisciplinar."
      </p>
    </div>

    <div className="text-center">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-semibold hover:brightness-110 transition-all"
      >
        Agendar demonstração <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </SectionWrapper>
);

export default SolucaoSection;
