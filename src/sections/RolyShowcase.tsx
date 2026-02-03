import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RolyCategory {
  id: number;
  brand: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const rolyCategories: RolyCategory[] = [
  {
    id: 1,
    brand: '®ROLY',
    title: 'Camisetas y polos ECO',
    description: 'ECO podrás descubrir todas las prendas de ropa que están elaboradas con materiales ecológicos',
    image: '/images/roly-eco.jpg',
    link: '/catalogo',
  },
  {
    id: 2,
    brand: '®ROLY',
    title: 'Sport collection',
    description: 'Equípate con las camisetas y polos técnicos, equipaciones de deporte, chándal, cortavientos, pantalones deportivos',
    image: '/images/roly-sport.jpg',
    link: '/catalogo',
  },
  {
    id: 3,
    brand: '®ROLY',
    title: 'Workwear',
    description: 'Productos del entorno laboral. Prendas seguras, confortables y de diseño para el uniforme de tu empresa o negocio.',
    image: '/images/roly-workwear.jpg',
    link: '/catalogo',
  },
  {
    id: 4,
    brand: '®ROLY',
    title: 'Horeca',
    description: 'Camisas de trabajo de hombre y mujer para la temporada de verano e invierno e ir más cómodo al trabajo.',
    image: '/images/roly-horeca.jpg',
    link: '/catalogo',
  },
  {
    id: 5,
    brand: '®ROLY',
    title: 'Alta visibilidad',
    description: 'Productos con certificado, camisetas de alta visibilidad, pantalones con bandas reflectantes, sudaderas...',
    image: '/images/roly-hiviz.jpg',
    link: '/catalogo',
  },
];

const RolyShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 340;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, rolyCategories.length - 1));
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#f8f8f8]"
    >
      <div className="section-container">
        {/* Section Title */}
        <h2 
          className={`text-2xl md:text-3xl font-bold text-gray-900 mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          Colección <span className="text-[#e30614]">®ROLY</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-110 -ml-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-110 -mr-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Scroll */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-2"
            style={{ scrollSnapType: 'x mandatory', perspective: '1000px' }}
          >
            {rolyCategories.map((category, index) => (
              <Link
                key={category.id}
                to={category.link}
                className={`flex-shrink-0 w-[320px] md:w-[340px] bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 scroll-snap-align-center group preserve-3d ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                } ${activeIndex === index ? 'scale-105 shadow-2xl z-10' : 'scale-95 opacity-70'}`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: `${100 + index * 100}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#e30614] font-bold text-sm">{category.brand}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#e30614] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-[#e30614] font-medium text-sm group-hover:underline">
                    Descubre
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {rolyCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 340,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#e30614] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default RolyShowcase;
