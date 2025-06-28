
import React from 'react';

const CasesSection = () => {
  const partners = [
    { name: "Google Partner", logo: "G" },
    { name: "Meta Business Partner", logo: "M" },
    { name: "Tray Partner", logo: "T" }
  ];

  const testimonials = [
    {
      company: "EcoTech Solutions",
      result: "De R$60.000 a R$700.000 de faturamento ao mês",
      name: "Carlos Silva",
      position: "CEO",
      testimonial: "A V4 Company transformou completamente nosso marketing digital. Em 8 meses, multiplicamos nosso faturamento por mais de 10x."
    },
    {
      company: "Digital Store",
      result: "Aumento de 450% no ROI",
      name: "Ana Costa",
      position: "Diretora de Marketing",
      testimonial: "A expertise da equipe e a estratégia personalizada foram fundamentais para alcançarmos resultados extraordinários."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Partners */}
        <div className="text-center mb-16">
          <h3 className="text-xl text-gray-400 mb-8">Parceiros oficiais</h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xl font-bold text-white">
                  {partner.logo}
                </div>
                <span className="text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cases */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Cases de <span className="text-red-500">sucesso</span> comprovado
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-red-500 mb-2">
                    {testimonial.result}
                  </h3>
                  <p className="text-gray-400 mb-4">{testimonial.testimonial}</p>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold">{testimonial.company}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.name} • {testimonial.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Falar com um especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
