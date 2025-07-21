import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';

interface Product {
  title: string;
  description: string;
  category: string;
  detailedDescription: string;
  features: string[];
}

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
  );
};

export default ProductsSection;