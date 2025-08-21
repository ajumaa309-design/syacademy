
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function ChemistryPage() {

  const units = [
    ...Array.from({ length: 5 }, (_, i) => ({
      name: `الوحدة ${i + 1}`,
      lessons: Array.from({ length: 4 }, (_, j) => ({
        name: `الدرس ${j + 1}`,
        videoId: '-u9cibldYN4',
      })),
    })),
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
                        <div
                          key={lesson.name}
                          className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                        >
                          <p>
                            {lesson.name}: محتوى الدرس. يمكنك إضافة فيديو، نص، أو
                            اختبارات هنا.
                          </p>
                          {lesson.videoId ? (
                            <Link href={`/scientific/chemistry/lesson/${lesson.videoId}`}>
                              <Button asChild>
                                <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary/90 cursor-pointer">
                                  <PlayCircle className="w-5 h-5" />
                                  <span>مشاهدة</span>
                                </div>
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              disabled
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary/50 cursor-not-allowed"
                            >
                              <PlayCircle className="w-5 h-5" />
                              <span>قريباً</span>
                            </Button>
                          )}
                        </div>
                      ))}
                       <div
                          className="flex items-center justify-between p-3 bg-accent/20 rounded-lg mt-4"
                        >
                          <p className="font-semibold">
                            هل أنت مستعد لاختبار معلوماتك في كامل الوحدة؟
                          </p>
                           <Link href={`/scientific/chemistry/lesson/-u9cibldYN4/quiz?topic=${encodeURIComponent(unit.name)}`}>
                              <Button variant="outline" asChild>
                                <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md cursor-pointer">
                                  <FileQuestion className="w-5 h-5" />
                                  <span>أسئلة الوحدة</span>
                                </div>
                              </Button>
                            </Link>
                        </div>
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
