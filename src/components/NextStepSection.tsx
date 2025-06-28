
import React from 'react';
import { FileText, Phone, CircleCheck } from 'lucide-react';

const NextStepSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Dar o próximo passo leva menos de um minuto
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Preencha o formulário</h3>
            <p className="text-gray-400">
              Nos conte sobre sua empresa e objetivos de marketing
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Receba uma ligação</h3>
            <p className="text-gray-400">
              Nossa equipe entrará em contato para entender melhor suas necessidades
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <CircleCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Monte seu time</h3>
            <p className="text-gray-400">
              Estruturamos sua solução personalizada de marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;
