import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, Trophy } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Hero = () => {
  const waNumber = "593981814708";
  const waTemplate = `Hola Acabados y Acabados! Me gustaría cotizar un servicio.
Nombre: 
Trabajo: 
Ciudad: 
Detalle: `;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waTemplate)}`;

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full mb-6">
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">Última semana: Pocos cupos disponibles</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Acabados y Acabados: <span className="text-amber-500">Excelencia que transforma su hogar</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Maestros en la transformación de hogares con acabados de alta gama. Tradición y técnica impecable para elevar el prestigio y valor real de su propiedad con materiales de lujo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Agendar Inspección Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicios"
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-center"
              >
                Ver Proyectos
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-10 h-10 text-amber-500 bg-amber-50 p-2 rounded-lg" />
                <span className="text-sm font-semibold text-slate-700 leading-tight">Garantía Certificada</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-10 h-10 text-amber-500 bg-amber-50 p-2 rounded-lg" />
                <span className="text-sm font-semibold text-slate-700 leading-tight">20+ Años de Legado</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] lg:aspect-[4/5]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1769504574905-885f993d1ecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Renovación de interiores de lujo"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Urgency Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-amber-100">
              <p className="text-slate-900 font-bold mb-1 uppercase text-xs tracking-wider">Disponibilidad</p>
              <p className="text-slate-500 text-sm">Pocos cupos disponibles para proyectos este mes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
