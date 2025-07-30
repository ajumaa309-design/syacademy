
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Atom, BookOpen } from 'lucide-react';

export function CoursePaths() {
  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
                اختر مسارك التعليمي
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                سواء كنت من محبي العلوم أو شغوفًا بالأدب، لدينا المسار المناسب لك.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/scientific">
                <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-[#0065F8] to-[#00CAFF] hover:scale-105 transition-transform duration-300 h-full">
                <Card className="text-center bg-background h-full rounded-xl">
                    <CardHeader className="pt-10">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                        <Atom className="w-12 h-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-3xl font-semibold">المسار العلمي</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-10">
                    <p className="text-muted-foreground">
                        للعلوم والرياضيات والتكنولوجيا
                    </p>
                    </CardContent>
                </Card>
                </div>
            </Link>
            <Link href="/literary">
                <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-[#4300FF] to-[#00FFDE] hover:scale-105 transition-transform duration-300 h-full">
                    <Card className="text-center bg-background h-full rounded-xl">
                        <CardHeader className="pt-10">
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <BookOpen className="w-12 h-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <CardTitle className="text-3xl font-semibold">المسار الأدبي</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-10">
                        <p className="text-muted-foreground">
                            للغات والآداب والعلوم الإنسانية
                        </p>
                        </CardContent>
                    </Card>
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
