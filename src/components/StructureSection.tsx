
import React from 'react';
import { Users, Star } from 'lucide-react';

const StructureSection = () => {
  const services = [
    {
      title: "Gestão e Atendimento",
      description: "Equipe dedicada para gerenciar suas campanhas e atender suas necessidades",
      icon: Users
    },
    {
      title: "Criação de Conteúdo",
      description: "Produção de materiais visuais e textuais para suas campanhas",
      icon: Star
    },
    {
      title: "Análise de Dados",
      description: "Monitoramento e otimização baseada em dados reais",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            A <span className="text-red-500">V4 Company</span> estrutura o marketing da sua empresa com{' '}
            <span className="text-blue-400">soluções feitas sob medida</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nossa metodologia comprovada adapta-se às necessidades específicas do seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Iniciar com a V4 Company
          </button>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
