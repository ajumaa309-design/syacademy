
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentCanceledPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
      <Card className="max-w-md w-full text-center">
        <CardHeader className="items-center">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full w-fit">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <CardTitle className="text-3xl mt-4">تم إلغاء الدفع</CardTitle>
          <CardDescription>
            يبدو أنه تم إلغاء عملية الدفع أو حدث خطأ ما.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            لم يتم تحصيل أي مبلغ منك. يمكنك المحاولة مرة أخرى في أي وقت.
          </p>
          <Link href="/scientific/chemistry">
            <Button size="lg" variant="outline">
                العودة إلى المادة
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
