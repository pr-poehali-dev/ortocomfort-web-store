import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;