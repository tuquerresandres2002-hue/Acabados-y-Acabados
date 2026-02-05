import React from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const waNumber = "593981814708";
  const waTemplate = `Hola Maestro Acabados! Me gustaría cotizar un servicio.
Nombre: 
Trabajo: 
Ciudad: 
Detalle: `;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waTemplate)}`;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Hammer className="w-8 h-8 text-amber-500" />
            <span className="text-xl font-bold tracking-tight text-slate-900">Acabados y Acabados</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-slate-600 hover:text-amber-600 transition-colors">Servicios</a>
            <a href="#proceso" className="text-slate-600 hover:text-amber-600 transition-colors">Nuestro Legado</a>
            <a href="#galeria" className="text-slate-600 hover:text-amber-600 transition-colors">Galería</a>
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Cotizar Ahora
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#servicios" className="block px-3 py-2 text-slate-600">Servicios</a>
            <a href="#proceso" className="block px-3 py-2 text-slate-600">Nuestro Legado</a>
            <a href="#galeria" className="block px-3 py-2 text-slate-600">Galería</a>
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left bg-amber-500 text-white px-3 py-2 rounded-md font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Cotizar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
