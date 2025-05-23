
import { Button } from "@/components/ui/button";
import { Scale, Shield, Award } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de uma consultoria jurídica", "_blank");
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Excelência em
              <span className="text-gold block">Consultoria Jurídica</span>
            </h1>
            <p className="font-inter text-xl mb-8 text-gray-200 leading-relaxed">
              Há mais de 20 anos oferecendo soluções jurídicas eficazes com tradição, 
              competência e resultados comprovados para nossos clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-inter font-semibold text-lg px-8 py-4"
              >
                Consultoria Gratuita
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy font-inter font-semibold text-lg px-8 py-4"
              >
                Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Scale className="w-8 h-8 text-gold mb-2" />
                <span className="font-inter text-sm">20+ Anos</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-gold mb-2" />
                <span className="font-inter text-sm">1000+ Casos</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-gold mb-2" />
                <span className="font-inter text-sm">95% Sucesso</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gold">
                Consulta Jurídica Gratuita
              </h3>
              <p className="font-inter mb-6 text-gray-200">
                Fale conosco agora e receba uma análise preliminar do seu caso sem compromisso.
              </p>
              <ul className="space-y-3 font-inter text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  Atendimento especializado
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  Resposta em até 24h
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  Sem compromisso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
