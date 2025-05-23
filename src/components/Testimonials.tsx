
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Empresária",
      rating: 5,
      text: "Excelente atendimento! O escritório me ajudou a resolver uma questão trabalhista complexa com muito profissionalismo e eficiência. Recomendo a todos!",
      location: "São Paulo, SP"
    },
    {
      name: "João Santos",
      company: "Diretor Comercial",
      rating: 5,
      text: "Precisava de consultoria empresarial urgente e encontrei no escritório a solução perfeita. Equipe competente e sempre disponível para esclarecer dúvidas.",
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Ana Costa",
      company: "Médica",
      rating: 5,
      text: "Fui muito bem atendida em uma questão de direito médico. A advocacia demonstrou conhecimento técnico excepcional e conseguiu o melhor resultado para meu caso.",
      location: "Belo Horizonte, MG"
    },
    {
      name: "Carlos Oliveira",
      company: "Engenheiro",
      rating: 5,
      text: "Serviço impecável! Resolveram minha questão imobiliária de forma rápida e eficiente. Preço justo e atendimento humanizado. Voltarei a procurá-los com certeza.",
      location: "Porto Alegre, RS"
    },
    {
      name: "Fernanda Lima",
      company: "Arquiteta",
      rating: 5,
      text: "Profissionais extremamente competentes. Me auxiliaram em uma questão tributária complexa e conseguiram uma economia significativa para minha empresa.",
      location: "Brasília, DF"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confia em nosso trabalho.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12">
              <div className="relative">
                <Quote className="w-12 h-12 text-gold/20 absolute -top-6 -left-6" />
                
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-gold fill-gold" />
                    ))}
                  </div>
                  
                  <blockquote className="font-inter text-xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="font-playfair text-xl font-semibold text-navy">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="font-inter text-gray-600">
                        {testimonials[currentTestimonial].company}
                      </div>
                      <div className="font-inter text-sm text-gray-500">
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-lg text-gray-700 mb-6">
            Quer saber mais sobre como podemos ajudar você?
          </p>
          <Button 
            onClick={() => window.open("https://wa.me/5511999999999?text=Olá, gostaria de uma consultoria jurídica", "_blank")}
            className="bg-gold hover:bg-gold-dark text-navy font-inter font-semibold text-lg px-8 py-4"
          >
            Fale Conosco Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
