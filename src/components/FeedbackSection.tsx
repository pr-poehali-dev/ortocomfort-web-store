import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';
import { useToast } from "@/components/ui/use-toast";

const FeedbackSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = { name: '', phone: '', message: '' };
    let isValid = true;

    // Проверка имени
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
      isValid = false;
    }

    // Проверка телефона
    const phoneRegex = /^\+?[7,8]\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    if (!phoneRegex.test(formData.phone) || cleanPhone.length < 11) {
      newErrors.phone = 'Введите корректный номер телефона';
      isValid = false;
    }

    // Проверка сообщения
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrors({ name: '', phone: '', message: '' });
    
    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Успешно!",
          description: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '', message: '' });
        setErrors({ name: '', phone: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: "Ошибка отправки сообщения. Попробуйте еще раз или свяжитесь по телефону.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast({
        title: "Ошибка сети",
        description: "Не удалось отправить сообщение. Проверьте интернет-соединение.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errors.name) setErrors({...errors, name: ''});
                  }}
                  placeholder="Ваше имя"
                  className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    if (errors.phone) setErrors({...errors, phone: ''});
                  }}
                  placeholder="+7 (999) 123-45-67"
                  className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({...formData, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: ''});
                  }}
                  placeholder="Расскажите о ваших потребностях..."
                  className={`w-full h-32 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>



              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;