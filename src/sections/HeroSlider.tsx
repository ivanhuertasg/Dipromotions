import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface Slide {
  id?: string;
  title: string;
  subtitle?: string;
  cta: string;
  ctaLink: string;
  image?: string;
}

interface HeroSliderProps {
  slides?: Slide[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const { t } = useLanguage();

  // Default slides (fallback) with translations
  const defaultSlides: Slide[] = [
    {
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      cta: t('hero.slide1.cta'),
      ctaLink: '/yourchoice',
    },
    {
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      cta: t('hero.slide2.cta'),
      ctaLink: '/catalogo',
    },
  ];

  const displaySlides = slides || defaultSlides;
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
    goToSlide((currentSlide + 1) % displaySlides.length);
  }, [currentSlide, goToSlide, displaySlides.length]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + displaySlides.length) % displaySlides.length);
  }, [currentSlide, goToSlide, displaySlides.length]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {displaySlides.map((slide, index) => (
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
              
              {/* Subtitle */}
              {slide.subtitle && (
                <p 
                  className={`text-base md:text-lg leading-relaxed mb-8 transition-all duration-500 ${
                    isLoaded && index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionTimingFunction: 'var(--ease-out-quart)',
                    transitionDelay: '800ms'
                  }}
                >
                  {slide.subtitle}
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
        {displaySlides.map((_, index) => (
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
