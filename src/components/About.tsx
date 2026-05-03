/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Heart, UserPlus, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Ani de experiență', value: '12+', icon: <Clock /> },
    { label: 'Pacienți fericiți', value: '500+', icon: <UserPlus /> },
    { label: 'Tehnici moderne', value: '15+', icon: <ShieldCheck /> },
    { label: 'Echipa devotată', value: '100%', icon: <Heart /> },
  ];

  return (
    <section id="about" className="py-24 bg-sage-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-12 border border-sage-100 shadow-xl relative overflow-hidden">
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-sage-200/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cream-200/20 rounded-full blur-3xl"></div>
               
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-sage-50 rounded-3xl flex items-center justify-center text-sage-600 mb-8 border border-sage-100 shadow-inner">
                    <Heart size={48} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-serif text-sage-900 mb-4 italic">Spațiu de Încredere</h3>
                  <p className="text-slate-500 font-light italic leading-relaxed max-w-sm">
                    Cabinetul nostru este conceput pentru a oferi o atmosferă de calm și siguranță, facilitând procesul terapeutic.
                  </p>
               </div>
            </div>
            
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-sage-600 p-8 rounded-full border-8 border-sage-50 shadow-2xl flex flex-col items-center justify-center w-48 h-48 z-20">
              <span className="text-5xl font-serif font-bold text-white">10+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sage-100 text-center leading-tight">Specialiști<br/>Certificați</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-sage-500 mb-4 block">
              Despre Noi
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif text-slate-900 mb-8 italic">
              Credem în puterea <span className="text-sage-600 font-normal not-italic underline decoration-sage-200 underline-offset-8">schimbării</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-6 italic">
              Limitless-Therapy nu a apărut dintr-un plan de afaceri, ci dintr-o prietenie și o viziune comună a fondatoarelor noastre, <span className="text-sage-700 font-medium italic">Cristina Iordache</span> și <span className="text-sage-700 font-medium italic">Ramona Dumitru</span>.
            </p>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-8 italic">
              După ani de lucru în cabinete individuale, am înțeles că mintea și vocea sunt într-un dialog permanent. Cristina, cu abordarea sa empatică în psihoterapie, și Ramona, cu dedicarea pentru arta comunicării prin logopedie, și-au dorit să creeze un loc unde limitele tratamentelor rigide dispar.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sage-500">{stat.icon}</span>
                    <span className="text-2xl font-serif font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <p className="text-slate-500 font-light italic leading-relaxed border-l-2 border-sage-200 pl-6 py-2">
              Am creat un spațiu unde ești ascultat nu doar pentru ceea ce spui, ci și pentru ceea ce simți, oferind un parcurs complet de la gând la cuvânt. Ne dorim ca fiecare persoană care ne trece pragul să redescopere propriul potențial, fără limite.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
