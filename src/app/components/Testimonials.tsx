import React from 'react';
import Slider from 'react-slick';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'Andrés Villalba',
    location: 'Ibarra',
    content: 'El mesón de granito quedó espectacular. La instalación fue muy rápida y el acabado en los bordes es de primera. Muy profesionales.',
    rating: 5
  },
  {
    name: 'Carmen Lucero',
    location: 'Otavalo',
    content: 'Contratamos el servicio de pintura para toda la casa. El equipo fue muy ordenado y limpio, no mancharon nada y el color quedó uniforme.',
    rating: 5
  },
  {
    name: 'Marco Espinoza',
    location: 'Quito',
    content: 'Instalaron el cielo falso de PVC en mi local comercial. El cambio fue total, se ve mucho más moderno y la iluminación quedó perfecta.',
    rating: 5
  },
  {
    name: 'Sofía Terán',
    location: 'San Lorenzo',
    content: 'Excelente trabajo con el piso flotante. Me asesoraron sobre cuál era mejor para el clima y la instalación fue impecable.',
    rating: 5
  },
  {
    name: 'Ricardo Muenala',
    location: 'Atuntaqui',
    content: 'El cuarzo que pusieron en mi cocina es la envidia de mis visitas. Muy agradecido por la paciencia en el diseño.',
    rating: 5
  },
  {
    name: 'Patricia Vallejo',
    location: 'Tulcán',
    content: 'Pintaron la fachada de mi edificio y quedó como nuevo. Usaron materiales de calidad que se nota que van a durar.',
    rating: 4
  },
  {
    name: 'Diego Cevallos',
    location: 'Cotacachi',
    content: 'Pusieron cerámica en todo el primer piso. La nivelación es perfecta, no hay ni un solo tropiezo entre baldosas.',
    rating: 5
  },
  {
    name: 'Verónica Salas',
    location: 'Ibarra',
    content: 'La piedra sinterizada en la isla de mi cocina es increíble. Es muy resistente y se ve súper elegante. Los mejores en Ibarra.',
    rating: 5
  },
  {
    name: 'Jorge Caicedo',
    location: 'Cayambe',
    content: 'Hicieron un diseño en gypsum con luces indirectas en mi sala. Quedó exactamente como lo imaginé, muy detallistas.',
    rating: 5
  },
  {
    name: 'Mónica Ortega',
    location: 'Tabacundo',
    content: 'Remodelaron mi baño por completo. Desde la plomería hasta el último azulejo, todo quedó funcional y hermoso.',
    rating: 5
  }
];

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px", zIndex: 10 }}
      onClick={onClick}
    >
      <div className="bg-white p-2 rounded-full shadow-md text-slate-800 border border-slate-100 hover:bg-amber-500 hover:text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </div>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-25px", zIndex: 10 }}
      onClick={onClick}
    >
      <div className="bg-white p-2 rounded-full shadow-md text-slate-800 border border-slate-100 hover:bg-amber-500 hover:text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <section id="opiniones" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Lo que dicen de Acabados y Acabados</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Confianza de Clientes Satisfechos</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Nuestra mayor garantía es el testimonio de quienes ya disfrutan de espacios renovados.
          </p>
        </div>

        <div className="relative px-4 lg:px-8">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-3 pb-8 h-full">
                <div className="h-full min-h-[280px] p-8 bg-slate-50 rounded-3xl relative border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-slate-200 mb-4" />
                    <div className="flex text-amber-500 mb-4">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic leading-relaxed text-sm md:text-base">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-amber-600 font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-slate-900 text-white px-8 py-6 rounded-3xl flex flex-wrap items-center justify-center gap-8 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-black text-amber-500">4.9/5</div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Calificación</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-700 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-black text-white">+500</div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Proyectos</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-700 hidden sm:block" />
            <div className="flex flex-col items-center">
              <div className="flex text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-xs text-slate-400 text-center">Recomendado en toda la zona norte</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .slick-dots li button:before {
          color: #f59e0b !important;
        }
        .slick-dots li.slick-active button:before {
          color: #d97706 !important;
        }
        .slick-prev:before, .slick-next:before {
          display: none;
        }
      `}</style>
    </section>
  );
};
