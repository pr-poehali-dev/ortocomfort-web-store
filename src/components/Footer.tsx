import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/725f9810-6e85-44bb-b8e5-12b16e29c504.jpg" 
                alt="Логотип ОртоКомфорт" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">ОртоКомфорт</span>
            </div>
            <p className="text-gray-400">
              Ваше здоровье и комфорт — наша главная миссия
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Продукция</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <a href="tel:+79961210555" className="hover:text-white transition-colors">+7 996 121-05-55</a>
              <p>ул. Чехова, 20, Альметьевск</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ОртоКомфорт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;