
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  // In a real app, you would verify the session_id query parameter
  // with your backend to confirm the payment and update user's access rights.

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
      <Card className="max-w-md w-full text-center">
        <CardHeader className="items-center">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-fit">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <CardTitle className="text-3xl mt-4">تم الدفع بنجاح!</CardTitle>
          <CardDescription>
            شكرًا لك على شرائك. يمكنك الآن الوصول إلى محتوى المادة.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            ستتمكن الآن من رؤية جميع الدروس والاختبارات لهذه المادة.
          </p>
          <Link href="/scientific/chemistry">
            <Button size="lg">العودة إلى المادة</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
