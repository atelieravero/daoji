import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css';

export const metadata = {
  title: 'Daoji CMS',
  description: 'Professional Bulletin Board & Calendar System',
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}