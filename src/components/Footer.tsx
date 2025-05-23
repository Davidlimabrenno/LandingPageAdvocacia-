
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de uma consultoria jurídica", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/escritorio_advocacia", "_blank");
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="font-playfair font-bold text-2xl text-gold">
              Advocacia & Consultoria
            </div>
            <p className="font-inter text-gray-300 leading-relaxed">
              Tradição, competência e resultados em advocacia. 
              Mais de 20 anos defendendo seus direitos com excelência.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleInstagramClick}
                className="bg-gold/10 hover:bg-gold/20 p-3 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-semibold text-gold">
              Nossas Especialidades
            </h3>
            <ul className="space-y-3 font-inter text-gray-300">
              <li><a href="#servicos" className="hover:text-gold transition-colors">Direito Empresarial</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Direito Trabalhista</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Direito Civil</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Direito Penal</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Direito Imobiliário</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Direito Tributário</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-semibold text-gold">
              Contato
            </h3>
            <div className="space-y-4 font-inter text-gray-300">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div>(11) 9999-9999</div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div>contato@escritorio.com.br</div>
                  <div className="text-sm text-gray-400">Email principal</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div>Av. Paulista, 1000</div>
                  <div>São Paulo, SP - 01310-100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-semibold text-gold">
              Horário de Atendimento
            </h3>
            <div className="space-y-4 font-inter text-gray-300">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm">Segunda à Sexta</div>
                  <div>8h às 18h</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm">Sábados</div>
                  <div>8h às 12h</div>
                </div>
              </div>
              <div className="bg-gold/10 p-4 rounded-lg border border-gold/20">
                <p className="text-sm font-medium text-gold mb-2">Atendimento de Emergência</p>
                <p className="text-sm text-gray-300">24h via WhatsApp para casos urgentes</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Emergência WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-gray-400 text-sm">
              © 2024 Advocacia & Consultoria. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 font-inter text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gold transition-colors">OAB/SP 123.456</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
