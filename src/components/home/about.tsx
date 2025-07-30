import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            من نحن
          </div>
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            تعلم بشغف، وحقق هدفك
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            سي اكاديمي هي منصة تعليمية رائدة عبر الإنترنت تساعد أي شخص على تعلم مهارات الأعمال والبرمجيات والتكنولوجيا والمهارات الإبداعية لتحقيق الأهداف الشخصية والمهنية. من خلال الاشتراكات الفردية والشركات والأكاديمية والحكومية، يتمتع الأعضاء بإمكانية الوصول إلى دوراتنا الجذابة عالية الجودة التي يدرسها خبراء معترف بهم في هذا المجال.
          </p>
        </div>
        <div className="flex justify-center">
            <Image
                src="https://placehold.co/600x400.png"
                width={600}
                height={400}
                alt="About SyAcademy"
                className="rounded-xl shadow-2xl"
                data-ai-hint="team collaboration"
            />
        </div>
      </div>
    </section>
  )
}
