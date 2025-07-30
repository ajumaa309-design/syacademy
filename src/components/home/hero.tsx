'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Atom, Pen, Star } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[600px] flex items-center justify-center text-center overflow-hidden py-20 bg-white">
      {isClient && (
        <div className="absolute inset-0 z-0 opacity-10">
          <Star style={{ position: 'absolute', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, animationDelay: `${Math.random() * 2}s` }} className="w-12 h-12 text-primary animate-pulse" />
          <BookOpen style={{ position: 'absolute', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, animationDelay: `${Math.random() * 2}s` }} className="w-16 h-16 text-accent animate-pulse" />
          <Atom style={{ position: 'absolute', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, animationDelay: `${Math.random() * 2}s` }} className="w-14 h-14 text-primary/70 animate-pulse" />
          <Pen style={{ position: 'absolute', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, animationDelay: `${Math.random() * 2}s` }} className="w-12 h-12 text-accent/80 animate-pulse" />
          <Star style={{ position: 'absolute', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, animationDelay: `${Math.random() * 2}s` }} className="w-8 h-8 text-primary/50 animate-pulse" />
        </div>
      )}

      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
          <Image src="https://i.postimg.cc/8kvf6rQv/logo-syacademy.png" alt="SyAcademy Logo" width={120} height={120} className="mb-4" />
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
