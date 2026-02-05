import React from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';
import ceramica from "../../assets/ceramica.png";
import ceramica1 from "../../assets/ceramica1.png";
import ceilofalso from "../../assets/cielofalso.png";
import meson from "../../assets/meson.png";
import meson2 from "../../assets/meson2.png";

const projects = [
  {
    image: ceramica,
    category: 'Cerámica',
    title: 'Pisos de Porcelanato XL',
    span: 'md:col-span-2'
  },
  {
    image: ceramica1,
    category: 'Cerámica',
    title: 'Diseño Central en Pisos',
    span: 'md:col-span-1'
  },
  {
    image: ceilofalso,
    category: 'Cielo Falso',
    title: 'Techo Falso con Iluminación LED',
    span: 'md:col-span-1'
  },
  {
    image: meson,
    category: 'Mesones',
    title: 'Cocina Integral de Cuarzo',
    span: 'md:col-span-1'
  },
  {
    image: meson2,
    category: 'Mesones',
    title: 'Acabados Modernos en Cocina',
    span: 'md:col-span-1'
  }
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Nuestro Trabajo Real</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Galería de Proyectos Recientes</h3>
          </div>
          <div className="flex items-center gap-2 text-slate-500 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
            <Info className="w-5 h-5 text-amber-500" />
            <span className="font-medium">No olvides preguntar por más referencias</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl group h-[300px] md:h-[400px] ${project.span}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">{project.category}</span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold border border-white/20">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
