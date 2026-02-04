import { useEffect, useRef, useState } from 'react';

const CompanyIntro = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = 'Ofrecemos el regalo personalizado perfecto'.split(' ');

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-2 transition-all duration-400 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-expo)',
                  transitionDelay: `${100 + index * 50}ms`
                }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Description with line-by-line animation */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p 
              className={`transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDelay: '400ms'
              }}
            >
              <span className="font-semibold text-gray-900">DIPROMOTIONS</span> ofrece capacidades de impresión de las más avanzadas en cuanto a{' '}
              <span className="font-semibold text-[#e30614]">opciones de personalización</span>, así como{' '}
              <span className="font-semibold text-[#e30614]">plazos de entrega y niveles de stock inmejorables</span>.
            </p>
            
            <p 
              className={`transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDelay: '480ms'
              }}
            >
              Nuestro <span className="font-semibold text-[#e30614]">servicio de impresión en 24 horas</span> es único en el sector y nos permite cumplir incluso los plazos más exigentes. Además, ofrecemos mucho más que nuestra gama de stock europeo, también llevamos la personalización a un siguiente nivel.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full bg-[#e30614] transition-all duration-600 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-elastic)',
                  transitionDelay: `${600 + index * 100}ms`,
                  animation: isVisible ? `float 4s ease-in-out infinite ${index * 0.5}s` : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default CompanyIntro;
