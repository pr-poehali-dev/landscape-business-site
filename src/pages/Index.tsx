import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">GreenScape</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block" size="lg">
            Консультация
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Создаём райские уголки
                <span className="text-primary"> под ключ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное благоустройство территорий с гарантией 3 года. От проекта до воплощения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="CalendarCheck" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">350+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/81e04b30-ac19-4347-8fbb-a9b3a045e4a8/files/e405db41-030a-4cab-a7d0-cc48a35e6cf4.jpg" 
                alt="Ландшафтный дизайн" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр работ по благоустройству территорий</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "TreePine",
                title: "Озеленение",
                description: "Посадка деревьев, кустарников, создание газонов и цветников"
              },
              {
                icon: "Waves",
                title: "Водные объекты",
                description: "Пруды, фонтаны, ручьи и системы водопадов"
              },
              {
                icon: "Lightbulb",
                title: "Освещение",
                description: "Ландшафтное освещение и подсветка территории"
              },
              {
                icon: "Home",
                title: "Малые формы",
                description: "Беседки, перголы, патио и зоны отдыха"
              },
              {
                icon: "Palmtree",
                title: "Дорожки и площадки",
                description: "Мощение тротуарной плиткой, природным камнем"
              },
              {
                icon: "Droplets",
                title: "Системы полива",
                description: "Автоматический полив и дренажные системы"
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:scale-105 border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши лучшие работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/projects/81e04b30-ac19-4347-8fbb-a9b3a045e4a8/files/8cd29766-9583-4c4e-8532-1ca08559317c.jpg" 
                  alt={`Проект ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Загородный участок</h3>
                    <p className="text-sm">Полное благоустройство 15 соток</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/81e04b30-ac19-4347-8fbb-a9b3a045e4a8/files/86613544-cc63-43cf-bbef-b84327bd6c7c.jpg" 
                alt="О компании" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                GreenScape — команда профессионалов с 12-летним опытом в сфере ландшафтного дизайна. 
                Мы превращаем обычные участки в произведения искусства, сочетая эстетику и функциональность.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Собственное производство</h3>
                    <p className="text-muted-foreground">Питомник растений и материалы напрямую от поставщиков</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">3 года гарантии на все виды работ и растения</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">Учитываем все пожелания и особенности участка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Владелица загородного дома",
                text: "Потрясающая работа! Команда GreenScape превратила наш участок в настоящий оазис. Все сделано качественно и в срок."
              },
              {
                name: "Сергей Иванов",
                role: "Директор ресторана",
                text: "Благоустроили летнюю террасу ресторана. Гости в восторге! Профессиональный подход и отличный результат."
              },
              {
                name: "Марина Козлова",
                role: "Дизайнер интерьеров",
                text: "Работала с GreenScape на нескольких объектах. Всегда безупречное исполнение и креативные решения."
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Запишитесь на бесплатную консультацию
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и наш специалист свяжется с вами в течение часа
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    placeholder="ivan@example.com" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Опишите ваш проект</label>
                  <Textarea 
                    placeholder="Расскажите о вашем участке и пожеланиях..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">info@greenscape.ru</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Садовая, 15</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={28} />
                <span className="text-xl font-bold">GreenScape</span>
              </div>
              <p className="text-sm opacity-90">
                Создаём уникальные ландшафты с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Озеленение</li>
                <li>Водные объекты</li>
                <li>Освещение</li>
                <li>Дорожки и площадки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@greenscape.ru</li>
                <li>Москва, ул. Садовая, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            © 2024 GreenScape. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;