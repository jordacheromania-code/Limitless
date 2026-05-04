/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Tag, Clock } from 'lucide-react';

const prices = [
  { service: 'Psihoterapie', duration: '50 min.', price: '300 lei' },
  { service: 'Consiliere psihologică', duration: '50 min.', price: '250 lei' },
  { service: 'Evaluare psihologică', duration: 'per ședință', price: '400 lei' },
  { service: 'Logopedie', duration: '45 min.', price: '180 lei' },
  { service: 'Evaluare Logopedie', duration: '45 min.', price: '250 lei' },
  { service: 'Dezvoltare personală', duration: '50 min.', price: '300 lei' },
  { service: 'Terapie de cuplu', duration: '90 min.', price: '400 lei' },
  { service: 'Consiliere parentală', duration: '50 min.', price: '300 lei' },
  { service: 'Terapie cognitivă', duration: '50 min.', price: '300 lei' },
  { service: 'Terapie tulburări de învățare (Metoda Feuerstein)', duration: '50 min.', price: '200 lei' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cream-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-sage-500 mb-4 block"
          >
            Investiția în tine
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 italic"
          >
            Tarife <span className="text-sage-600 font-normal not-italic underline decoration-sage-100 underline-offset-8">Servicii</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-light text-lg italic">
            Transparența este fundația unei relații terapeutice de încredere.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-sage-100/50 border border-sage-100 overflow-hidden">
          <div className="divide-y divide-sage-50">
            {prices.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-sage-50/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                    <Tag size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-slate-900 leading-tight">
                      {item.service}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-1">
                      <Clock size={12} />
                      <span className="italic">{item.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-serif font-bold text-sage-700 md:text-right">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm italic font-light">
              * Pentru abonamente sau pachete personalizate, vă rugăm să ne contactați.
            </p>
        </div>
      </div>
    </section>
  );
}
