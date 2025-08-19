
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, FileQuestion, ShoppingCart, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export default function HistoryPage() {
  const { user, loading } = useAuth();

  const units = Array.from({ length: 5 }, (_, i) => ({
    name: `الوحدة ${i + 1}`,
    lessons: Array.from({ length: 4 }, (_, j) => ({
      name: `الدرس ${j + 1}`,
      videoId: 'x7NM62xfOGM',
    })),
  }));

  const hasPurchased = false;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-headline">
        التاريخ
      </h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>قائمة الوحدات</CardTitle>
        </CardHeader>
        <CardContent>
          {!hasPurchased && (
            <Card className="mb-6 bg-primary/10 border-primary/20">
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center gap-4">
                <h3 className="text-xl font-semibold">
                  احصل على وصول كامل لهذه المادة
                </h3>
                <p className="text-muted-foreground">
                  افتح جميع الدروس والاختبارات لهذه المادة مقابل دفعة لمرة واحدة.
                </p>
                {!loading && user ? (
                  <Link href={`/checkout?course=history&price=100&name=${encodeURIComponent('التاريخ')}`}>
                    <Button size="lg">
                      <ShoppingCart className="ml-2 h-5 w-5" />
                      شراء المادة مقابل 1 دولار
                    </Button>
                  </Link>
                ) : !loading && !user && (
                   <div className="text-center space-y-4">
                        <p className="text-muted-foreground">
                            يرجى تسجيل الدخول أولاً لتتمكن من الشراء.
                        </p>
                        <Link href="/auth/signin">
                            <Button size="lg">
                                <LogIn className="ml-2 h-5 w-5" />
                                تسجيل الدخول
                            </Button>
                        </Link>
                    </div>
                )}
              </CardContent>
            </Card>
          )}

          <Accordion type="single" collapsible className="w-full" disabled={!hasPurchased}>
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
                           <Link href={`#`}>
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
