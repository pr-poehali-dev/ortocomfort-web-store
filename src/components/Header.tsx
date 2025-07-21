import React from 'react';

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/725f9810-6e85-44bb-b8e5-12b16e29c504.jpg" 
              alt="Логотип ОртоКомфорт" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-gray-800">ОртоКомфорт</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Продукция</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;