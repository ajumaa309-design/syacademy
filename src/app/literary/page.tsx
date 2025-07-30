import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Scroll, Globe } from 'lucide-react';
import Link from 'next/link';

export default function LiteraryPage() {
  const subjects = [
    { name: 'عربي', icon: <Book className="w-10 h-10 text-primary" />, href: '/literary/arabic' },
    { name: 'انجليزي', icon: <Globe className="w-10 h-10 text-primary" />, href: '/literary/english' },
    { name: 'تاريخ', icon: <Scroll className="w-10 h-10 text-primary" />, href: '/literary/history' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-headline">
        المسار الأدبي
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject) => (
          <Link href={subject.href} key={subject.name}>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {subject.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-semibold">{subject.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
