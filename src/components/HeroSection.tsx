import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Ваше здоровье — наш <span className="text-blue-600">приоритет</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональные ортопедические решения для комфортной и здоровой жизни. 
              Более 10+ лет заботимся о вашем благополучии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  const form = document.getElementById('feedback-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Консультация
              </Button>
              <Button 
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline" 
                size="lg" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8"
              >
                <Icon name="MapPin" className="mr-2" size={20} />
                Наш адрес
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="/img/42f27531-f50d-4617-8332-d862c5db973e.jpg" 
              alt="Медицинский специалист возле ресепшена" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;