
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// يمكنك تعديل هذه الأسئلة لاحقًا
const sampleQuiz = {
  questions: [
    {
      question: "ما هو الرمز الكيميائي للماء؟",
      options: ["H2O", "O2", "CO2", "NaCl"],
      correctAnswer: "H2O",
      explanation: "الماء يتكون من ذرتي هيدروجين وذرة أكسجين، لذا رمزه H2O.",
    },
    {
      question: "أي من هذه العناصر هو غاز نبيل؟",
      options: ["الأكسجين", "الهيليوم", "النيتروجين", "الكربون"],
      correctAnswer: "الهيليوم",
      explanation: "الهيليوم (He) هو أحد الغازات النبيلة في الجدول الدوري.",
    },
    {
      question: "ما هو الرقم الهيدروجيني (pH) للمحلول المحايد؟",
      options: ["0", "7", "14", "1"],
      correctAnswer: "7",
      explanation: "يعتبر الرقم الهيدروجيني 7 محايدًا، أقل من 7 حمضي، وأعلى من 7 قاعدي.",
    },
  ],
};


export default function QuizPage() {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic') || 'درس في الكيمياء';

    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerChange = (questionIndex: number, value: string) => {
        if (submitted) return;
        setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        sampleQuiz.questions.forEach((q, index) => {
        if (answers[index] === q.correctAnswer) {
            correctAnswers++;
        }
        });
        setScore(correctAnswers);
        setSubmitted(true);
    };

    const handleRetry = () => {
        setAnswers({});
        setScore(0);
        setSubmitted(false);
    }
    
    const allQuestionsAnswered = Object.keys(answers).length === sampleQuiz.questions.length;


    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-2 font-headline">
                اختبار قصير: {topic}
            </h1>
            <p className="text-center text-muted-foreground mb-8">
                اختبر معلوماتك في هذا الدرس.
            </p>

            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>الأسئلة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    {sampleQuiz.questions.map((q, index) => (
                        <div key={index} className={`p-4 rounded-lg ${submitted ? (answers[index] === q.correctAnswer ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30') : 'bg-secondary/30'}`}>
                            <p className="font-semibold mb-4 text-lg">{index + 1}. {q.question}</p>
                            <RadioGroup value={answers[index]} onValueChange={(value) => handleAnswerChange(index, value)} disabled={submitted}>
                                {q.options.map((option) => (
                                    <div key={option} className="flex items-center space-x-2 space-x-reverse">
                                        <RadioGroupItem value={option} id={`q${index}-${option}`} />
                                        <Label htmlFor={`q${index}-${option}`} className="text-base cursor-pointer">{option}</Label>
                                        {submitted && (
                                            <>
                                                {option === q.correctAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                                                {option !== q.correctAnswer && answers[index] === option && <XCircle className="w-5 h-5 text-red-600" />}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </RadioGroup>
                             {submitted && <p className="mt-3 text-sm text-muted-foreground italic">{q.explanation}</p>}
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                     {!submitted ? (
                        <Button size="lg" onClick={handleSubmit} disabled={!allQuestionsAnswered}>
                            <span>إرسال الإجابات</span>
                        </Button>
                    ) : (
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold">
                                نتيجتك: {score} من {sampleQuiz.questions.length}
                            </h2>
                            <Button size="lg" onClick={handleRetry} variant="outline">
                                <span>إعادة المحاولة</span>
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
