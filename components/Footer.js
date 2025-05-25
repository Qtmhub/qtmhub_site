"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-2">
                <Image
                  src="/images/qtmhub-logo.png"
                  alt="Quantum Hub Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-gray-700" />
                <span className="text-gray-700">Abuja, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-700" />
                <span className="text-gray-700">(234) 000-0000</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-700" />
                <span className="text-gray-700">admin@qtmhub.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 md:hidden">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="#services" className="block text-gray-700 hover:text-gray-900">
                Services
              </Link>
              <Link href="#about" className="block text-gray-700 hover:text-gray-900">
                About
              </Link>
              {/* <Link href="/partners" className="block text-gray-700 hover:text-gray-900">
                Partners
              </Link> */}
              <Link href="#contact" className="block text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 md:hidden">Connect</h3>
            <nav className="space-y-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Quantum Hub. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-[#00E676] hover:bg-[#00C853] text-black rounded-full p-3 shadow-md transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
