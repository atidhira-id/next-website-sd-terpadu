"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLinks } from "@/app/utils/Data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-blue-700 text-white px-4 lg:px-6">
        <div className=" h-20 flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            SD Terpadu Muhammadiyah 1 Besuki
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            {MainLinks.map((link, _) => (
              <Link
                key={_}
                href={link.href}
                className="hover:text-yellow-300 transition"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded hover:bg-blue-700"
          >
            ☰
          </button>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* SideNav */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-20 flex justify-between items-center p-4 border-b">
            <span className="font-semibold text-blue-600">Menu</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="flex flex-col p-4 space-y-4 font-medium">
            {MainLinks.map((link, _) => (
              <Link
                key={_}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
