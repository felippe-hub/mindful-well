import SectionWrapper from "./SectionWrapper";
import { CheckCircle } from "lucide-react";

const bullets = [
  "Monitoramento clínico contínuo",
  "Resposta imediata por equipe multidisciplinar",
  "Dados armazenados com segurança na Oracle Cloud",
  "Conformidade total com a LGPD",
];

const AcolheCenterSection = () => (
  <SectionWrapper className="bg-brand-gray">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <img
        src="https://acolheia.com.br/wp-content/uploads/2026/03/Imagem5-1024x576.jpg"
        alt="Acolhe Center — central de monitoramento de saúde corporativa"
        className="w-full rounded-2xl shadow-card"
      />
      <div>
        <span className="section-tag">Acolhe Center</span>
        <h2 className="section-heading mt-4 mb-6">A central que não dorme.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Nossa central de gerenciamento e tomada de decisões é onde os dados clínicos são monitorados em tempo real pela equipe de saúde da Acolhe.IA. É aqui que as ações de acolhimento e orientação são iniciadas — com velocidade, precisão e humanidade.
        </p>
        <ul className="space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default AcolheCenterSection;
