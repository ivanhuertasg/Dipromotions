import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
  showProducts?: boolean;
  products?: Array<{
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  }>;
}

const PageTemplate = ({ title, subtitle, description, children, showProducts = false, products = [] }: PageTemplateProps) => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#e30614] to-[#c7000b] text-white py-12 md:py-16">
        <div className="section-container">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-white/90">{subtitle}</p>}
        </div>
      </div>

      {/* Content */}
      <div ref={sectionRef} className="section-container py-12 md:py-16">
        <div 
          className={`max-w-4xl transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>
          
          {children}
        </div>

        {/* Products Grid */}
        {showProducts && products.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos destacados</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionTimingFunction: 'var(--ease-out-quart)',
                    transitionDelay: `${200 + index * 100}ms`
                  }}
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#e30614] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#e30614]">{product.price}</span>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#e30614] hover:text-white transition-all duration-300">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
