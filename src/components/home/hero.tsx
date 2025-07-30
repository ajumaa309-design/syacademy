'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Atom, BookOpen } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-blue-500 to-accent animate-[gradient-animation_8s_ease_infinite]" 
        style={{backgroundSize: '200% 200%'}}
      />
      
      <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            تعلم. انمو. انجح.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            اختر مسارك مع سي اكاديمي وأطلق العنان لإمكانياتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/scientific">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-64 h-16 text-xl rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                <Atom className="w-7 h-7 ml-3" />
                المسار العلمي
              </Button>
            </Link>
            <Link href="/literary">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary w-64 h-16 text-xl rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                <BookOpen className="w-7 h-7 ml-3" />
                المسار الأدبي
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
