
import React from 'react';

const MetricsSection = () => {
  const metrics = [
    { label: 'Jan', value: 60 },
    { label: 'Feb', value: 80 },
    { label: 'Mar', value: 45 },
    { label: 'Apr', value: 90 },
    { label: 'May', value: 75 },
    { label: 'Jun', value: 95 }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Performance Mensal</h3>
              <div className="flex items-end justify-between h-64 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="bg-red-500 w-full rounded-t transition-all duration-500"
                      style={{ height: `${metric.value}%` }}
                    ></div>
                    <span className="text-sm text-gray-400 mt-2">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Resultados baseados em{' '}
              <span className="text-red-500">dados reais</span>
            </h2>
            <p className="text-xl text-gray-400">
              Cada estratégia é desenvolvida com base em análises profundas e métricas que realmente importam para seu negócio.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <span className="text-gray-300">ROI Médio</span>
                <span className="text-2xl font-bold text-green-500">+340%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Redução CAC</span>
                <span className="text-2xl font-bold text-green-500">-45%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Aumento Conversão</span>
                <span className="text-2xl font-bold text-green-500">+180%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
