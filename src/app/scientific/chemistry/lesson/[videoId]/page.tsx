
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LessonPage({ params }: { params: { videoId: string } }) {
  const { videoId } = params;
  const { toast } = useToast();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'ما هو المفهوم الرئيسي الذي تم شرحه في الفيديو؟',
      options: ['الروابط التساهمية', 'الروابط الأيونية', 'التفاعلات النووية', 'الأحماض والقواعد'],
      correctAnswer: 'الروابط التساهمية',
    },
    {
      id: 2,
      question: 'أي من التالية ليس مثالاً على رابطة تساهمية؟',
      options: ['H2O', 'NaCl', 'CH4', 'O2'],
      correctAnswer: 'NaCl',
    },
     {
      id: 3,
      question: 'ماذا يحدث للإلكترونات في الرابطة التساهمية؟',
      options: ['يتم فقدها', 'يتم اكتسابها', 'تتم مشاركتها', 'لا تشارك في التفاعل'],
      correctAnswer: 'تتم مشاركتها',
    },
  ];

  const handleAnswerChange = (questionId: number, value: string) => {
    setSelectedAnswers(prev => ({...prev, [questionId]: value}));
  }

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    questions.forEach(q => {
        if(selectedAnswers[q.id] === q.correctAnswer) {
            score++;
        }
    })
    toast({
        title: "تم تسليم الإجابات",
        description: `لقد حصلت على ${score} من ${questions.length}`,
    })
  }

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
                <CardTitle>أسئلة على الدرس</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                {questions.map((q) => (
                    <div key={q.id}>
                        <p className="font-semibold mb-4">{q.id}. {q.question}</p>
                        <RadioGroup 
                            onValueChange={(value) => handleAnswerChange(q.id, value)} 
                            className="space-y-2"
                            disabled={submitted}
                        >
                            {q.options.map(option => (
                                <div key={option} className="flex items-center space-x-2 space-x-reverse">
                                    <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                                    <Label 
                                        htmlFor={`${q.id}-${option}`} 
                                        className={`flex-1 ${submitted ? (option === q.correctAnswer ? 'text-green-600' : (selectedAnswers[q.id] === option ? 'text-red-600' : '')) : ''}`}
                                    >
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                ))}

                <Button onClick={handleSubmit} disabled={submitted} className="w-full mt-8">
                    {submitted ? 'تم التسليم' : 'تسليم الإجابات'}
                </Button>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
