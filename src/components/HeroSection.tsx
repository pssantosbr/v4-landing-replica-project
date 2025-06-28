
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-red-900/20 to-black relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg px-4 py-2 inline-block">
                <span className="text-white font-medium">+12 anos de mercado</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Monte seu{' '}
                <span className="text-red-500">time de marketing</span>{' '}
                de acordo com a necessidade da{' '}
                <span className="text-blue-400">sua empresa</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">200+</div>
                <div className="text-gray-300">times montados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">R$ 6,5 B</div>
                <div className="text-gray-300">em mídia gerida</div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors w-full lg:w-auto">
                Quero montar meu time de marketing
              </button>
              
              <button className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors block lg:inline-block">
                Quero falar com um especialista
              </button>
            </div>

            <div className="flex gap-4 opacity-60">
              <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">VISA</div>
              <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">MC</div>
              <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">PIX</div>
            </div>
          </div>

          <div className="lg:order-last">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Dar o próximo passo leva menos de um minuto
              </h3>
              
              <form className="space-y-4">
                <select className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white">
                  <option>Qual o seu maior objetivo?</option>
                  <option>Aumentar vendas</option>
                  <option>Gerar mais leads</option>
                  <option>Melhorar presença digital</option>
                </select>
                
                <input 
                  type="text"
                  placeholder="Qual o seu nome?"
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                
                <input 
                  type="email"
                  placeholder="Qual o seu melhor e-mail?"
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                
                <input 
                  type="text"
                  placeholder="Qual o nome da sua empresa?"
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Receber mais informações
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
