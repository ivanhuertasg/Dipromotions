import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Grid3X3, List } from 'lucide-react';
import { ProductService } from '../../lib/supabase';
import ProductCard from '../../components/ProductCard';

const categories = [
  { id: '1', name: 'Tecnología', count: 45, image: '/images/cat-usb.jpg' },
  { id: '2', name: 'Bolsas', count: 28, image: '/images/cat-bag.jpg' },
  { id: '3', name: 'Textil', count: 89, image: '/images/cat-tshirt.jpg' },
  { id: '4', name: 'Oficina', count: 67, image: '/images/cat-pen.jpg' },
  { id: '5', name: 'Hogar', count: 56, image: '/images/cat-mug.jpg' },
  { id: '6', name: 'Ecológico', count: 34, image: '/images/product-recycled.jpg' },
];

const CatalogoES = () => {
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
      <div className="py-8">
        <div className="section-container">
          <h2 className="text-xl font-semibold mb-6">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/catalogo?category=${category.id}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold">{category.name}</h3>
                  <p className="text-white/70 text-sm">{category.count} productos</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div ref={sectionRef} className="py-8 pb-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Todos los productos</h2>
            <span className="text-gray-500">{products.length} productos</span>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e30614]"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} viewMode={viewMode} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogoES;
