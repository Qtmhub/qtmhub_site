'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import  Button  from '@/components/ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#001428] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" suppressHydrationWarning>
          <div className="relative w-10 h-10">
            <Image
              src="/images/qtmhub-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-white hover:bg-[#002A3A] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-gray-300 transition-colors" suppressHydrationWarning>
            Home
          </Link>
          <Link href="#services" className="font-medium hover:text-gray-300 transition-colors" suppressHydrationWarning>
            Services
          </Link>
          <Link href="#about" className="font-medium hover:text-gray-300 transition-colors" suppressHydrationWarning>
            About
          </Link>
          {/* <Link href="/partners" className="font-medium hover:text-gray-300 transition-colors" suppressHydrationWarning>
            Partners
          </Link> */}
          <Link href="#contact">
          <Button className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-6">
            Contact
          </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile navigation - Full screen overlay */}
      {isMenuOpen && (
       <div className="md:hidden fixed inset-0 bg-[#001428] z-50 pt-6 px-4">
          <div className="container mx-auto px-4">
            {/* Close icon inside mobile menu */}
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="p-2 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

           
           
            <nav className="flex flex-col space-y-6">
              <Link href="/" className="text-xl font-medium hover:text-gray-300 transition-colors py-2 border-b border-gray-800" onClick={toggleMenu} suppressHydrationWarning>
                Home
              </Link>
              <Link href="#services" className="text-xl font-medium hover:text-gray-300 transition-colors py-2 border-b border-gray-800" onClick={toggleMenu} suppressHydrationWarning>
                Services
              </Link>
              <Link href="/" className="text-xl font-medium hover:text-gray-300 transition-colors py-2 border-b border-gray-800" onClick={toggleMenu} suppressHydrationWarning>
                About
              </Link>
              {/* <Link href="/partners" className="text-xl font-medium hover:text-gray-300 transition-colors py-2 border-b border-gray-800" onClick={toggleMenu} suppressHydrationWarning>
                Partners
              </Link> */}
              <Link href="#contact">
              <Button className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-6 py-4 w-full mt-4" onClick={toggleMenu}>
                Contact
              </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
