
import React from 'react';

const MethodSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto">
          Existe um método científico para que sua empresa{' '}
          <span className="text-red-500">nunca pare de vender</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  fill="none"
                  stroke="rgba(239, 68, 68, 0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="80"
                  fill="none"
                  stroke="rgba(239, 68, 68, 0.5)"
                  strokeWidth="2"
                />
                
                {/* Atração */}
                <g>
                  <circle cx="160" cy="40" r="30" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"/>
                  <text x="160" y="46" textAnchor="middle" className="fill-white text-sm font-semibold">
                    Atração
                  </text>
                </g>
                
                {/* Engajamento */}
                <g>
                  <circle cx="280" cy="160" r="30" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"/>
                  <text x="280" y="166" textAnchor="middle" className="fill-white text-sm font-semibold">
                    Engajamento
                  </text>
                </g>
                
                {/* Monetização */}
                <g>
                  <circle cx="160" cy="280" r="30" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"/>
                  <text x="160" y="286" textAnchor="middle" className="fill-white text-sm font-semibold">
                    Monetização
                  </text>
                </g>
                
                {/* Retenção */}
                <g>
                  <circle cx="40" cy="160" r="30" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"/>
                  <text x="40" y="166" textAnchor="middle" className="fill-white text-sm font-semibold">
                    Retenção
                  </text>
                </g>
                
                {/* Connecting lines */}
                <line x1="160" y1="70" x2="160" y2="130" stroke="#ef4444" strokeWidth="2"/>
                <line x1="190" y1="160" x2="250" y2="160" stroke="#ef4444" strokeWidth="2"/>
                <line x1="160" y1="190" x2="160" y2="250" stroke="#ef4444" strokeWidth="2"/>
                <line x1="130" y1="160" x2="70" y2="160" stroke="#ef4444" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-red-500">Atração</h3>
              <p className="text-gray-400">
                Estratégias para atrair seu público-alvo através dos canais certos
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-red-500">Engajamento</h3>
              <p className="text-gray-400">
                Construção de relacionamento e confiança com potenciais clientes
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-red-500">Monetização</h3>
              <p className="text-gray-400">
                Conversão de leads em vendas através de processos otimizados
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-red-500">Retenção</h3>
              <p className="text-gray-400">
                Fidelização e aumento do valor do cliente ao longo do tempo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
