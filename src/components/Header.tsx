
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-red-500">V4</span> Company
        </div>
        <a 
          href="#" 
          className="text-white hover:text-red-500 transition-colors font-medium"
        >
          Sou franqueado
        </a>
      </div>
    </header>
  );
};

export default Header;
