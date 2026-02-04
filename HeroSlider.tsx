import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  description: string;
  subDescription?: string;
  cta: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Lanyard sublimados',
    description: 'Hechos a medida de forma experta y directa en nuestras fábricas, con la imagen que desees, impresión disponible en las dos caras, elige hebilla desmontable, cierre de seguridad e clip metálico.',
    subDescription: 'Inspírate y explora un nuevo mundo de regalos personalizados, a medida con yourChoice.',
    cta: 'Lanyards sublimados',
    ctaLink: '/yourchoice',
    image: '/images/hero-lanyard.jpg',
  },
  {
    id: 2,
    title: 'Uniformes médicos',
    description: 'Conoce nuestra amplia variedad de prendas diseñadas para el trabajo en clínica, laboratorio y centros de estética. Cada prenda ha sido cuidadosamente confeccionada teniendo en cuenta los rigurosos estándares de ergonomía para brindarte el máximo bienestar y libertad de movimiento durante tus jornadas de trabajo.',
    cta: 'Casaca | Bata',
    ctaLink: '/catalogo',
    image: '/images/hero-medical.jpg',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-800 ${
            index === currentSlide 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
          style={{ 
            transitionTimingFunction: 'var(--ease-in-out-cubic)',
            transform: index === currentSlide ? 'rotateY(0deg)' : index < currentSlide ? 'rotateY(-30deg)' : 'rotateY(30deg)'
          }}
        >
          {/* Background Image with Ken Burns effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms]"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full section-container flex items-center">
            <div 
              className="max-w-2xl text-white"
              style={{
                transform: index === currentSlide ? 'translateZ(50px)' : 'translateZ(0)',
              }}
            >
              {/* Title */}
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-600 ${
                  isLoaded && index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: '500ms',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {slide.title}
              </h2>
              
              {/* Description */}
              <p 
                className={`text-base md:text-lg leading-relaxed mb-4 transition-all duration-500 ${
                  isLoaded && index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: '800ms'
                }}
              >
                {slide.description}
              </p>
              
              {/* Sub Description */}
              {slide.subDescription && (
                <p 
                  className={`text-sm md:text-base text-white/80 mb-8 transition-all duration-500 ${
                    isLoaded && index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionTimingFunction: 'var(--ease-out-quart)',
                    transitionDelay: '900ms'
                  }}
                >
                  {slide.subDescription}
                </p>
              )}
              
              {/* CTA Button */}
              <Link
                to={slide.ctaLink}
                className={`btn-primary inline-block transition-all duration-400 ${
                  isLoaded && index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-90'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-elastic)',
                  transitionDelay: '1000ms',
                  animation: index === currentSlide ? 'pulse-glow 2s infinite' : 'none'
                }}
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        style={{ animation: 'float 3s ease-in-out infinite' }}
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(227, 6, 20, 0.4); }
          50% { box-shadow: 0 0 20px 5px rgba(227, 6, 20, 0.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(-50%); }
          50% { transform: translateY(calc(-50% - 5px)); }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
