import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  href: string;
  icon: string;
}

interface CategoryLinksProps {
  title?: string;
  categories?: Category[];
}

const defaultCategories: Category[] = [
  { name: 'Best Seller', href: '/best-seller', icon: '⭐' },
  { name: 'Yourchoice', href: '/yourchoice', icon: '✨' },
  { name: 'Fabricado UE', href: '/fabricado-ue', icon: '🇪🇺' },
  { name: 'Reciclado', href: '/reciclado', icon: '♻️' },
  { name: 'USB Stock', href: '/usb', icon: '💾' },
  { name: 'Outlet', href: '/outlet', icon: '🏷️' },
  { name: 'Especiales', href: '/especiales', icon: '🎁' },
  { name: 'Promociones', href: '/promociones', icon: '🔥' },
  { name: 'Novedades', href: '/novedades', icon: '🆕' },
];

const CategoryLinks = ({ title, categories = defaultCategories }: CategoryLinksProps) => {
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
      className="py-16 bg-gray-50"
    >
      <div className="section-container">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className={`group flex items-center gap-3 px-6 py-4 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#e30614] hover:text-white ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionTimingFunction: 'var(--ease-out-expo)',
                transitionDelay: `${index * 50}ms`
              }}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLinks;
