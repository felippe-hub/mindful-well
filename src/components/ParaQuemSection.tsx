import SectionWrapper from "./SectionWrapper";
import { Building2, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de agendar uma demonstração gratuita da Acolhe.IA";

const ParaQuemSection = () => (
  <SectionWrapper>
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="section-tag">Para quem é a solução</span>
      <h2 className="section-heading mt-4">
        Feito para empresas que<br />valorizam quem as faz crescer.
      </h2>
    </div>

    <div className="max-w-2xl mx-auto relative group">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-brand-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass-card rounded-2xl p-12 text-center card-hover">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
          <Building2 className="w-8 h-8 text-brand-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-4">Corporativo</h3>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
          Para qualquer empresa com um RH inovador e atuante — que entende que colaboradores saudáveis são o ativo mais valioso do negócio e a base de qualquer resultado consistente.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,201,167,0.3)] hover:scale-[1.02] transition-all duration-300"
        >
          Agendar demonstração gratuita <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default ParaQuemSection;
