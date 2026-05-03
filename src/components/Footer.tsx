/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-50 pt-20 pb-10 border-t border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 px-4">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center text-white">
                <Heart size={18} />
              </div>
              <span className="text-xl font-serif font-semibold tracking-tight text-sage-900 underline decoration-sage-300 underline-offset-4">
                Limitless-Therapy
              </span>
            </div>
            <p className="text-slate-500 font-light italic leading-relaxed">
              Cabinet modern dedicat sănătății mentale și echilibrului emoțional. Oferim suport profesionist pentru adulți și copii.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 mb-6">Link-uri Rapide</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-sage-600 transition-colors italic font-light">
                    {item === 'Home' ? 'Acasă' : item === 'Services' ? 'Servicii' : item === 'About' ? 'Despre' : 'Contact'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><button className="text-slate-500 hover:text-sage-600 transition-colors italic font-light">Termeni și Condiții</button></li>
              <li><button className="text-slate-500 hover:text-sage-600 transition-colors italic font-light">Politică Confidențialitate</button></li>
              <li><button className="text-slate-500 hover:text-sage-600 transition-colors italic font-light">GDPR</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 font-light italic text-sm">
              <li>B-dul Unirii 57, bl. E4, sc. 1</li>
              <li>0744 184 423</li>
              <li>0721 559 458</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-300 px-4">
          <p>© {currentYear} LIMITLESS-THERAPY. TOATE DREPTURILE REZERVATE.</p>
          <p>DESIGN MODERN PENTRU SĂNĂTATE MENTALĂ</p>
        </div>
      </div>
    </footer>
  );
}
