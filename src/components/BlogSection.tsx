import SectionWrapper from "./SectionWrapper";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    tag: "NR-1",
    title: "NR-1 atualizada: o que muda para o RH em 2026",
    excerpt: "A nova norma regulamentadora exige gestão ativa de riscos psicossociais. Entenda os impactos e como se preparar antes do prazo.",
    date: "Mar 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    tag: "Saúde Mental",
    title: "Burnout corporativo: como identificar antes que vire afastamento",
    excerpt: "Sinais silenciosos de esgotamento que passam despercebidos pelo RH — e como a tecnologia pode antecipar crises.",
    date: "Fev 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop",
  },
  {
    tag: "Produtividade",
    title: "O custo invisível do presenteísmo: 2,3x mais caro que o absenteísmo",
    excerpt: "Estar presente não significa estar produtivo. Descubra como mensurar e reduzir o impacto do presenteísmo na sua empresa.",
    date: "Jan 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
  },
];

const BlogSection = () => (
  <SectionWrapper id="blog" className="bg-brand-gray">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="section-tag">Conteúdo Especializado</span>
      <h2 className="section-heading mt-4">
        Insights para quem lidera{" "}
        <span className="text-brand-primary">com inteligência.</span>
      </h2>
      <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
        Artigos, dados e análises para RH e lideranças que querem estar à frente.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 stagger-children">
      {articles.map((a) => (
        <article
          key={a.title}
          className="glass-card rounded-2xl overflow-hidden card-hover group cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-[0.15em] bg-accent/90 text-accent-foreground font-semibold">
              {a.tag}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span>{a.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {a.readTime}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold mb-2 tracking-tight group-hover:text-brand-primary transition-colors duration-300 leading-snug">
              {a.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {a.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all duration-300">
              Ler artigo <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </article>
      ))}
    </div>
  </SectionWrapper>
);

export default BlogSection;
