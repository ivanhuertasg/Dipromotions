import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  title: string;
  highlight: string;
  image: string;
  badgeColor: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'product',
    highlight: 'recycled',
    image: '/images/product-recycled.jpg',
    badgeColor: 'bg-green-500',
    link: '/reciclado',
  },
  {
    id: 2,
    title: 'product',
    highlight: 'outlet',
    image: '/images/product-outlet.jpg',
    badgeColor: 'bg-red-500',
    link: '/outlet',
  },
  {
    id: 3,
    title: 'product',
    highlight: 'especiales',
    image: '/images/product-especiales.jpg',
    badgeColor: 'bg-blue-500',
    link: '/especiales',
  },
  {
    id: 4,
    title: 'product',
    highlight: 'promotion',
    image: '/images/product-promotion.jpg',
    badgeColor: 'bg-pink-500',
    link: '/promociones',
  },
];

const CategoryLinks = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="relative z-20 -mt-20 pb-16"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-expo)',
                transitionDelay: `${index * 100}ms`,
                transform: isVisible 
                  ? `translateY(${index % 2 === 0 ? '-10px' : '0'})` 
                  : 'translateY(80px)'
              }}
            >
              {/* Badge */}
              <div 
                className={`absolute top-4 right-4 ${category.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 transition-transform duration-400 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-elastic)',
                  transitionDelay: `${500 + index * 100}ms`
                }}
              >
                {category.highlight}
              </div>

              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.highlight}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <span className="text-gray-500 text-sm">{category.title} </span>
                <span className="text-gray-900 font-bold text-lg">{category.highlight}</span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLinks;
