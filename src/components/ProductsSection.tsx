import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  title: string;
  description: string;
  category: string;
  detailedDescription: string;
  features: string[];
}

interface Service {
  title: string;
  description: string;
  price: string;
  detailedDescription: string;
  features: string[];
  icon: string;
}

const services: Service[] = [
  {
    title: "Аренда костылей",
    description: "Удобные костыли для временного использования",
    price: "от 150 ₽/день",
    detailedDescription: "Предлагаем в аренду качественные костыли различных размеров. Все изделия проходят обязательную санитарную обработку. Удобная система крепления и регулировки высоты. Минимальный срок аренды — 1 день.",
    features: ["Регулируемая высота", "Анатомические накладки", "Санитарная обработка", "Разные размеры", "Доставка по городу"],
    icon: "Move"
  },
  {
    title: "Аренда инвалидных колясок",
    description: "Качественные коляски для людей с ограниченными возможностями",
    price: "от 300 ₽/день",
    detailedDescription: "Широкий выбор инвалидных колясок: стандартные, облегченные, с электроприводом. Все коляски находятся в отличном техническом состоянии и регулярно проходят техническое обслуживание.",
    features: ["Складные модели", "Регулируемые подножки", "Комфортные сиденья", "Надежные тормоза", "Техобслуживание"],
    icon: "Car"
  },
  {
    title: "Аренда ходунков",
    description: "Безопасные ходунки для восстановления после травм",
    price: "от 200 ₽/день",
    detailedDescription: "Ходунки различных типов: стандартные, роллаторы с колесами, с сиденьем. Помогают восстановить навыки ходьбы после травм и операций. Легкие, устойчивые и безопасные конструкции.",
    features: ["Разные типы", "Легкий вес", "Устойчивая конструкция", "Регулировка высоты", "Противоскользящие накладки"],
    icon: "Move"
  },
  {
    title: "Аренда медицинских кроватей",
    description: "Функциональные кровати для домашнего ухода",
    price: "от 500 ₽/день",
    detailedDescription: "Медицинские кровати с электроприводом и механические модели. Регулировка положения головной и ножной секций. Боковые ограждения для безопасности. Идеальны для ухода за лежачими больными.",
    features: ["Электропривод", "Регулировка секций", "Боковые ограждения", "Ортопедический матрас", "Установка на дому"],
    icon: "Home"
  }
];

const products: Product[] = [
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

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Продукция и услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ортопедические изделия и аренда медицинского оборудования
          </p>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="products" className="text-lg">
              <Icon name="Package" className="mr-2" size={20} />
              Продукция
            </TabsTrigger>
            <TabsTrigger value="services" className="text-lg">
              <Icon name="Heart" className="mr-2" size={20} />
              Услуги
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {/* Десктоп версия */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            
            {/* Мобильная карусель */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {products.map((product, index) => (
                    <CarouselItem key={index} className="basis-4/5">
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="services">
            {/* Десктоп версия услуг */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                  <CardHeader>
                    <div className="flex justify-end mb-2">
                      <Badge className="bg-green-100 text-green-800">{service.price}</Badge>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-gray-800">
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg text-gray-600 mt-2">
                            {service.detailedDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-6">
                          <div className="bg-green-50 p-4 rounded-lg mb-6">
                            <p className="text-2xl font-bold text-green-800 text-center">{service.price}</p>
                          </div>
                          <h4 className="font-semibold text-lg text-gray-800 mb-3">Преимущества:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
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
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                            size="lg"
                          >
                            <Icon name="Phone" className="mr-2" size={18} />
                            Заказать услугу
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Мобильная карусель услуг */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {services.map((service, index) => (
                    <CarouselItem key={index} className="basis-4/5">
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex justify-end mb-2">
                            <Badge className="bg-green-100 text-green-800">{service.price}</Badge>
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 mb-4">
                            {service.description}
                          </CardDescription>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="w-full">
                                Подробнее
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-2xl text-gray-800">
                                  {service.title}
                                </DialogTitle>
                                <DialogDescription className="text-lg text-gray-600 mt-2">
                                  {service.detailedDescription}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-6">
                                <div className="bg-green-50 p-4 rounded-lg mb-6">
                                  <p className="text-2xl font-bold text-green-800 text-center">{service.price}</p>
                                </div>
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">Преимущества:</h4>
                                <ul className="space-y-2">
                                  {service.features.map((feature, featureIndex) => (
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
                                  className="bg-green-600 hover:bg-green-700 text-white px-8"
                                  size="lg"
                                >
                                  <Icon name="Phone" className="mr-2" size={18} />
                                  Заказать услугу
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <img 
            src="/img/f95708d1-a520-4b19-9d96-19c151472a04.jpg" 
            alt="Ортопедические изделия" 
            className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;