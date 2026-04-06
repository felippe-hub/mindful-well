import SectionWrapper from "./SectionWrapper";
import { Brain, Stethoscope, FlaskConical, MessageCircle, Dumbbell, Apple, BookOpen } from "lucide-react";

const servicos = [
  { icon: Brain, title: "Atendimento Psicológico Online", desc: "Com IA e abordagem humanizada — acessível, rápido e sigiloso." },
  { icon: Stethoscope, title: "Telemedicina", desc: "Consulta médica online com profissionais habilitados, sem filas ou deslocamentos." },
  { icon: FlaskConical, title: "Exames Clínicos", desc: "Agendamento e realização de exames — coleta na empresa ou no domicílio do colaborador." },
  { icon: MessageCircle, title: "Atividades de Acolhimento Mental", desc: "Programas estruturados de cuidado emocional para grupos e indivíduos." },
  { icon: Dumbbell, title: "Ativação Física", desc: "Engajamento em estruturas de atividade física integradas ao programa de saúde." },
  { icon: Apple, title: "Orientação Nutricional", desc: "Suporte especializado em alimentação saudável vinculado ao perfil clínico individual." },
  { icon: BookOpen, title: "Conteúdo Educacional", desc: "Materiais formativos enviados aos colaboradores para engajamento e prevenção." },
];

const ServicosSection = () => (
  <SectionWrapper>
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="section-tag">Serviços Complementares de Acolhimento</span>
      <h2 className="section-heading mt-4">
        Cuidado que vai além do monitoramento.
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {servicos.map((s) => (
        <div key={s.title} className="bg-brand-light border border-foreground/[0.07] rounded-2xl p-7 card-hover">
          <s.icon className="w-9 h-9 text-brand-primary mb-4" />
          <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicosSection;
