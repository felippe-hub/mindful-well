import SectionWrapper from "./SectionWrapper";
import { FileText, Shield, BarChart3, ArrowRight, AlertTriangle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de adequar minha empresa à NR-1 com a Acolhe.IA";

const cards = [
  {
    icon: FileText,
    title: "Lei Federal 14.831/2024",
    desc: "Exigência legal de gestão de saúde e segurança psicológica no ambiente de trabalho — com penalidades para empresas em não conformidade.",
  },
  {
    icon: Shield,
    title: "Prevenção de passivos",
    desc: "Gestão ativa de riscos psicossociais evita multas multiplicadas por 3 fatores: gravidade da infração, porte da empresa e reincidência.",
  },
  {
    icon: BarChart3,
    title: "Auditoria sempre pronta",
    desc: "A plataforma Acolhe.IA gera relatórios gerenciais, controla indicadores e mantém histórico completo de acolhimento para conformidade imediata.",
  },
];

const NR1Section = () => (
  <SectionWrapper id="nr1" className="bg-brand-gray relative overflow-hidden">
    {/* Top alert stripe */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-flag-orange to-flag-yellow" />

    <div className="text-center max-w-3xl mx-auto mb-12">
      <div className="inline-flex items-center gap-2 bg-flag-orange/15 text-flag-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
        <AlertTriangle className="w-4 h-4" />
        ATENÇÃO: Obrigação legal em vigor a partir de maio de 2026
      </div>
      <span className="section-tag block">A Nova NR-1</span>
      <h2 className="section-heading mt-4">
        Cuidar não é mais opcional. <span className="text-brand-primary">É lei.</span>
      </h2>
      <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
        A Lei Federal 14.831/2024 obriga as empresas brasileiras a gerenciar ativamente os riscos psicossociais e a saúde mental de suas equipes. Sua empresa já está em conformidade?
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {cards.map((c) => (
        <div key={c.title} className="bg-background border border-foreground/[0.07] rounded-2xl p-8 card-hover">
          <c.icon className="w-10 h-10 text-brand-primary mb-5" />
          <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-semibold hover:brightness-110 transition-all"
      >
        Quero adequar minha empresa à NR-1 <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </SectionWrapper>
);

export default NR1Section;
