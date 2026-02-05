import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ShoppingCart, Check, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../context/LanguageContext';
import { ProductService, Product } from '../lib/supabase';

interface ProductFilter {
  is_bestseller?: boolean;
  is_eu_made?: boolean;
  is_eco?: boolean;
  is_new?: boolean;
  category?: string;
  limit?: number;
}

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
  showProducts?: boolean;
  productFilter?: ProductFilter;
}

const PageTemplate = ({ title, subtitle, description, children, showProducts = false, productFilter }: PageTemplateProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
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

  // Cargar productos filtrados cuando showProducts y productFilter están presentes
  useEffect(() => {
    if (showProducts && productFilter) {
      const loadProducts = async () => {
        setLoading(true);
        try {
          const result = await ProductService.getAll();
          let filtered = result.products;

          // Aplicar filtros
          if (productFilter.is_bestseller !== undefined) {
            filtered = filtered.filter(p => p.is_bestseller === productFilter.is_bestseller);
          }
          if (productFilter.is_eu_made !== undefined) {
            filtered = filtered.filter(p => p.is_eu_made === productFilter.is_eu_made);
          }
          if (productFilter.is_eco !== undefined) {
            filtered = filtered.filter(p => p.is_eco === productFilter.is_eco);
          }
          if (productFilter.is_new !== undefined) {
            filtered = filtered.filter(p => p.is_new === productFilter.is_new);
          }
          if (productFilter.category) {
            filtered = filtered.filter(p => p.category?.slug === productFilter.category);
          }

          // Limitar resultados
          const limit = productFilter.limit || 8;
          setProducts(filtered.slice(0, limit));
        } catch (error) {
          console.error('Error loading products:', error);
        } finally {
          setLoading(false);
        }
      };

      loadProducts();
    }
  }, [showProducts, productFilter]);

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
        {showProducts && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('home.featuredProducts')}</h2>

            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e30614]"></div>
              </div>
            )}

            {!loading && products.length === 0 && (
              <p className="text-center text-gray-500 py-12">{t('catalog.noResults')}</p>
            )}

            {!loading && products.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => {
                  const isAdded = addedProducts.has(product.id);
                  const primaryImage = ProductService.getPrimaryImage(product);
                  const displayPrice = ProductService.formatPrice(
                    product.sale_price || product.base_price
                  );

                  const handleAddToCart = () => {
                    try {
                      addProduct(product, product.min_quantity);

                      setAddedProducts(prev => new Set(prev).add(product.id));

                      toast.success(`${product.name} ${t('cart.itemAdded') || 'añadido al carrito'}`, {
                        action: {
                          label: t('cart.title') || 'Ver carrito',
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
                      toast.error(t('general.error') || 'Error', {
                        description: error instanceof Error ? error.message : String(error)
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
                          src={primaryImage}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                        />

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.is_bestseller && (
                            <span className="px-2 py-1 bg-[#e30614] text-white text-xs font-semibold rounded">
                              Best Seller
                            </span>
                          )}
                          {product.is_new && (
                            <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                              {t('catalog.newest') || 'Nuevo'}
                            </span>
                          )}
                          {product.is_eco && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded">
                              🌱 {t('catalog.eco') || 'Eco'}
                            </span>
                          )}
                          {product.is_eu_made && (
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                              🇪🇺 {t('catalog.euMade') || 'UE'}
                            </span>
                          )}
                        </div>

                        {/* Overlay con botón Ver detalles */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link
                            to={`/producto/${product.slug}`}
                            className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#e30614] hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {t('catalog.viewDetails') || 'Ver detalles'}
                          </Link>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#e30614] transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                          {product.short_description || product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-[#e30614]">{displayPrice}</span>
                            {product.min_quantity > 1 && (
                              <p className="text-xs text-gray-400">
                                Min. {product.min_quantity} uds.
                              </p>
                            )}
                          </div>
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
