
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BrainCircuit } from 'lucide-react';

export default function LessonPage({ params }: { params: { videoId: string } }) {
  const { videoId } = params;
  
  // A simple mapping from videoId to a topic.
  // In a real app, this would likely come from a database.
  const videoTopicMapping: Record<string, string> = {
    'hnK-frJO1X8': 'الروابط التساهمية في الكيمياء',
    'x7NM62xfOGM': 'درس عام'
  };
  const topic = videoTopicMapping[videoId] || 'درس الكيمياء';


  return (
    <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
            <Link href="/scientific/chemistry" className="flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-5 h-5" />
                <span>العودة إلى قائمة الدروس</span>
            </Link>
        </div>
      <h1 className="text-3xl font-bold text-center mb-8 font-headline">
        مشاهدة الدرس
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video mb-12">
            <iframe
            className="w-full h-full rounded-lg shadow-2xl"
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>اختبر فهمك</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-center">
                <p className="text-muted-foreground">
                    هل أنت مستعد لاختبار معلوماتك؟ سيقوم مساعدنا الذكي بإعداد اختبار قصير لك بناءً على محتوى هذا الدرس.
                </p>
                
                <Link href={`/scientific/chemistry/lesson/${videoId}/quiz?topic=${encodeURIComponent(topic)}`}>
                    <Button size="lg">
                        <BrainCircuit className="w-5 h-5 ml-2" />
                        <span>اختبر فهمك بالذكاء الاصطناعي</span>
                    </Button>
                </Link>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
