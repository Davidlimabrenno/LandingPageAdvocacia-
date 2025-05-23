
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      number: "1000+",
      label: "Clientes Atendidos"
    },
    {
      icon: <Trophy className="w-8 h-8 text-gold" />,
      number: "95%",
      label: "Taxa de Sucesso"
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      number: "20+",
      label: "Anos de Experiência"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gold" />,
      number: "500+",
      label: "Casos Vencidos"
    }
  ];

  const differentials = [
    "Equipe altamente qualificada e especializada",
    "Atendimento personalizado e humanizado",
    "Tecnologia aplicada ao direito",
    "Transparência em todas as etapas",
    "Honorários justos e acessíveis",
    "Consultoria preventiva especializada"
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-8">
              Tradição e Inovação em
              <span className="text-gold block">Advocacia</span>
            </h2>
            
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              Nosso escritório foi fundado com o propósito de oferecer serviços jurídicos 
              de excelência, combinando a tradição do direito com as mais modernas 
              ferramentas e tecnologias do mercado.
            </p>

            <p className="font-inter text-lg text-gray-700 mb-10 leading-relaxed">
              Acreditamos que cada cliente é único e merece atenção personalizada. 
              Nossa equipe trabalha incansavelmente para garantir os melhores resultados, 
              sempre pautados pela ética, transparência e competência técnica.
            </p>

            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-6">
                Nossos Diferenciais
              </h3>
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-inter text-gray-700">{differential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-navy to-navy-dark text-white border-0">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-gold">
                  Nossa Missão
                </h3>
                <p className="font-inter text-lg leading-relaxed">
                  Proporcionar soluções jurídicas eficazes e acessíveis, defendendo 
                  os direitos de nossos clientes com dedicação, ética e excelência técnica.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      {achievement.icon}
                    </div>
                    <div className="font-playfair text-3xl font-bold text-navy mb-2">
                      {achievement.number}
                    </div>
                    <div className="font-inter text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
