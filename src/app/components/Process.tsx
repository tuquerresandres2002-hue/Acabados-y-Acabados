import React from 'react';
import { motion } from 'motion/react';
import { Search, ClipboardList, HardHat, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Inspección Técnica',
    desc: 'Evaluamos el estado de sus superficies para garantizar la adherencia y durabilidad.'
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Planificación de Materiales',
    desc: 'Asesoría en la elección de los mejores materiales según su presupuesto y estilo.'
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    title: 'Ejecución Maestra',
    desc: 'Instalación profesional siguiendo normas técnicas internacionales de nivelación.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Entrega Impecable',
    desc: 'Limpieza profunda y entrega de obra con garantía escrita de satisfacción.'
  }
];

export const Process = () => {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Metodología de Trabajo</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">¿Cómo logramos el acabado perfecto?</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-2xl flex items-center justify-center text-amber-500 shadow-xl mb-8 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  0{index + 1}
                </div>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
