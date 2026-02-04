import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ShoppingCart, Check, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../context/LanguageContext';
import { demoProducts } from '../lib/supabase';

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
  const [addedProducts, setAddedProducts] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { addProduct } = useCart();
  const { t } = useLanguage();

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
            <span>{t('general.back') || 'Volver al inicio'}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('home.featuredProducts')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => {
                const isAdded = addedProducts.has(product.id);
                
                // Buscar el producto real en demoProducts
                const realProduct = demoProducts.find(p => p.name === product.name);
                
                const handleAddToCart = () => {
                  if (realProduct) {
                    try {
                      // Añadir al carrito usando el producto real
                      addProduct(realProduct, realProduct.min_quantity);
                      
                      setAddedProducts(prev => new Set(prev).add(product.id));
                      
                      toast.success(`${product.name} ${t('cart.itemAdded')}`, {
                        description: t('cart.emptyMessage'),
                        action: {
                          label: t('cart.title'),
                          onClick: () => navigate('/carrito')
                        }
                      });
                      
                      // Resetear el estado después de 2 segundos
                      setTimeout(() => {
                        setAddedProducts(prev => {
                          const newSet = new Set(prev);
                          newSet.delete(product.id);
                          return newSet;
                        });
                      }, 2000);
                    } catch (error) {
                      toast.error(t('general.error'), {
                        description: error instanceof Error ? error.message : String(error)
                      });
                    }
                  } else {
                    // Si no se encuentra el producto, redirigir al catálogo
                    toast.info(t('catalog.viewDetails'), {
                      description: t('catalog.noResults'),
                      action: {
                        label: t('nav.catalog'),
                        onClick: () => navigate('/catalogo')
                      }
                    });
                  }
                };
                
                return (
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
                    <div className="aspect-square overflow-hidden bg-gray-50 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                      {/* Overlay con botón Ver en catálogo */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Link
                          to="/catalogo"
                          className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#e30614] hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('catalog.viewDetails')}
                        </Link>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#e30614] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-[#e30614]">{product.price}</span>
                        <button 
                          onClick={handleAddToCart}
                          disabled={isAdded}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            isAdded 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-100 hover:bg-[#e30614] hover:text-white'
                          }`}
                          title={isAdded ? 'Añadido' : 'Añadir al carrito'}
                        >
                          {isAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
