
import { Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de uma consultoria jurídica", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/escritorio_advocacia", "_blank");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top contact bar */}
      <div className="bg-navy text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contato@escritorio.com.br</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={handleInstagramClick}
                className="hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-playfair font-bold text-2xl text-navy">
            Advocacia & Consultoria
          </div>
          
          <div className="hidden md:flex space-x-8 font-inter">
            <a href="#inicio" className="text-gray-700 hover:text-navy transition-colors">Início</a>
            <a href="#servicos" className="text-gray-700 hover:text-navy transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-navy transition-colors">Sobre</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-navy transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-700 hover:text-navy transition-colors">Contato</a>
          </div>

          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white font-inter font-medium"
          >
            Consulta WhatsApp
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
