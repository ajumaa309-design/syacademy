
'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// Make sure to add your publishable key to environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const { user } = useAuth();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const courseName = searchParams.get('name') || 'مادة تعليمية';
    const price = parseInt(searchParams.get('price') || '100', 10); // Price in cents
    const courseId = searchParams.get('course') || 'default_course';

    const handleCheckout = async () => {
        setLoading(true);
        if (!user) {
            toast({
                variant: 'destructive',
                title: 'يجب عليك تسجيل الدخول',
                description: 'يرجى تسجيل الدخول أولاً لإتمام عملية الشراء.',
            });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/checkout-session', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceInCents: price,
                    courseName: courseName,
                    courseId: courseId,
                    userId: user.uid,
                    userEmail: user.email,
                }),
            });

            if (!response.ok) {
                 throw new Error('Failed to create checkout session');
            }

            const { sessionId } = await response.json();
            const stripe = await stripePromise;

            if (!stripe) {
                throw new Error('Stripe.js has not loaded yet.');
            }

            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (error) {
                toast({
                    variant: 'destructive',
                    title: 'حدث خطأ',
                    description: error.message || 'فشل في توجيهك إلى صفحة الدفع.',
                });
            }
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'حدث خطأ ما',
                description: 'لم نتمكن من بدء عملية الدفع. يرجى المحاولة مرة أخرى.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
             <div className="absolute top-8 left-8">
                <Link href="/scientific/chemistry" className="flex items-center gap-2 text-primary hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    <span>العودة</span>
                </Link>
            </div>
            <Card className="max-w-md w-full">
                <CardHeader>
                    <CardTitle className="text-2xl">إتمام عملية الشراء</CardTitle>
                    <CardDescription>
                        أنت على وشك شراء مادة: <span className="font-bold">{courseName}</span>.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-between items-center text-lg font-semibold border-t border-b py-4">
                        <span>السعر الإجمالي</span>
                        <span>${(price / 100).toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        سيتم توجيهك إلى صفحة دفع آمنة عبر Stripe لإكمال العملية.
                    </p>
                    <Button onClick={handleCheckout} className="w-full" size="lg" disabled={loading}>
                        {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                        الدفع الآن
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
