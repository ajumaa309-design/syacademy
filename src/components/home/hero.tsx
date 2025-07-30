'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Atom, Pen, Star } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[600px] flex items-center justify-center text-center overflow-hidden py-20 bg-white">
       <div className="absolute inset-0 z-0 opacity-10">
        <Star className="absolute top-[10%] left-[10%] w-12 h-12 text-primary animate-pulse" />
        <BookOpen className="absolute top-[20%] right-[15%] w-16 h-16 text-accent animate-pulse delay-500" />
        <Atom className="absolute bottom-[15%] left-[20%] w-14 h-14 text-primary/70 animate-pulse delay-1000" />
        <Pen className="absolute bottom-[25%] right-[5%] w-12 h-12 text-accent/80 animate-pulse delay-1500" />
         <Star className="absolute top-[50%] left-[45%] w-8 h-8 text-primary/50 animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            استكشف المعرفة. نمّي مستقبلك.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            انضم إلى سي اكاديمي وابدأ رحلتك التعليمية في المسارات العلمية والأدبية المصممة لنجاحك.
          </p>
          <div className="mt-6">
             <Link href="#courses">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 w-64 h-16 text-xl rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                ابدأ التعلم الآن
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
