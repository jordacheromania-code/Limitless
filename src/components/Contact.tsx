/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xbdwdzgy');

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
          
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sage-400 mb-4 block">
                Contact
              </span>
              <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8 italic">
                Hai să <span className="text-sage-400 font-normal not-italic">discutăm</span>
              </h2>
              <p className="text-sage-100/70 text-lg font-light italic mb-12">
                Fie că dorești o programare sau doar informații suplimentare, suntem aici să te ascultăm și să te ghidăm.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-800 flex items-center justify-center text-sage-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium mb-1 uppercase tracking-widest text-sm">Locație</h4>
                    <p className="text-sage-100/60 font-light">B-dul Unirii 57, bl. E4, sc. 1, București</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sage-800 flex items-center justify-center text-sage-400">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-serif font-medium mb-1 uppercase tracking-widest text-sm">Programări Directe</h4>
                      <div className="flex flex-col gap-3">
                        <a 
                          href="https://wa.me/40744184423" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sage-100/70 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                          <span className="font-light">0744 184 423</span>
                          <span className="text-[10px] bg-sage-500/20 text-sage-400 px-2 py-0.5 rounded-full border border-sage-500/30 group-hover:bg-sage-500 group-hover:text-white transition-all uppercase tracking-tighter">WhatsApp</span>
                        </a>
                        <a 
                          href="https://wa.me/40721559458" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sage-100/70 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                          <span className="font-light">0721 559 458</span>
                          <span className="text-[10px] bg-sage-500/20 text-sage-400 px-2 py-0.5 rounded-full border border-sage-500/30 group-hover:bg-sage-500 group-hover:text-white transition-all uppercase tracking-tighter">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-sage-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-sage-200">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-serif text-sage-900 mb-4 italic">Mulțumim!</h3>
                    <p className="text-slate-500 font-light italic text-lg leading-relaxed max-w-sm mx-auto">
                      Mesajul tău a fost trimis cu succes. Te vom contacta în cel mai scurt timp posibil.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.reload()}
                      className="mt-8 text-sage-600 font-bold uppercase tracking-widest text-xs hover:text-sage-700 underline decoration-sage-200"
                    >
                      Trimite alt mesaj
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nume Complet</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-slate-50 border-0 border-b border-slate-200 py-4 px-4 focus:ring-0 focus:border-sage-600 transition-colors placeholder:text-slate-300 font-serif text-lg italic"
                        placeholder="Ion Popescu"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1 italic" />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Telefon</label>
                      <input
                        type="text"
                        name="phone"
                        required
                        className="w-full bg-slate-50 border-0 border-b border-slate-200 py-4 px-4 focus:ring-0 focus:border-sage-600 transition-colors placeholder:text-slate-300 font-serif text-lg italic"
                        placeholder="07xx xxx xxx"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1 italic" />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Serviciu dorit</label>
                      <select name="service" className="w-full bg-slate-50 border-0 border-b border-slate-200 py-4 px-4 focus:ring-0 focus:border-sage-600 transition-colors text-slate-400 font-serif text-lg italic">
                        <option value="">Alege serviciul...</option>
                        <option value="Psihoterapie">Psihoterapie</option>
                        <option value="Logopedie">Logopedie</option>
                        <option value="Terapie de Cuplu">Terapie de Cuplu</option>
                      </select>
                      <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-xs mt-1 italic" />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Mesajul Tău</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-slate-50 border-0 border-b border-slate-200 py-4 px-4 focus:ring-0 focus:border-sage-600 transition-colors placeholder:text-slate-300 font-serif text-lg italic"
                        placeholder="Spune-ne cum te putem ajuta..."
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1 italic" />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-sage-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-sage-700 transition-colors shadow-xl shadow-sage-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Se trimite...' : 'Trimite Mesajul'}
                      {!state.submitting && <Send size={18} />}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
