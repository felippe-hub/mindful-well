import { Phone, MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de saber mais sobre a Acolhe.IA";

const FooterSection = () => (
  <footer className="bg-brand-deep py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img
            src="https://acolheia.com.br/wp-content/uploads/2025/08/Asset-2@2x-1024x289.png"
            alt="Acolhe.IA"
            className="h-10 w-auto mb-4"
          />
          <p className="text-primary-foreground/50 text-sm">Cuidado que gera resultados.</p>
        </div>

        <div className="space-y-4 text-sm text-primary-foreground/70">
          <h4 className="font-display font-bold text-primary-foreground mb-2">Contato — São Paulo</h4>
          <a href="tel:1141938574" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> (11) 4193-8574
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <MessageCircle className="w-4 h-4" /> (11) 9 7170-8352 (WhatsApp)
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>Alameda Mamoré, 503 - Conj. 033<br />Alphaville – Barueri/SP - CEP 06.454-040</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary-foreground mb-4">Redes Sociais</h4>
          <div className="flex gap-4 text-primary-foreground/50">
            {[
              { label: "Instagram", url: "https://instagram.com/acolheia" },
              { label: "Facebook", url: "https://facebook.com/acolheia" },
              { label: "YouTube", url: "https://youtube.com/@acolheia" },
              { label: "TikTok", url: "https://tiktok.com/@acolheia" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
        © 2025 Acolhe.IA — Todos os direitos reservados. Infraestrutura Oracle Cloud.
      </div>
    </div>
  </footer>
);

export default FooterSection;
