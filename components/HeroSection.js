'use client';

import  Button  from '@/components/ui/Button';
import Link from 'next/link'; 

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 20, 40, 0.7), rgba(0, 60, 100, 0.7)), url('/images/hero-img.png')`,
      }}
    >
      <div className="container mx-auto max-w-3xl text-center text-white z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Empowering Africa&apos;s Healthcare Future
        </h1>
        <p className="text-lg md:text-xl mb-8 mx-auto max-w-2xl">
          Bridging gaps in health equity with secure, data-driven solutions and ethical financing models designed for
          Africa.
        </p>
        <Link href="#contact">
        <Button className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-8 py-4 text-lg">
          Work with us
        </Button>
        </Link>
      </div>
    </section>
  );
}
