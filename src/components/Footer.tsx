
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">
            <span className="text-red-500">V4</span>{' '}
            <span className="text-white">Company</span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Termos de uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de privacidade
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 V4 Company. Todos os direitos reservados.</p>
          <p>CNPJ: 12.345.678/0001-90 | Este site não faz parte do Facebook ou do Google.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
