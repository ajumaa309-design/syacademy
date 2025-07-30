import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Atom, BookOpen, ArrowRight } from 'lucide-react';

export function CourseTracks() {
  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Path
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We offer two distinct tracks to cater to your interests and career goals.
            Explore what each has to offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/elme" className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-br from-[hsl(var(--gradient-blue-start))] to-[hsl(var(--gradient-blue-end))]">
                <CardContent className="p-8 bg-background rounded-b-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-blue-start))] to-[hsl(var(--gradient-blue-end))]">
                      <Atom className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-br from-[hsl(var(--gradient-blue-start))] to-[hsl(var(--gradient-blue-end))]">
                      Elme
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Dive into the world of science and technology. Explore courses in programming, data science, engineering, and more.
                  </p>
                  <div className="flex items-center font-semibold text-primary">
                    Explore Scientific Courses
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>

          <Link href="#" className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-br from-[hsl(var(--gradient-purple-start))] to-[hsl(var(--gradient-purple-end))]">
                <CardContent className="p-8 bg-background rounded-b-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-purple-start))] to-[hsl(var(--gradient-purple-end))]">
                      <BookOpen className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-br from-[hsl(var(--gradient-purple-start))] to-[hsl(var(--gradient-purple-end))]">
                      Adabe
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Unleash your creativity and critical thinking with our humanities courses. Study literature, history, philosophy, and arts.
                  </p>
                  <div className="flex items-center font-semibold text-primary">
                    Discover Humanities
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
