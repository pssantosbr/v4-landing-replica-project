
import React from 'react';

const RadarSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Vamos explorar o marketing da sua empresa conforme a{' '}
              <span className="text-red-500">necessidade real</span>
            </h2>
            <p className="text-xl text-gray-400">
              Nossa análise detalhada identifica oportunidades específicas para seu negócio crescer de forma sustentável.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Análise de mercado e concorrência
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Identificação do público-alvo ideal
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Estratégia de canais de aquisição
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Otimização de conversão e ROI
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                {/* Radar grid */}
                <g>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <polygon
                      key={i}
                      points="160,40 280,160 160,280 40,160"
                      fill="none"
                      stroke="rgba(239, 68, 68, 0.3)"
                      strokeWidth="1"
                      transform={`scale(${0.2 + i * 0.2}) translate(${80 - i * 16}, ${80 - i * 16})`}
                    />
                  ))}
                  
                  {/* Radar lines */}
                  <line x1="160" y1="160" x2="160" y2="40" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1"/>
                  <line x1="160" y1="160" x2="280" y2="160" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1"/>
                  <line x1="160" y1="160" x2="160" y2="280" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1"/>
                  <line x1="160" y1="160" x2="40" y2="160" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1"/>
                </g>
                
                {/* Data visualization */}
                <polygon
                  points="160,80 220,160 160,220 100,160"
                  fill="rgba(239, 68, 68, 0.2)"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                
                {/* Data points */}
                <circle cx="160" cy="80" r="4" fill="#ef4444"/>
                <circle cx="220" cy="160" r="4" fill="#ef4444"/>
                <circle cx="160" cy="220" r="4" fill="#ef4444"/>
                <circle cx="100" cy="160" r="4" fill="#ef4444"/>
                
                {/* Labels */}
                <text x="160" y="30" textAnchor="middle" className="fill-white text-sm">SEO</text>
                <text x="290" y="165" textAnchor="middle" className="fill-white text-sm">Paid Media</text>
                <text x="160" y="300" textAnchor="middle" className="fill-white text-sm">Social</text>
                <text x="30" y="165" textAnchor="middle" className="fill-white text-sm">Email</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSection;
