import SectionWrapper from "./SectionWrapper";
import { HeartCrack, TrendingDown, DoorOpen } from "lucide-react";

const cards = [
  {
    icon: HeartCrack,
    title: "Custos médicos diretos",
    desc: "Planos de saúde, afastamentos, INSS e processos trabalhistas acumulam passivos silenciosos que crescem sem gestão preventiva.",
  },
  {
    icon: TrendingDown,
    title: "Queda drástica de produtividade",
    desc: "Colaboradores com doenças crônicas não monitoradas faltam 6,3x mais e custam 2,3x mais em presenteísmo do que os próprios gastos médicos.",
  },
  {
    icon: DoorOpen,
    title: "Explosão no turnover",
    desc: "O Brasil lidera as taxas globais de rotatividade. Substituir um colaborador custa até 200% do seu salário anual — incluindo rescisão, reposição e perda de conhecimento.",
  },
];

const ProblemaSection = () => (
  <SectionWrapper id="problema">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="section-tag">O Problema que Ninguém Calcula</span>
      <h2 className="section-heading mt-4">
        Existe um ecossistema invisível{" "}
        <span className="text-brand-primary">pulverizando o seu caixa.</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-brand-light border border-foreground/[0.07] rounded-2xl p-8 card-hover"
        >
          <c.icon className="w-10 h-10 text-brand-primary mb-5" />
          <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto bg-brand-light border-l-4 border-accent rounded-xl p-8">
      <p className="text-foreground/80 italic leading-relaxed text-lg">
        "Imagine seu colaborador acordando exausto, com pressão alta ou glicose descontrolada... ou ainda abatido pela ansiedade, incapaz de sair de casa. Ele pediu ajuda antes de falhar? Sua empresa estava pronta para ouvi-lo?"
      </p>
    </div>
  </SectionWrapper>
);

export default ProblemaSection;
