import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const products = [
    {
      title: "Ортопедические стельки",
      description: "Индивидуальные стельки для коррекции осанки и поддержки стопы",
      category: "Стельки",
      detailedDescription: "Профессиональные ортопедические стельки изготавливаются индивидуально для каждого пациента. Они обеспечивают правильное распределение нагрузки на стопу, улучшают осанку и снижают усталость ног. Изготовлены из высококачественных материалов с антибактериальным покрытием.",
      features: ["Индивидуальное изготовление", "Коррекция плоскостопия", "Поддержка свода стопы", "Антибактериальное покрытие", "Дышащий материал"]
    },
    {
      title: "Корсеты и бандажи",
      description: "Поддерживающие изделия для позвоночника и суставов",
      category: "Корсеты",
      detailedDescription: "Медицинские корсеты и бандажи предназначены для фиксации и поддержки позвоночника, снижения болевых ощущений и профилактики травм. Различные степени жесткости позволяют подобрать оптимальный вариант для каждого случая.",
      features: ["Разные степени жесткости", "Регулируемая фиксация", "Дышащие материалы", "Анатомический крой", "Незаметность под одеждой"]
    },
    {
      title: "Ортезы",
      description: "Специализированные изделия для фиксации и поддержки",
      category: "Ортезы",
      detailedDescription: "Ортезы — это технические средства реабилитации, предназначенные для компенсации нарушенных функций опорно-двигательного аппарата. Наши ортезы изготовлены из современных материалов и обеспечивают максимальный комфорт при использовании.",
      features: ["Современные материалы", "Точная фиксация", "Регулировка по размеру", "Легкий вес", "Простота использования"]
    },
    {
      title: "Подушки и матрасы",
      description: "Ортопедические принадлежности для здорового сна",
      category: "Сон",
      detailedDescription: "Ортопедические подушки и матрасы обеспечивают правильное положение позвоночника во время сна, способствуют полноценному отдыху и восстановлению. Изготовлены из материалов с эффектом памяти и натуральных компонентов.",
      features: ["Эффект памяти", "Поддержка позвоночника", "Гипоаллергенные материалы", "Терморегуляция", "Долговечность"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
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

      {/* Hero блок */}
      <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Ваше здоровье — наш <span className="text-blue-600">приоритет</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные ортопедические решения для комфортной и здоровой жизни. 
                Более 15 лет заботимся о вашем благополучии.
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
                src="/img/1a1199a0-ef3e-4e1c-a6e8-41dbcd339172.jpg" 
                alt="Ортопедический специалист" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">О компании ОртоКомфорт</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на предоставлении высококачественных ортопедических решений, 
              помогая людям жить активной и комфортной жизнью без боли и дискомфорта.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Многолетний опыт в области ортопедии и реабилитации</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl">10000+ клиентов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Довольных клиентов, которые доверяют нашему опыту</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-purple-600" size={32} />
                </div>
                <CardTitle className="text-xl">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Только сертифицированная продукция от ведущих производителей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Продукция */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Наша продукция</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент ортопедических изделий для различных потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">{product.category}</Badge>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-gray-800">{product.title}</DialogTitle>
                        <DialogDescription className="text-lg text-gray-600 mt-2">
                          {product.detailedDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Особенности:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <Icon name="Check" className="text-green-600 mr-2" size={16} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Button 
                          onClick={() => {
                            const form = document.getElementById('feedback-form');
                            if (form) {
                              form.scrollIntoView({ behavior: 'smooth' });
                              const dialog = document.querySelector('[role="dialog"]');
                              if (dialog) {
                                const closeButton = dialog.querySelector('[data-state="open"] button');
                                closeButton?.click();
                              }
                            }
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                          size="lg"
                        >
                          <Icon name="MessageSquare" className="mr-2" size={18} />
                          Заказать консультацию
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="/img/f95708d1-a520-4b19-9d96-19c151472a04.jpg" 
              alt="Ортопедические изделия" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Контакты и карта */}
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
                    <p className="text-gray-600">ул. Здоровья, 25, Москва, 101000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@ortokomfort.ru</p>
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
                    <a href="https://wa.me/74951234567" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://yandex.ru/maps/?text=ул.%20Здоровья%2025%20Москва" target="_blank" rel="noopener noreferrer">
                      <Icon name="Map" className="mr-2" size={20} />
                      Яндекс.Карты
                    </a>
                  </Button>
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                    <a href="https://2gis.ru/moscow/search/ул.%20Здоровья%2025" target="_blank" rel="noopener noreferrer">
                      <Icon name="Navigation" className="mr-2" size={20} />
                      2GIS
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="animate-scale-in">
              <div className="bg-gray-100 rounded-2xl h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" className="text-gray-400 mx-auto mb-4" size={64} />
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500 mt-2">Карта будет загружена здесь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обратная связь */}
      <section id="feedback-form" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Обратная связь</h2>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами для получения персональной консультации
              </p>
            </div>

            <Card className="p-8 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ваше имя"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о ваших потребностях..."
                    className="w-full h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
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
                <p>+7 (495) 123-45-67</p>
                <p>info@ortokomfort.ru</p>
                <p>ул. Здоровья, 25, Москва</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ОртоКомфорт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;