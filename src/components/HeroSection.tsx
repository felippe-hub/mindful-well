import { ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de agendar uma demonstração da Acolhe.IA";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d2847] to-[#0D4C8B] animate-gradient" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-brand-primary/20 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-label text-xs uppercase tracking-[0.2em] text-accent font-medium">Saúde Corporativa Inteligente</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-7xl font-extrabold leading-[1.08] text-primary-foreground">
              O cuidado que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#34d8b4]">transforma</span>
              <br />resultados.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/60 max-w-xl leading-relaxed font-body">
              Plataforma de acolhimento e gerenciamento contínuo de doenças crônicas e riscos psicossociais — para empresas que entendem que pessoas saudáveis entregam resultados extraordinários.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_30px_rgba(0,201,167,0.35)] hover:scale-[1.02] transition-all duration-300 animate-micro-pulse"
              >
                Agendar uma demonstração <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 glass text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/[0.12] transition-all duration-300"
              >
                Fale conosco
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/50 pt-2">
              {["Conformidade com NR-1", "Equipe multidisciplinar", "Dados na Oracle Cloud"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent/80" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="relative animate-float">
              {/* Glass frame around image */}
              <div className="absolute -inset-3 glass rounded-3xl" />
              <img
                src="https://acolheia.com.br/wp-content/uploads/2026/03/62f66a53-34f6-4e4b-85f3-4f22ee469bf8.png"
                alt="Dashboard da plataforma Acolhe.IA mostrando monitoramento de saúde em tempo real"
                className="relative w-full max-w-md lg:max-w-full rounded-2xl"
              />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-2xl animate-shimmer pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
