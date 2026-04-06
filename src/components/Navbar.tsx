import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971708352?text=Olá, gostaria de saber mais sobre a Acolhe.IA";
const NAV_ITEMS = [
  { label: "Sobre", href: "#problema" },
  { label: "Soluções", href: "#solucao" },
  { label: "Diferenciais", href: "#flags" },
  { label: "NR-1", href: "#nr1" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-deep/90 backdrop-blur-xl shadow-lg" : "bg-brand-deep"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex-shrink-0">
          <img
            src="https://acolheia.com.br/wp-content/uploads/2025/08/Asset-1@2x-1024x288.png"
            alt="Acolhe.IA"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:1141938574" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            (11) 4193-8574
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:brightness-110 transition-all"
          >
            Fale pelo WhatsApp
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-deep/95 backdrop-blur-xl border-t border-primary-foreground/10 pb-6">
          <nav className="container flex flex-col gap-4 pt-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-accent py-2"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:1141938574" className="flex items-center gap-2 text-primary-foreground/70 py-2">
              <Phone className="w-4 h-4" /> (11) 4193-8574
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-5 py-3 rounded-md font-medium"
            >
              Fale pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
