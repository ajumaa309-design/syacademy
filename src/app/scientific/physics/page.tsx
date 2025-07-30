
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function PhysicsPage() {
  const lessons = Array.from({ length: 10 }, (_, i) => `الدرس ${i + 1}`);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-headline">
        مادة الفيزياء
      </h1>
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>قائمة الدروس</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {lessons.map((lesson, index) => (
              <AccordionItem value={`item-${index}`} key={lesson}>
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  {lesson}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="group flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/70 transition-colors duration-300">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">محتوى الدرس. يمكنك إضافة فيديو، نص، أو اختبارات هنا.</p>
                    <Button className="transform group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-5 h-5 ml-2" />
                      <span>مشاهدة</span>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
