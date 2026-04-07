import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import IcebergSection from "@/components/IcebergSection";
import EstatisticasSection from "@/components/EstatisticasSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import NR1Section from "@/components/NR1Section";
import SolucaoSection from "@/components/SolucaoSection";
import FlagsSection from "@/components/FlagsSection";
import AcolheCenterSection from "@/components/AcolheCenterSection";
import ServicosSection from "@/components/ServicosSection";
import ResultadosSection from "@/components/ResultadosSection";
import BlogSection from "@/components/BlogSection";
import ContatoSection from "@/components/ContatoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemaSection />
    <IcebergSection />
    <EstatisticasSection />
    <ParaQuemSection />
    <NR1Section />
    <SolucaoSection />
    <FlagsSection />
    <AcolheCenterSection />
    <ServicosSection />
    <ResultadosSection />
    <BlogSection />
    <ContatoSection />
    <FooterSection />
  </div>
);

export default Index;
