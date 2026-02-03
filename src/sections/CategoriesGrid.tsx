import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Memorias USB',
    description: 'Muy útiles para el almacenamiento de datos y intercambio de archivos.',
    image: '/images/cat-usb.jpg',
    link: '/usb',
  },
  {
    id: 2,
    title: 'Lanyards personalizados',
    description: 'Los lanyards personalizados son imprescindibles en ferias, congresos.',
    image: '/images/cat-lanyard.jpg',
    link: '/congresos',
  },
  {
    id: 3,
    title: 'Bolsas de cuerdas personalizadas',
    description: 'Prácticas, versátiles y con un diseño moderno.',
    image: '/images/cat-drawstring.jpg',
    link: '/catalogo',
  },
  {
    id: 4,
    title: 'Paraguas personalizados',
    description: 'Perfectos para otoño e invierno, para reforzar tu marca.',
    image: '/images/cat-umbrella.jpg',
    link: '/catalogo',
  },
  {
    id: 5,
    title: 'Camisetas personalizadas',
    description: 'Las camisetas imprescindibles para la imagen de cualquier negocio u ocasión.',
    image: '/images/cat-tshirt.jpg',
    link: '/catalogo',
  },
  {
    id: 6,
    title: 'Vasos personalizados',
    description: 'Los vasos personalizados refuerzan la identidad de marca.',
    image: '/images/cat-mug.jpg',
    link: '/catalogo',
  },
  {
    id: 7,
    title: 'Botellas personalizadas',
    description: 'Las botellas de agua reutilizables son cómodas y un regalo práctico.',
    image: '/images/cat-bottle.jpg',
    link: '/catalogo',
  },
  {
    id: 8,
    title: 'Bolígrafos personalizados',
    description: 'Los bolígrafos personalizados son la opción preferida de las empresas.',
    image: '/images/cat-pen.jpg',
    link: '/catalogo',
  },
  {
    id: 9,
    title: 'Bolsas personalizadas',
    description: 'Las bolsas de tela son perfectas para eventos, congresos y promociones.',
    image: '/images/cat-bag.jpg',
    link: '/catalogo',
  },
  {
    id: 10,
    title: 'Mochilas personalizadas',
    description: 'Las mochilas con logo son un regalo útil y visible, perfectas para eventos y promociones.',
    image: '/images/cat-backpack.jpg',
    link: '/catalogo',
  },
];

const CategoriesGrid = () => {
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
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#f8f8f8]"
    >
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-out-expo)',
              clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 50% 0 50%)'
            }}
          >
            UN MUNDO PROMOCIONAL <span className="text-[#e30614]">SIN LÍMITES</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 perspective-1000">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={`group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 preserve-3d ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDelay: `${100 + (index % 5) * 80 + Math.floor(index / 5) * 400}ms`,
                transform: isVisible 
                  ? `translateY(0) ${index >= 5 ? 'translateX(50%)' : ''}` 
                  : `translateY(60px) ${index >= 5 ? 'translateX(50%)' : ''}`
              }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-400 group-hover:scale-108"
                  style={{ transitionTimingFunction: 'var(--ease-out-quart)' }}
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2 group-hover:text-[#e30614] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Hover 3D Effect */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-400 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                  transform: 'translateY(-10px) rotateX(5deg) rotateY(-5deg)',
                  transitionTimingFunction: 'var(--ease-out-expo)'
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
