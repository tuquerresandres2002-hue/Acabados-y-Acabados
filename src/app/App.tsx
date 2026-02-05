import React from "react";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { Process } from "@/app/components/Process";
import { Testimonials } from "@/app/components/Testimonials";
import { Contact } from "@/app/components/Contact";
import { Gallery } from "@/app/components/Gallery";
import { Toaster } from "sonner";
import {
  Hammer,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const App = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
      <Toaster position="top-right" />
      <Navbar />

      <Hero />

      {/* Trust Bar with Moving Ticker */}
      <div className="bg-slate-900 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <div className="whitespace-nowrap flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm border-r border-slate-700 pr-6 mr-4">
            Aliados de:
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex gap-12 animate-ticker whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-12 items-center"
                >
                  <span className="text-xl font-black tracking-tighter text-white opacity-40 uppercase">
                    Ferritechos
                  </span>
                  <span className="text-xl font-black tracking-tighter text-white opacity-40 uppercase">
                    Inmaka
                  </span>
                  <span className="text-xl font-black tracking-tighter text-white opacity-40 uppercase">
                    Jorge Yepez Teran
                  </span>
                  <span className="text-xl font-black tracking-tighter text-white opacity-40 uppercase">
                    Madec
                  </span>
                  <span className="text-xl font-black tracking-tighter text-white opacity-40 uppercase">
                    El constructor
                  </span>
                  <span className="text-xl font-black tracking-tighter text-white opacity-40 uppercase">
                    Ferretería el económico
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>

      <Services />
      <Process />
      <Gallery />

      {/* Urgency Section */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-6">
            ¿Su proyecto no puede esperar?
          </h2>
          <p className="text-amber-950 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Atendemos emergencias de remodelación y acabados con
            entrega express. El 90% de nuestros clientes nos
            recomiendan por nuestra puntualidad.
          </p>
          <a
            href="https://wa.me/593981814708?text=Hola%20Acabados%20y%20Acabados!%20Me%20gustar%C3%ADa%20cotizar%20un%20servicio.%0ANombre%3A%20%0ATrabajo%3A%20%0ACiudad%3A%20%0ADetalle%3A%20"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl"
          >
            Chatear con el Maestro ahora
          </a>
        </div>
      </section>

      <Testimonials />
      <Contact />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/593981814708?text=Hola%20Acabados%20y%20Acabados!%20Me%20gustar%C3%ADa%20cotizar%20un%20servicio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          ¿Necesita ayuda? ¡Escríbanos!
        </span>
      </a>

      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <Hammer className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold tracking-tight">
                  Acabados y Acabados
                </span>
              </div>
              <p className="max-w-sm mb-6 leading-relaxed">
                Legado de excelencia en construcción y
                remodelación. Todo en acabados de la
                construcción con materiales de lujo como
                granito, cuarzo y piedra sinterizada.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:text-amber-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:text-amber-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:text-amber-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">
                Servicios
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Mesones de Granito y Cuarzo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Piedra Sinterizada
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Pisos y Paredes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Cielo Falso y Pintura
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">
                Compañía
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Galería
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Opiniones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-900 text-center text-sm">
            <p>
              © 2026 Acabados y Acabados. Todo en acabados de
              la construcción. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;