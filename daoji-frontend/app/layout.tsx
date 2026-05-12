"use client";

import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

// Consolidated Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Bulletin", href: "/" },
    { name: "Calendar", href: "/calendar" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold tracking-tight text-gray-900">
              Daoji <span className="text-blue-600">CMS</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">EN</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EN</button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">繁體</button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">简体</button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            
            <div className="border-t border-gray-200 mt-2 pt-2 px-3">
              <div className="flex space-x-4 text-sm font-medium text-gray-600">
                <button className="hover:text-blue-600 underline">EN</button>
                <button className="hover:text-blue-600">繁體</button>
                <button className="hover:text-blue-600">简体</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Consolidated Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Daoji <span className="text-blue-600">CMS</span>
            </span>
            <p className="text-sm text-gray-500 mt-1">
              Professional Bulletin Board & Calendar System
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="/about" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
          &copy; {currentYear} Daoji CMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Main Layout Export
export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children || (
          <div className="text-center py-20 text-gray-500 border-2 border-dashed border-gray-200 rounded-xl">
            <p>Your layout shell is ready. Page content will be rendered here.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}