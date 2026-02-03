import PageTemplate from './PageTemplate';

// Best Seller Page
export const BestSeller = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="Los productos más vendidos de nuestra colección"
    description="Descubre los productos promocionales que más éxito tienen entre nuestros clientes. Artículos de calidad probada que garantizan satisfacción."
    showProducts
    products={[
      { id: 1, name: 'KIMBERO 300 ml.', description: 'Vaso corto inclinado en forma de rombo geométrico', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'BRACE + 510 ml.', description: 'Vaso de acero inoxidable de doble pared', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'SUMA 1200 ml.', description: 'Vaso de acero inoxidable reciclado', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'SILBASE 300 ml', description: 'Taza de cerámica con acabado blanco mate', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

// Fabricado UE Page
export const FabricadoUE = () => (
  <PageTemplate
    title="Fabricado en UE"
    subtitle="Productos fabricados en la Unión Europea"
    description="Todos nuestros productos fabricados en la UE cumplen con los más altos estándares de calidad y normativas europeas. Apoya la industria local con productos de proximidad."
    showProducts
    products={[
      { id: 1, name: 'Botella Eco 500ml', description: 'Botella de acero inoxidable fabricada en España', price: '12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 2, name: 'Bolsa de Algodón Orgánico', description: 'Bolsa de tela 100% algodón orgánico europeo', price: '3,20 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Camiseta Premium', description: 'Camiseta de algodón peinado fabricada en Portugal', price: '8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 4, name: 'Bolígrafo Metálico', description: 'Bolígrafo de aluminio reciclado fabricado en Alemania', price: '4,50 €', image: '/images/cat-pen.jpg' },
    ]}
  />
);

// Reciclado Page
export const Reciclado = () => (
  <PageTemplate
    title="Productos Reciclados"
    subtitle="Compromiso con el medio ambiente"
    description="Nuestra línea de productos reciclados está diseñada para reducir el impacto ambiental. Materiales sostenibles sin comprometer la calidad."
    showProducts
    products={[
      { id: 1, name: 'Botella RPET 500ml', description: 'Botella fabricada con plástico 100% reciclado', price: '9,90 €', image: '/images/product-recycled.jpg' },
      { id: 2, name: 'Bolsa de PET Reciclado', description: 'Bolsa fabricada con botellas de PET recicladas', price: '4,50 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Bloc de Notas Ecológico', description: 'Papel 100% reciclado con tapas de cartón', price: '3,80 €', image: '/images/product-outlet.jpg' },
      { id: 4, name: 'Lanyard de PET', description: 'Lanyard fabricado con botellas recicladas', price: '2,10 €', image: '/images/cat-lanyard.jpg' },
    ]}
  />
);

// USB Stock Page
export const USBStock = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="Memorias USB con entrega inmediata"
    description="Amplia variedad de memorias USB disponibles en stock para entrega rápida. Desde modelos básicos hasta opciones premium con gran capacidad."
    showProducts
    products={[
      { id: 1, name: 'USB Metal 8GB', description: 'Memoria USB metálica con logo grabado', price: '4,50 €', image: '/images/cat-usb.jpg' },
      { id: 2, name: 'USB Tarjeta 16GB', description: 'USB en formato tarjeta de crédito', price: '5,90 €', image: '/images/cat-usb.jpg' },
      { id: 3, name: 'USB Bamboo 32GB', description: 'USB ecológico de bambú', price: '8,50 €', image: '/images/cat-usb.jpg' },
      { id: 4, name: 'USB Llavero 64GB', description: 'USB con llavero metálico', price: '12,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

// Outlet Page
export const Outlet = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Ofertas especiales y liquidaciones"
    description="Aprovecha nuestras ofertas exclusivas en productos seleccionados. Stock limitado a precios irresistibles."
    showProducts
    products={[
      { id: 1, name: 'Set de Escritorio', description: 'Set completo de escritorio con descuento', price: '15,00 €', image: '/images/product-outlet.jpg' },
      { id: 2, name: 'Mochila Portátil', description: 'Mochila para portátil con compartimentos', price: '22,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Paraguas Automático', description: 'Paraguas de apertura automática', price: '11,10 €', image: '/images/product-agumbe.jpg' },
      { id: 4, name: 'Set de Tazas', description: 'Set de 2 tazas de cerámica', price: '8,00 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

// Especiales Page
export const Especiales = () => (
  <PageTemplate
    title="Especiales"
    subtitle="Productos para ocasiones especiales"
    description="Colección exclusiva de productos diseñados para eventos especiales, congresos y celebraciones importantes."
    showProducts
    products={[
      { id: 1, name: 'Set de Viaje Premium', description: 'Set completo para viajes de negocio', price: '35,00 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Kit de Bienvenida', description: 'Kit perfecto para nuevos empleados', price: '28,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Set Ejecutivo', description: 'Set de productos para ejecutivos', price: '45,00 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Pack Evento', description: 'Pack completo para eventos corporativos', price: '19,90 €', image: '/images/cat-bag.jpg' },
    ]}
  />
);

// Promociones Page
export const Promociones = () => (
  <PageTemplate
    title="Promociones"
    subtitle="Descuentos y ofertas del mes"
    description="Descubre nuestras promociones activas. Descuentos especiales en productos seleccionados durante tiempo limitado."
    showProducts
    products={[
      { id: 1, name: 'Power Bank 10000mAh', description: 'Cargador portátil con logo iluminado', price: '18,90 €', image: '/images/product-promotion.jpg' },
      { id: 2, name: 'Botella Térmica', description: 'Botella de acero con aislamiento térmico', price: '14,50 €', image: '/images/cat-bottle.jpg' },
      { id: 3, name: 'Set de 3 Bolígrafos', description: 'Set de bolígrafos de diferentes estilos', price: '9,90 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Mochila Eco', description: 'Mochila de materiales reciclados', price: '24,90 €', image: '/images/cat-backpack.jpg' },
    ]}
  />
);

// Congresos Page
export const Congresos = () => (
  <PageTemplate
    title="Congresos"
    subtitle="Productos para eventos y congresos"
    description="Soluciones completas para congresos, ferias y eventos corporativos. Desde lanyards hasta kits de bienvenida personalizados."
    showProducts
    products={[
      { id: 1, name: 'Kit Congreso Básico', description: 'Kit esencial para congresos', price: '12,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 2, name: 'Kit Congreso Premium', description: 'Kit completo con bolsa, bloc y bolígrafo', price: '25,00 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Lanyard Sublimado', description: 'Lanyard personalizado full color', price: '2,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 4, name: 'Badge Holder', description: 'Porta acreditaciones con cinta', price: '1,80 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

// Novedades Page
export const Novedades = () => (
  <PageTemplate
    title="Novedades"
    subtitle="Descubre lo último en productos promocionales"
    description="Mantente al día con nuestras últimas incorporaciones. Nuevos productos cada semana para sorprender a tus clientes."
    showProducts
    products={[
      { id: 1, name: 'Vaso Cristal Kimero', description: 'Vaso de cristal con diseño geométrico', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'Vaso Térmico Brace', description: 'Vaso térmico de acero inoxidable', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'Vaso Grande Suma', description: 'Vaso de gran capacidad 1200ml', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'Taza Silbase', description: 'Taza de cerámica mate 300ml', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

// Navidad Page
export const Navidad = () => (
  <PageTemplate
    title="Navidad"
    subtitle="Colección especial de Navidad"
    description="Encuentra el regalo corporativo perfecto para esta Navidad. Productos especiales para sorprender a tus clientes y empleados."
    showProducts
    products={[
      { id: 1, name: 'Set Navidad Premium', description: 'Set de regalo con caja navideña', price: '29,90 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Calendario Adviento', description: 'Calendario de adviento corporativo', price: '19,50 €', image: '/images/product-outlet.jpg' },
      { id: 3, name: 'Set Gourmet', description: 'Set gourmet con productos seleccionados', price: '35,00 €', image: '/images/product-kimero.jpg' },
      { id: 4, name: 'Decoración Navideña', description: 'Set de decoración personalizada', price: '24,90 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

// Yourchoice Page
export const Yourchoice = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Personalización a tu medida"
    description="Con Yourchoice puedes crear productos únicos y personalizados. Desde el diseño hasta el acabado, tú decides cada detalle."
    showProducts
    products={[
      { id: 1, name: 'Lanyard Personalizado', description: 'Lanyard con tu diseño full color', price: 'Desde 1,50 €', image: '/images/hero-lanyard.jpg' },
      { id: 2, name: 'Camiseta Personalizada', description: 'Camiseta con tu logo o diseño', price: 'Desde 8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 3, name: 'Botella Personalizada', description: 'Botella con grabado láser', price: 'Desde 12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 4, name: 'USB Personalizado', description: 'USB con tu logo iluminado', price: 'Desde 5,90 €', image: '/images/cat-usb.jpg' },
    ]}
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
