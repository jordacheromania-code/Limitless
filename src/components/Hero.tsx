/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-sage-500">
          <circle cx="80" cy="20" r="40" />
          <circle cx="100" cy="80" r="30" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} className="text-sage-600" />
              Cabinet de Psihoterapie & Logopedie
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-light leading-tight text-slate-900 mb-6 italic">
              Echilibru <span className="text-sage-600 font-normal not-italic">fără limite</span> pentru mintea și vocea ta.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-light">
              La Limitless-Therapy, oferim un spațiu sigur și modern pentru vindecare, dezvoltare și îmbunătățirea comunicării. Redescoperă potențialul tău infinit prin terapie specializată.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-700 transition-all shadow-xl shadow-sage-200"
              >
                Programează o ședință
                <ArrowRight size={20} />
              </motion.a>
              
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium border border-sage-200 text-slate-700 hover:bg-cream-100 transition-colors"
              >
                Vezi serviciile noastre
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="text-sm">
                <span className="font-bold text-sage-900 block tracking-tight text-lg">500+ de pacienți</span>
                <span className="text-slate-500 font-light italic">au regăsit liniștea și echilibrul alături de noi</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] bg-sage-100/50 border border-sage-200/50 flex items-center justify-center relative overflow-hidden">
                {/* Minimalist Abstract Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 100 Q 250 50 500 100 T 1000 100" stroke="currentColor" strokeWidth="1" className="text-sage-400" />
                        <path d="M0 150 Q 250 100 500 150 T 1000 150" stroke="currentColor" strokeWidth="1" className="text-sage-300" />
                        <path d="M0 200 Q 250 150 500 200 T 1000 200" stroke="currentColor" strokeWidth="1" className="text-sage-200" />
                    </svg>
                </div>
                <div className="relative z-10 text-center p-12">
                     <div className="w-20 h-20 bg-sage-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-xl shadow-sage-200">
                        <Sparkles size={32} />
                     </div>
                     <h3 className="text-3xl font-serif text-sage-900 mb-2 italic">Limitless-Therapy</h3>
                     <p className="text-sage-600 font-light tracking-[0.2em] uppercase text-[10px]">Evoluție prin Echilibru</p>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cream-500/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
            <div className="absolute -top-10 -right-6 h-64 w-64 bg-sage-400/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
