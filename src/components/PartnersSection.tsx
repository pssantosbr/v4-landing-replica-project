
import React from 'react';

const PartnersSection = () => {
  const executives = [
    {
      name: "Dennis Wang",
      position: "Ex-presidente do Nubank, cofundador da Buser",
      testimonial: "A V4 Company possui uma metodologia sólida e resultados comprovados no mercado digital.",
      avatar: "DW"
    },
    {
      name: "Maria Santos",
      position: "Ex-CMO Magazine Luiza, consultora de growth",
      testimonial: "Trabalho com eles há anos e sempre entregam resultados excepcionais para nossos clientes.",
      avatar: "MS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-4xl mx-auto">
            Somos parceiros de alguns dos executivos mais{' '}
            <span className="text-red-500">relevantes do mercado brasileiro</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {executives.map((executive, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-800/30 to-purple-900/50 rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {executive.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{executive.name}</h3>
                  <p className="text-purple-300 text-sm">{executive.position}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-300 italic">
                "{executive.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Falar com um analista
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
