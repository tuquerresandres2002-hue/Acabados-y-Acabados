import React from 'react';
import { motion } from 'motion/react';
import { 
  Gem, 
  Layers, 
  Construction, 
  Paintbrush, 
  Grid3X3, 
  Maximize, 
  CheckCircle2,
  Star
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const featuredServices = [
  {
    title: 'Mesones de Granito',
    description: 'Elegancia y durabilidad extrema para su cocina con piedras naturales de la mejor calidad.',
    image: 'https://images.unsplash.com/photo-1768039049614-f3c2bae3f1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Gem className="w-6 h-6" />,
    features: ['Resistente al calor', 'Sellado profesional', 'Variedad de colores']
  },
  {
    title: 'Piedra Sinterizada',
    description: 'Lo último en tecnología de superficies: ultra-compacta, no porosa y estéticamente impecable.',
    image: 'https://images.unsplash.com/photo-1758279745466-f5f4087a87d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Maximize className="w-6 h-6" />,
    features: ['Cero absorción', 'Formato XL', 'Resistencia a químicos']
  },
  {
    title: 'Cuarzo de Lujo',
    description: 'Superficies modernas con acabados uniformes y alta resistencia a manchas y rayones.',
    image: 'https://images.unsplash.com/photo-1749704647283-3ad79f4acc6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Star className="w-6 h-6" />,
    features: ['Fácil limpieza', 'Superficie antibacterial', 'Estética minimalista']
  }
];

const regularServices = [
  {
    title: 'Cielo Falso (PVC y Gypsum)',
    description: 'Instalación de techos falsos con diseños modernos. (No incluye iluminación).',
    image: 'https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Construction className="w-5 h-5" />,
  },
  {
    title: 'Piso Flotante',
    description: 'Instalación rápida y estética de pisos laminados de alta calidad.',
    image: 'https://images.unsplash.com/photo-1770086962001-3da4f60e7db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: 'Cerámica y Porcelanato',
    description: 'Acabados perfectos en pisos y paredes con nivelación láser.',
    image: 'https://images.unsplash.com/photo-1765556556784-7656ee0a1bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Grid3X3 className="w-5 h-5" />,
  },
  {
    title: 'Pintura Integral',
    description: 'Pintura de alta calidad para interiores y exteriores con preparación de paredes.',
    image: 'https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: <Paintbrush className="w-5 h-5" />,
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Nuestra Especialidad</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Todo en Acabados de la Construcción</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Combinamos materiales de primera con mano de obra calificada para transformar cada espacio de su obra.
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-2xl font-bold text-slate-800">Especialidades Destacadas</h4>
            <div className="h-[2px] flex-1 bg-amber-200" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white p-3 rounded-2xl shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Services Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-2xl font-bold text-slate-800">Otros Servicios de Calidad</h4>
            <div className="h-[2px] flex-1 bg-slate-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-amber-600">
                    {service.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{service.title}</h5>
                    <p className="text-sm text-slate-500 leading-snug">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">¿Busca un acabado integral para su obra?</h4>
            <p className="text-slate-300">Ofrecemos soluciones completas desde pintura hasta acabados de lujo.</p>
          </div>
          <a 
            href="#contacto"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg whitespace-nowrap"
          >
            Solicitar Cotización Integral
          </a>
        </div>
      </div>
    </section>
  );
};
