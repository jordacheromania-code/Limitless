/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, Heart, MessageSquare, BookOpen, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Acasă', href: '#home' },
    { name: 'Servicii', href: '#services' },
    { name: 'Tarife', href: '#pricing' },
    { name: 'Despre Noi', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-sage-500 rounded-full flex items-center justify-center text-white">
              <Heart size={24} />
            </div>
            <span className="text-2xl font-serif font-semibold tracking-tight text-sage-900 underline decoration-sage-300 underline-offset-4">
              Limitless-Therapy
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sage-600 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-sage-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-700 transition-colors flex items-center gap-2 shadow-lg shadow-sage-200"
            >
              <Phone size={16} />
              Programează-te
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-sage-600 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream-50 border-b border-sage-100 px-4 py-8 flex flex-col gap-6 items-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-serif font-medium text-slate-800 hover:text-sage-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center bg-sage-600 text-white px-6 py-3 rounded-xl text-lg font-semibold"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
}
