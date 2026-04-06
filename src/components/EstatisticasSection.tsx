import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const EstatisticasSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const val1 = useCountUp(6.3, 2000, isVisible, 1);
  const val2 = useCountUp(2.3, 2000, isVisible, 1);
  const val3 = useCountUp(56, 2000, isVisible, 0);
  const val4 = useCountUp(200, 2000, isVisible, 0);

  return (
    <section ref={ref} className="bg-brand-deep py-20 md:py-[120px]">
      <div className={cn(
        "container transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Dados que não mentem</span>
          <h2 className="section-heading-light mt-4">
            Estar presente não significa estar produtivo.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <span className="font-display text-6xl md:text-7xl font-extrabold text-accent">{val1}x</span>
            <h3 className="font-display text-xl font-bold text-primary-foreground mt-4 mb-2">Mais faltas</h3>
            <p className="text-primary-foreground/60 leading-relaxed">
              Colaboradores com doenças crônicas não monitoradas têm taxa de absenteísmo 6,3 vezes maior do que a média da empresa.
            </p>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <span className="font-display text-6xl md:text-7xl font-extrabold text-accent">{val2}x</span>
            <h3 className="font-display text-xl font-bold text-primary-foreground mt-4 mb-2">Mais custo oculto</h3>
            <p className="text-primary-foreground/60 leading-relaxed">
              Estar de corpo presente, mas improdutivo por dor ou questão emocional, custa 2,3x mais à empresa do que os próprios gastos com saúde.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-10">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <span className="font-display text-5xl font-extrabold text-accent">{val3}%</span>
              <p className="text-primary-foreground/60 mt-3">O Brasil lidera as taxas globais de turnover</p>
            </div>
            <div>
              <span className="font-display text-5xl font-extrabold text-accent">{val4}%</span>
              <p className="text-primary-foreground/60 mt-3">É o custo real de substituição em relação ao salário anual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstatisticasSection;
