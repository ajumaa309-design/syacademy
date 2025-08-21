
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

export default function PhysicsPage() {
  const units = Array.from({ length: 5 }, (_, i) => ({
    name: `الوحدة ${i + 1}`,
    lessons: Array.from({ length: 4 }, (_, j) => ({
      name: `الدرس ${j + 1}`,
      videoId: '-u9cibldYN4',
    })),
  }));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-headline">
        مادة الفيزياء
      </h1>
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>قائمة الوحدات</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {units.map((unit, index) => (
              <AccordionItem value={`item-${index}`} key={unit.name}>
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  {unit.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 p-2">
                    {unit.lessons.map((lesson) => (
                      <div
                        key={lesson.name}
                        className="group flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/70 transition-colors duration-300"
                      >
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {lesson.name}: محتوى الدرس. يمكنك إضافة فيديو، نص، أو
                          اختبارات هنا.
                        </p>
                        {lesson.videoId ? (
                            <Link href={`/scientific/chemistry/lesson/${lesson.videoId}`}>
                              <Button asChild>
                                <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary/90 cursor-pointer transform group-hover:scale-110 transition-transform duration-300">
                                  <PlayCircle className="w-5 h-5" />
                                  <span>مشاهدة</span>
                                </div>
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              disabled
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary/50 cursor-not-allowed transform group-hover:scale-110 transition-transform duration-300"
                            >
                              <PlayCircle className="w-5 h-5" />
                              <span>قريباً</span>
                            </Button>
                          )}
                      </div>
                    ))}
                    <div
                      className="flex items-center justify-between p-4 bg-accent/20 rounded-lg mt-4"
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
