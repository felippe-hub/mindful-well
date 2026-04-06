import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const items = [
  "Longevidade e qualidade de vida dos colaboradores",
  "Bem-estar e melhor disposição no ambiente de trabalho",
  "Redução expressiva do absenteísmo",
  "Melhora no engajamento convertida em entregas com qualidade",
  "Cumprimento da NR-1 e gestão de riscos psicossociais",
  "Economia real e aumento de produtividade",
  "Diminuição de passivos trabalhistas e custos com saúde",
  "Dados e relatórios para tomada de decisão em RH",
];

const ResultadosSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-brand-primary py-20 md:py-[120px]">
      <div className={cn(
        "container transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-accent font-medium">Resultados Esperados</span>
          <h2 className="section-heading-light mt-4">
            O que muda quando sua empresa cuida de verdade.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-primary-foreground/90 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultadosSection;
