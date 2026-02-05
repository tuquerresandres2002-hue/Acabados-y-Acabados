import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // 1. Save to Supabase
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-461311e2/contact` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al enviar el formulario');

      // 2. Redirect to WhatsApp with pre-filled info
      const waNumber = "593981814708";
      const waMessage = `Hola Maestro Acabados! Me gustaría cotizar un servicio.
Nombre: ${data.name}
Trabajo: ${data.service}
Ciudad: ${data.city}
Detalle: ${data.message}`;
      
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
      
      toast.success('¡Datos guardados! Abriendo WhatsApp para finalizar su cotización...');
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        (e.target as HTMLFormElement).reset();
      }, 1500);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('No se pudo enviar. Por favor, verifique su conexión e intente de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">¡Contáctanos Hoy!</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">No deje su hogar en manos de novatos</h3>
            <p className="text-slate-400 text-lg mb-12">
              Estamos recibiendo muchas solicitudes. Reserve su inspección técnica hoy mismo para asegurar su espacio en nuestro calendario de trabajo de este mes.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold">Llámanos</p>
                  <p className="text-xl font-bold">0981814708</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold">Ubicación</p>
                  <p className="text-xl font-bold">Ibarra (Cobertura en Imbabura, Carchi, Pichincha y San Lorenzo)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Solicitar Presupuesto Gratis</h4>
            <p className="text-slate-500 mb-8 italic">Respuesta inmediata garantizada</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ciudad</label>
                  <input 
                    name="city"
                    required
                    type="text" 
                    placeholder="Ej. Quito / Guayaquil"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono</label>
                  <input 
                    name="phone"
                    required
                    type="tel" 
                    placeholder="099-XXX-XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Servicio de Interés</label>
                  <select name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none appearance-none bg-white">
                    <option>Legado de Cerámica / Porcelanato</option>
                    <option>Pisos Flotantes</option>
                    <option>Cielo Falso / Drywall</option>
                    <option>Remodelación Integral</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje / Detalles de la obra</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Cuéntenos sobre su proyecto..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <button 
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-amber-500 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all flex items-center justify-center gap-2 text-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Enviando...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-slate-400 text-center">
                Al enviar este formulario, usted acepta ser contactado para fines comerciales.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

