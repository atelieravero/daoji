import React from "react";

export default function Footer() {
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