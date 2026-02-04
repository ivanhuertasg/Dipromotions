import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'KIMBERO 300 ml.',
    description: 'Vaso corto inclinado en forma de rombo geométrico',
    price: '2,43 €',
    image: '/images/product-kimero.jpg',
  },
  {
    id: 2,
    name: 'BRACE + 510 ml.',
    description: 'Vaso de acero inoxidable de doble pared con tapa de PP',
    price: '7,02 €',
    image: '/images/product-brace.jpg',
  },
  {
    id: 3,
    name: 'SUMA 1200 ml.',
    description: 'Vaso de acero inoxidable reciclado de doble pared, 1200 ml.',
    price: '9,52 €',
    image: '/images/product-suma.jpg',
  },
  {
    id: 4,
    name: 'SILBASE 300 ml',
    description: 'Taza de cerámica con acabado blanco mate 300 ml',
    price: '3,72 €',
    image: '/images/product-silbase.jpg',
  },
  {
    id: 5,
    name: 'AGUMBE 23" (plegable)',
    description: 'Paraguas 23" plegable antiviento automático y funda a juego',
    price: '11,10 €',
    image: '/images/product-agumbe.jpg',
  },
];

const NewArrivals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const totalPages = 46;

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="section-container">
        {/* Section Title */}
        <h2 
          className={`text-2xl md:text-3xl font-bold text-gray-900 mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          Descubre nuestras <span className="text-[#e30614]">novedades</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-110 -ml-5"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-110 -mr-5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Products Scroll */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex-shrink-0 w-[260px] md:w-[280px] bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 scroll-snap-align-start group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: `${100 + index * 60}ms`
                }}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#e30614] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p 
                    className={`text-lg font-bold text-[#e30614] transition-all duration-300 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ 
                      transitionTimingFunction: 'var(--ease-elastic)',
                      transitionDelay: `${300 + index * 60}ms`
                    }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-3 py-1 text-sm text-gray-600 hover:text-[#e30614] transition-colors duration-200"
          >
            Anterior
          </button>
          
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded text-sm font-medium transition-all duration-300 ${
                currentPage === page 
                  ? 'bg-[#e30614] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
          
          <span className="text-gray-400">...</span>
          
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`w-8 h-8 rounded text-sm font-medium transition-all duration-300 ${
              currentPage === totalPages 
                ? 'bg-[#e30614] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {totalPages}
          </button>
          
          <button 
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="px-3 py-1 text-sm text-gray-600 hover:text-[#e30614] transition-colors duration-200"
          >
            Siguiente
          </button>
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

export default NewArrivals;
