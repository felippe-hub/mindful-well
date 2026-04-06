import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ESTADOS = ["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];

const ContatoSection = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", whatsapp: "", cidade: "", estado: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.empresa || !form.email || !form.whatsapp || !form.cidade || !form.estado) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
      setForm({ nome: "", empresa: "", email: "", whatsapp: "", cidade: "", estado: "" });
    }, 1500);
  };

  const inputClass = "w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all";

  return (
    <SectionWrapper id="contato" className="bg-brand-gray">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="section-tag">Fale Conosco</span>
          <h2 className="section-heading mt-4 mb-6">
            Vamos calcular o impacto para a sua empresa.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Solicite uma análise de benefícios e uma apresentação técnica com os resultados esperados para o seu porte e segmento. Sem custo. Sem compromisso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card space-y-4">
          <input type="text" placeholder="Nome completo *" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className={inputClass} maxLength={100} />
          <input type="text" placeholder="Empresa *" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className={inputClass} maxLength={100} />
          <input type="email" placeholder="E-mail corporativo *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
          <input type="tel" placeholder="WhatsApp *" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={inputClass} maxLength={20} />
          <input type="text" placeholder="Cidade *" value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} className={inputClass} maxLength={100} />
          <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })} className={inputClass}>
            <option value="">Estado *</option>
            {ESTADOS.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
          </select>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-semibold hover:brightness-110 transition-all disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Solicitar análise gratuita"} <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Seus dados são protegidos pela LGPD e não serão compartilhados com terceiros.
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContatoSection;
