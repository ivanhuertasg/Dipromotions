import PageTemplate from '../sections/PageTemplate';

// Best Seller Page
export const BestSeller = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="Los productos más vendidos de nuestra colección"
    description="Descubre los productos promocionales que más éxito tienen entre nuestros clientes. Artículos de calidad probada que garantizan satisfacción."
    showProducts
    productFilter={{ is_bestseller: true, limit: 8 }}
  />
);

// Fabricado UE Page
export const FabricadoUE = () => (
  <PageTemplate
    title="Fabricado en UE"
    subtitle="Productos fabricados en la Unión Europea"
    description="Todos nuestros productos fabricados en la UE cumplen con los más altos estándares de calidad y normativas europeas. Apoya la industria local con productos de proximidad."
    showProducts
    productFilter={{ is_eu_made: true, limit: 8 }}
  />
);

// Reciclado Page
export const Reciclado = () => (
  <PageTemplate
    title="Productos Reciclados"
    subtitle="Compromiso con el medio ambiente"
    description="Nuestra línea de productos reciclados está diseñada para reducir el impacto ambiental. Materiales sostenibles sin comprometer la calidad."
    showProducts
    productFilter={{ is_eco: true, limit: 8 }}
  />
);

// USB Stock Page
export const USBStock = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="Memorias USB con entrega inmediata"
    description="Amplia variedad de memorias USB disponibles en stock para entrega rápida. Desde modelos básicos hasta opciones premium con gran capacidad."
    showProducts
    productFilter={{ category: 'tecnologia', limit: 8 }}
  />
);

// Outlet Page - Productos con descuento (sale_price)
export const Outlet = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Ofertas especiales y liquidaciones"
    description="Aprovecha nuestras ofertas exclusivas en productos seleccionados. Stock limitado a precios irresistibles."
    showProducts
    productFilter={{ limit: 8 }}
  />
);

// Especiales Page
export const Especiales = () => (
  <PageTemplate
    title="Especiales"
    subtitle="Productos para ocasiones especiales"
    description="Colección exclusiva de productos diseñados para eventos especiales, congresos y celebraciones importantes."
    showProducts
    productFilter={{ limit: 8 }}
  />
);

// Promociones Page
export const Promociones = () => (
  <PageTemplate
    title="Promociones"
    subtitle="Descuentos y ofertas del mes"
    description="Descubre nuestras promociones activas. Descuentos especiales en productos seleccionados durante tiempo limitado."
    showProducts
    productFilter={{ limit: 8 }}
  />
);

// Congresos Page
export const Congresos = () => (
  <PageTemplate
    title="Congresos"
    subtitle="Productos para eventos y congresos"
    description="Soluciones completas para congresos, ferias y eventos corporativos. Desde lanyards hasta kits de bienvenida personalizados."
    showProducts
    productFilter={{ category: 'congresos', limit: 8 }}
  />
);

// Novedades Page
export const Novedades = () => (
  <PageTemplate
    title="Novedades"
    subtitle="Descubre lo último en productos promocionales"
    description="Mantente al día con nuestras últimas incorporaciones. Nuevos productos cada semana para sorprender a tus clientes."
    showProducts
    productFilter={{ is_new: true, limit: 8 }}
  />
);

// Navidad Page
export const Navidad = () => (
  <PageTemplate
    title="Navidad"
    subtitle="Colección especial de Navidad"
    description="Encuentra el regalo corporativo perfecto para esta Navidad. Productos especiales para sorprender a tus clientes y empleados."
    showProducts
    productFilter={{ limit: 8 }}
  />
);

// Yourchoice Page - Productos personalizables
export const Yourchoice = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Personalización a tu medida"
    description="Con Yourchoice puedes crear productos únicos y personalizados. Desde el diseño hasta el acabado, tú decides cada detalle."
    showProducts
    productFilter={{ limit: 8 }}
  />
);

// Nota Legal Page
export const NotaLegal = () => (
  <PageTemplate
    title="Nota Legal"
    description="Información legal sobre el uso de nuestra web y condiciones de servicio."
  >
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Información General</h3>
      <p className="text-gray-600 mb-4">
        En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, 
        le informamos que el titular de esta web es DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Condiciones de Uso</h3>
      <p className="text-gray-600 mb-4">
        El acceso y uso de este sitio web atribuye la condición de usuario, y se entiende que acepta las condiciones de uso establecidas. 
        El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Propiedad Intelectual</h3>
      <p className="text-gray-600 mb-4">
        Todos los contenidos de esta web, incluyendo imágenes, textos, gráficos y logotipos, son propiedad de DIPROMOTIONS 
        o se utilizan con autorización de sus respectivos propietarios.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Protección de Datos</h3>
      <p className="text-gray-600 mb-4">
        Los datos personales proporcionados serán tratados de conformidad con el Reglamento General de Protección de Datos (RGPD). 
        Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad.
      </p>
    </div>
  </PageTemplate>
);
