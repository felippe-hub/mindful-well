import SectionWrapper from "./SectionWrapper";
import { CheckCircle } from "lucide-react";

const bullets = [
  "Monitoramento clínico contínuo",
  "Resposta imediata por equipe multidisciplinar",
  "Dados armazenados com segurança na Oracle Cloud",
  "Conformidade total com a LGPD",
];

const AcolheCenterSection = () => (
  <SectionWrapper className="bg-brand-gray overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative group">
        {/* Glow behind */}
        <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 to-brand-primary/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="relative glass-light rounded-2xl overflow-hidden">
          <img
            src="https://acolheia.com.br/wp-content/uploads/2026/03/Imagem5-1024x576.jpg"
            alt="Acolhe Center — central de monitoramento de saúde corporativa"
            className="w-full"
          />
        </div>
      </div>
      <div>
        <span className="section-tag">Acolhe Center</span>
        <h2 className="section-heading mt-4 mb-6">A central que<br />não dorme.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Nossa central de gerenciamento e tomada de decisões é onde os dados clínicos são monitorados em tempo real pela equipe de saúde da Acolhe.IA. É aqui que as ações de acolhimento e orientação são iniciadas — com velocidade, precisão e humanidade.
        </p>
        <ul className="space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default AcolheCenterSection;
