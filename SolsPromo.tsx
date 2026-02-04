import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SolsPromo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const headlineWords = ['¡Imprescindibles', '®SOL\'S', 'al', 'mejor', 'precio!'];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            {/* Animated Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {headlineWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-2 transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-16'
                  }`}
                  style={{ 
                    transitionTimingFunction: 'var(--ease-out-expo)',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {word === '®SOL\'S' ? (
                    <span className="text-[#e30614]">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p 
              className={`text-gray-600 text-lg leading-relaxed mb-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDelay: '400ms'
              }}
            >
              Aprovecha nuestra <span className="font-semibold text-[#e30614]">nueva promoción</span> en productos seleccionados,{' '}
              <span className="font-semibold">nuevos estilos y colores SOL'S</span> desde básicos icónicos hasta piezas más atrevidas.
            </p>

            {/* CTA Button */}
            <Link
              to="/catalogo"
              className={`btn-primary transition-all duration-400 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-elastic)',
                transitionDelay: '600ms'
              }}
            >
              SOL'S textil
            </Link>
          </div>

          {/* Image */}
          <div 
            className={`order-1 md:order-2 relative transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-out-expo)',
              transitionDelay: '200ms'
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/sols-promo.jpg"
                alt="SOL'S Promotional Clothing"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative element */}
            <div 
              className={`absolute -bottom-6 -left-6 w-24 h-24 bg-[#e30614] rounded-full opacity-20 transition-all duration-600 ${
                isVisible ? 'scale-100' : 'scale-0'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-elastic)',
                transitionDelay: '800ms'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolsPromo;
