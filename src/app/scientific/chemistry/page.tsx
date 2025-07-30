
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function ChemistryPage() {
  const units = [
    {
      name: 'الوحدة 1',
      lessons: Array.from({ length: 5 }, (_, i) => `الدرس ${i + 1}`),
    },
    {
      name: 'الوحدة 2',
      lessons: [],
    },
    {
      name: 'الوحدة 3',
      lessons: [],
    },
    {
      name: 'الوحدة 4',
      lessons: [],
    },
    {
      name: 'الوحدة 5',
      lessons: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-headline">
        مادة الكيمياء
      </h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>قائمة الوحدات</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {units.map((unit, index) => (
              <AccordionItem value={`item-${index}`} key={unit.name}>
                <AccordionTrigger className="text-lg font-semibold">
                  {unit.name}
                </AccordionTrigger>
                <AccordionContent>
                  {unit.lessons.length > 0 ? (
                    <div className="space-y-2 p-2">
                      {unit.lessons.map((lesson) => (
                        <div key={lesson} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <p>{lesson}: محتوى الدرس. يمكنك إضافة فيديو، نص، أو اختبارات هنا.</p>
                          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary/90">
                            <PlayCircle className="w-5 h-5" />
                            <span>مشاهدة</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="p-4 text-muted-foreground">
                      سيتم إضافة الدروس قريباً.
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
