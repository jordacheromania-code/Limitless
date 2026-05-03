/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, Brain, Target, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Psihoterapie Individuală',
    description: 'Dezvoltare personală, anxietate, depresie și gestionarea stresului într-un cadru confidențial.',
    icon: <MessageCircle className="w-8 h-8" />,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  },
  {
    title: 'Logopedie Copii & Adulți',
    description: 'Terapie pentru tulburări de limbaj, pronunție și comunicare, adaptată vârstei pacienților.',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-sage-50 text-sage-600 border-sage-100'
  },
  {
    title: 'Terapie de Cuplu',
    description: 'Restabilirea comunicării și reconectarea emoțională între parteneri într-un mod constructiv.',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-cream-100 text-cream-700 border-cream-200'
  },
  {
    title: 'Dezvoltare Cognitivă',
    description: 'Programe de stimulare a memoriei, atenției și funcțiilor executive pentru maximum de potențial.',
    icon: <Target className="w-8 h-8" />,
    color: 'bg-slate-100 text-slate-700 border-slate-200'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-sage-500 mb-4 block"
          >
            Ce oferim
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 italic"
          >
            Servicii specializate de <span className="text-sage-600 font-normal not-italic underline decoration-sage-100 underline-offset-8">recuperare</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-light text-lg italic">
            Fiecare plan de intervenție este personalizat în funcție de nevoile unice ale fiecărui individ, asigurând parcursul cel mai eficient către echilibru.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-cream-50 rounded-[2.5rem] p-8 border border-sage-50 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-sage-100 hover:-translate-y-2 overflow-hidden">
                <div className="mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center border transition-transform duration-500 group-hover:rotate-6`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4 leading-tight group-hover:text-sage-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 font-light italic leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-sage-100/50 mt-auto">
                  <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-sage-600 hover:text-sage-700 flex items-center gap-1 transition-colors group/link">
                    Află detalii
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
