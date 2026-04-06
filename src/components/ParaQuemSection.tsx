import SectionWrapper from "./SectionWrapper";
import { Building2, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de agendar uma demonstração gratuita da Acolhe.IA";

const ParaQuemSection = () => (
  <SectionWrapper>
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="section-tag">Para quem é a solução</span>
      <h2 className="section-heading mt-4">
        Feito para empresas que valorizam quem as faz crescer.
      </h2>
    </div>

    <div className="max-w-2xl mx-auto bg-brand-light border border-foreground/[0.07] rounded-2xl p-10 text-center card-hover">
      <Building2 className="w-12 h-12 text-brand-primary mx-auto mb-6" />
      <h3 className="font-display text-2xl font-bold mb-4">Corporativo</h3>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Para qualquer empresa com um RH inovador e atuante — que entende que colaboradores saudáveis são o ativo mais valioso do negócio e a base de qualquer resultado consistente.
      </p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-semibold hover:brightness-110 transition-all"
      >
        Agendar demonstração gratuita <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </SectionWrapper>
);

export default ParaQuemSection;
