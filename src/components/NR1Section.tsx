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
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-flag-orange via-flag-yellow to-flag-orange" />

    <div className="text-center max-w-3xl mx-auto mb-12">
      <div className="inline-flex items-center gap-2 bg-flag-orange/10 backdrop-blur-sm border border-flag-orange/20 text-flag-orange px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
        <AlertTriangle className="w-4 h-4" />
        ATENÇÃO: Obrigação legal em vigor a partir de maio de 2026
      </div>
      <span className="section-tag block">A Nova NR-1</span>
      <h2 className="section-heading mt-4">
        Cuidar não é mais opcional.<br /><span className="text-brand-primary">É lei.</span>
      </h2>
      <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
        A Lei Federal 14.831/2024 obriga as empresas brasileiras a gerenciar ativamente os riscos psicossociais e a saúde mental de suas equipes. Sua empresa já está em conformidade?
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
      {cards.map((c) => (
        <div key={c.title} className="glass-card rounded-2xl p-8 card-hover group">
          <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors duration-300">
            <c.icon className="w-6 h-6 text-brand-primary" />
          </div>
          <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{c.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,201,167,0.3)] hover:scale-[1.02] transition-all duration-300"
      >
        Quero adequar minha empresa à NR-1 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </SectionWrapper>
);

export default NR1Section;
