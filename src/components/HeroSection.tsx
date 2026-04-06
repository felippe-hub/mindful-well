import { ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de agendar uma demonstração da Acolhe.IA";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-deep via-brand-deep to-brand-primary overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <span className="section-tag">Saúde Corporativa Inteligente</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-primary-foreground">
              O cuidado que{" "}
              <span className="text-accent">transforma</span> resultados.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
              Plataforma de acolhimento e gerenciamento contínuo de doenças crônicas e riscos psicossociais — para empresas que entendem que pessoas saudáveis entregam resultados extraordinários.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition-all animate-micro-pulse"
              >
                Agendar uma demonstração <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-md font-medium text-base hover:bg-primary-foreground/10 transition-all"
              >
                Fale conosco
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/60">
              {["Conformidade com NR-1", "Equipe multidisciplinar", "Dados na Oracle Cloud"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <img
              src="https://acolheia.com.br/wp-content/uploads/2026/03/62f66a53-34f6-4e4b-85f3-4f22ee469bf8.png"
              alt="Dashboard da plataforma Acolhe.IA mostrando monitoramento de saúde em tempo real"
              className="w-full max-w-md lg:max-w-full rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
