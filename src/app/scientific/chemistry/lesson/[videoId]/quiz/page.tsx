
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Loader } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic') || 'درس في الكيمياء';
    
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState<any>(null);

    useEffect(() => {
        // Here we will call the AI flow to generate the quiz.
        // For now, we'll simulate a delay and show a loading state.
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [topic]);


    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-2 font-headline">
                اختبار قصير: {topic}
            </h1>
            <p className="text-center text-muted-foreground mb-8">
                تم إعداد هذا الاختبار بواسطة الذكاء الاصطناعي.
            </p>

            {loading ? (
                <div className="flex flex-col items-center justify-center gap-4 py-20">
                    <Loader className="w-12 h-12 animate-spin text-primary" />
                    <p className="text-lg text-muted-foreground">جاري إعداد الاختبار...</p>
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl font-semibold">
                        الخطوة التالية هي برمجة الذكاء الاصطناعي لتوليد الأسئلة!
                    </p>
                </div>
            )}
        </div>
    );
}

