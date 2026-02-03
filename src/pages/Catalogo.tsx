import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Grid3X3, List } from 'lucide-react';
import { ProductService } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: '1', name: 'Tecnología', count: 45, image: '/images/cat-usb.jpg' },
  { id: '2', name: 'Bolsas', count: 28, image: '/images/cat-bag.jpg' },
  { id: '3', name: 'Textil', count: 89, image: '/images/cat-tshirt.jpg' },
  { id: '4', name: 'Oficina', count: 67, image: '/images/cat-pen.jpg' },
  { id: '5', name: 'Hogar', count: 56, image: '/images/cat-mug.jpg' },
  { id: '6', name: 'Ecológico', count: 34, image: '/images/product-recycled.jpg' },
];

const Catalogo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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

  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await ProductService.getAll({
          search: searchTerm || undefined
        });
        setProducts(result.products);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchTerm]);

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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Catálogo</h1>
          <p className="text-xl text-white/90">Explora nuestra amplia gama de productos promocionales</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-gray-50 border-b border-gray-200 py-6 sticky top-[70px] z-30">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all duration-200"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filtrar</span>
              </button>
              <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-[#e30614] text-white' : 'hover:bg-gray-50'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-[#e30614] text-white' : 'hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div ref={sectionRef} className="section-container py-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h2>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          <button className="flex-shrink-0 px-5 py-2.5 bg-[#e30614] text-white rounded-full font-medium">
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex-shrink-0 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:border-[#e30614] hover:text-[#e30614] transition-colors"
            >
              {category.name}
              <span className="ml-2 text-gray-400">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="section-container pb-16">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin w-12 h-12 border-4 border-[#e30614] border-t-transparent rounded-full" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
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
    </div>
  );
};

export default Catalogo;
