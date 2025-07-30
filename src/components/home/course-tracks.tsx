import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Atom, BookOpen, ArrowLeft } from 'lucide-react';

export function CourseTracks() {
  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            اختر مسارك
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            نقدم مسارين مختلفين لتلبية اهتماماتك وأهدافك المهنية. استكشف ما يقدمه كل مسار.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/scientific" className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-br from-[hsl(var(--gradient-blue-start))] to-[hsl(var(--gradient-blue-end))]">
                <CardContent className="p-8 bg-background rounded-b-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-blue-start))] to-[hsl(var(--gradient-blue-end))]">
                      <Atom className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-br from-[hsl(var(--gradient-blue-start))] to-[hsl(var(--gradient-blue-end))]">
                      العلمي
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    انغمس في عالم العلوم والتكنولوجيا. استكشف دورات في البرمجة وعلوم البيانات والهندسة والمزيد.
                  </p>
                  <div className="flex items-center font-semibold text-primary">
                    استكشف المسار العلمي
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>

          <Link href="/literary" className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-br from-[hsl(var(--gradient-purple-start))] to-[hsl(var(--gradient-purple-end))]">
                <CardContent className="p-8 bg-background rounded-b-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-purple-start))] to-[hsl(var(--gradient-purple-end))]">
                      <BookOpen className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-br from-[hsl(var(--gradient-purple-start))] to-[hsl(var(--gradient-purple-end))]">
                      الأدبي
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    أطلق العنان لإبداعك وتفكيرك النقدي من خلال دوراتنا في العلوم الإنسانية. ادرس الأدب والتاريخ والفلسفة والفنون.
                  </p>
                  <div className="flex items-center font-semibold text-primary">
                    اكتشف المسار الأدبي
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
