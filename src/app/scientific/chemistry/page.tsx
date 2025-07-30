
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function ChemistryPage() {
  const units = Array.from({ length: 5 }, (_, i) => `الوحدة ${i + 1}`);

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
              <AccordionItem value={`item-${index}`} key={unit}>
                <AccordionTrigger className="text-lg font-semibold">
                  {unit}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <p>محتوى الوحدة. يمكنك إضافة فيديو، نص، أو اختبارات هنا.</p>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary/90">
                      <PlayCircle className="w-5 h-5" />
                      <span>مشاهدة</span>
                    </button>
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
