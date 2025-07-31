import { BookOpen, Users, BrainCircuit, BarChart } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: '2. محتوى يتجدد باستمرار',
      description: 'دورات جديدة تُضاف شهريًا. نُضيف دورات جديدة باستمرار لتواكب احتياجات الطلاب وتطوراتهم.',
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'مدربون خبراء',
      description: 'تعلم من أفضل المدربين الذين لديهم خبرة عملية في مجالاتهم.',
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-primary" />,
      title: 'أدوات تعلم تفاعلية',
      description: 'انخرط في تجارب تعليمية عملية من خلال الاختبارات والمشاريع.',
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: 'تتبع تقدمك',
      description: 'راقب رحلتك التعليمية وحافظ على حماسك من خلال تتبع إنجازاتك.',
    },
  ];

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-card">
              <div className="flex justify-center items-center mb-4">
                 <div className="p-4 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
