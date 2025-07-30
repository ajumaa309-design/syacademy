'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bubbles = isMounted ? Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 4 + 1; // 1rem to 5rem
    const style = {
      width: `${size}rem`,
      height: `${size}rem`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 15 + 10}s`, // 10s to 25s
      animationDelay: `${Math.random() * 5}s`,
    };
    return (
      <div
        key={i}
        className="absolute bottom-[-10rem] bg-white/10 rounded-full animate-float"
        style={style}
      />
    );
  }) : [];

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-accent" />
      
      <div className="absolute inset-0 z-10 bubbles">
        {bubbles}
      </div>
      
      <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
          <Image src="https://i.postimg.cc/8kvf6rQv/logo-syacademy.png" alt="SyAcademy Logo" width={100} height={100} className="mb-4" />
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            أهلاً بكم في سي اكاديمي
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            تجربة تعليمية عصرية، تفاعلية وسهلة الاستخدام، مصممة لجذب الطلاب وتسهيل التصفح.
          </p>
          <div>
            <Link href="#courses">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                ابدأ التعلم
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
