
import { Building, Users, FileText, Gavel, Home, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-gold" />,
      title: "Direito Empresarial",
      description: "Consultoria completa para empresas, contratos comerciais e compliance corporativo."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Direito Trabalhista",
      description: "Defesa em ações trabalhistas e consultoria preventiva em relações de trabalho."
    },
    {
      icon: <FileText className="w-8 h-8 text-gold" />,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos do consumidor e questões patrimoniais."
    },
    {
      icon: <Gavel className="w-8 h-8 text-gold" />,
      title: "Direito Penal",
      description: "Defesa criminal, inquéritos policiais e acompanhamento processual especializado."
    },
    {
      icon: <Home className="w-8 h-8 text-gold" />,
      title: "Direito Imobiliário",
      description: "Compra, venda, locações e regularização de propriedades e terrenos."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gold" />,
      title: "Direito Tributário",
      description: "Planejamento tributário, recuperação de créditos e defesa fiscal."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Nossas Especialidades
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas completas em diversas áreas do direito, 
            sempre com excelência e dedicação aos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-lg text-gray-700 mb-6">
            Não encontrou sua necessidade? Entre em contato conosco.
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os serviços", "_blank")}
            className="bg-navy hover:bg-navy-dark text-white px-8 py-3 rounded-lg font-inter font-medium transition-colors"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
