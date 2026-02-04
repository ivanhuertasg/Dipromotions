import { useEffect, useRef, useState } from 'react';
import { Clock, Wand2, CheckCircle, Gift, Warehouse } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Clock className="w-8 h-8" />,
    title: 'Servicio de impresión rápido',
  },
  {
    id: 2,
    icon: <Wand2 className="w-8 h-8" />,
    title: 'Crea tu propio y único producto',
  },
  {
    id: 3,
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Cumplimiento comprobado',
  },
  {
    id: 4,
    icon: <Gift className="w-8 h-8" />,
    title: '+ de 400 novedades anuales',
  },
  {
    id: 5,
    icon: <Warehouse className="w-8 h-8" />,
    title: 'Altos niveles de stock',
  },
];

const FeaturesBar = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 bg-white border-t border-b border-gray-200"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col items-center text-center gap-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Icon with SVG draw animation */}
              <div 
                className={`text-[#e30614] transition-all duration-800 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: `${index * 150}ms`,
                  animation: isVisible ? `iconPulse 3s ease-in-out infinite ${index * 0.5}s` : 'none'
                }}
              >
                {feature.icon}
              </div>
              
              {/* Title */}
              <span 
                className={`text-sm md:text-base font-medium text-gray-700 transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: `${400 + index * 150}ms`
                }}
              >
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes iconPulse {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.05); 
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesBar;
