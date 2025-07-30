
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-headline">
        التاريخ
      </h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>قائمة الدروس</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            سيتم إضافة الدروس قريباً.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
