'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';

export default function ChemistryPage() {
  const units = [
    {
      name: 'الوحدة 1',
      lessons: [
        { name: 'الدرس 1', videoId: 'hnK-frJO1X8' },
        { name: 'الدرس 2', videoId: null },
        { name: 'الدرس 3', videoId: null },
        { name: 'الدرس 4', videoId: null },
        { name: 'الدرس 5', videoId: null },
      ],
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
                        <div
                          key={lesson.name}
                          className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                        >
                          <p>
                            {lesson.name}: محتوى الدرس. يمكنك إضافة فيديو، نص، أو
                            اختبارات هنا.
                          </p>
                          {lesson.videoId ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary/90">
                                  <PlayCircle className="w-5 h-5" />
                                  <span>مشاهدة</span>
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle>{lesson.name}</DialogTitle>
                                </DialogHeader>
                                <div className="aspect-video">
                                  <iframe
                                    className="w-full h-full rounded-lg"
                                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </DialogContent>
                            </Dialog>
                          ) : (
                            <button
                              disabled
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-primary/50 cursor-not-allowed"
                            >
                              <PlayCircle className="w-5 h-5" />
                              <span>قريباً</span>
                            </button>
                          )}
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
