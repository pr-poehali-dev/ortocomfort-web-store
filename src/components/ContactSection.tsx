import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Контакты</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Адрес</h3>
                  <p className="text-gray-600">ул. Чехова, 20, Альметьевск, Республика Татарстан, 423452</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Телефон</h3>
                  <a href="tel:+79961210555" className="text-blue-600 hover:text-blue-800 underline">+7 996 121-05-55</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Часы работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00-19:00<br />Сб: 10:00-16:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-2 gap-3">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/79961210555" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                  <a href="https://t.me/ortokomfort" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <a href="https://yandex.ru/maps/?text=улица%20Чехова%2020%20Альметьевск%20Республика%20Татарстан" target="_blank" rel="noopener noreferrer">
                    <Icon name="Map" className="mr-2" size={20} />
                    Яндекс.Карты
                  </a>
                </Button>
                <Button asChild style={{backgroundColor: 'rgb(166, 206, 56)', color: 'white'}} className="hover:opacity-90 text-white">
                  <a href="https://2gis.ru/almetyevsk/search/улица%20Чехова%2020" target="_blank" rel="noopener noreferrer">
                    <Icon name="Navigation" className="mr-2" size={20} />
                    2GIS
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="animate-scale-in">
            <div className="bg-gray-100 rounded-2xl h-[500px] overflow-hidden">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa34d0c71f2006848016fa4f6e13ac948ef9cc71c6ea9668fd2544d941adea33b&source=constructor" 
                width="100%" 
                height="500" 
                frameBorder="0"
                className="rounded-2xl"
                title="Карта местоположения клиники ОртоКомфорт"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;