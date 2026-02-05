// =============================================
// CONFIGURACIÓN DE SUPABASE - diPromotions
// =============================================

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// =============================================
// CONFIGURACIÓN
// =============================================
// Variables de entorno (o fallback a valores directos para desarrollo)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://limagftmuvindquklxqe.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpbWFnZnRtdXZpbmRxdWtseHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxOTk4MzIsImV4cCI6MjA4NTc3NTgzMn0.dYyc359GjDNXnv2xJ2z9EuPSyvLgkXX_tMfDJoZ839Q';

// Siempre intentar conectar a Supabase (ya tenemos credenciales válidas)
const USE_DEMO_MODE = false;

// Cliente de Supabase
export const supabase: SupabaseClient | null = USE_DEMO_MODE 
  ? null 
  : createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Log para debugging
if (USE_DEMO_MODE) {
  console.info('🔶 diPromotions: Ejecutando en MODO DEMO (sin conexión a Supabase)');
} else {
  console.info('✅ diPromotions: Conectado a Supabase');
}

// =============================================
// IMÁGENES BASE - URLs ABSOLUTAS
// =============================================
// Usar imágenes de placeholder o de tu CDN
const IMAGE_BASE = 'https://images.unsplash.com';
const PLACEHOLDER = '/images/placeholder.jpg';

const DEMO_IMAGES = {
  powerbank: `${IMAGE_BASE}/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop`,
  bolsa: `${IMAGE_BASE}/photo-1591561954557-26941169b49e?w=600&h=600&fit=crop`,
  usb: `${IMAGE_BASE}/photo-1618410320928-25228d811631?w=600&h=600&fit=crop`,
  lanyard: `${IMAGE_BASE}/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop`,
  botella: `${IMAGE_BASE}/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop`,
  escritorio: `${IMAGE_BASE}/photo-1583485088034-697b5bc54ccd?w=600&h=600&fit=crop`,
  polo: `${IMAGE_BASE}/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop`,
  cuaderno: `${IMAGE_BASE}/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop`,
  auriculares: `${IMAGE_BASE}/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop`,
  paraguas: `${IMAGE_BASE}/photo-1534309466160-70b22cc6252c?w=600&h=600&fit=crop`,
  mochila: `${IMAGE_BASE}/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop`,
  camiseta: `${IMAGE_BASE}/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop`,
  boligrafo: `${IMAGE_BASE}/photo-1585336261022-680e295ce3fe?w=600&h=600&fit=crop`,
  taza: `${IMAGE_BASE}/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop`,
  vaso1: `${IMAGE_BASE}/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop`,
  vaso2: `${IMAGE_BASE}/photo-1577937927133-66ef06acdf18?w=600&h=600&fit=crop`,
  vaso3: `${IMAGE_BASE}/photo-1544816565-c76ba30637b6?w=600&h=600&fit=crop`,
  regalo: `${IMAGE_BASE}/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop`,
  calendario: `${IMAGE_BASE}/photo-1506784983877-45594efa4cbe?w=600&h=600&fit=crop`,
  gourmet: `${IMAGE_BASE}/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop`,
  // Categorías
  tecnologia: `${IMAGE_BASE}/photo-1518770660439-4636190af475?w=600&h=400&fit=crop`,
  bolsas: `${IMAGE_BASE}/photo-1591561954557-26941169b49e?w=600&h=400&fit=crop`,
  textil: `${IMAGE_BASE}/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop`,
  congresos: `${IMAGE_BASE}/photo-1540575467063-178a50e2fd87?w=600&h=400&fit=crop`,
  hogar: `${IMAGE_BASE}/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop`,
  oficina: `${IMAGE_BASE}/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop`,
  ecologico: `${IMAGE_BASE}/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop`,
};

// =============================================
// DATOS DE DEMOSTRACIÓN
// =============================================
export const demoProducts = [
  {
    id: '1',
    sku: 'PB-5000-ECO',
    name: 'Powerbank Solar 5000mAh Bambú',
    slug: 'powerbank-solar-5000-bambu',
    description: 'Batería externa con panel solar integrado y carcasa de bambú natural. Ideal para empresas comprometidas con el medio ambiente. Incluye cable USB-C y micro USB.',
    short_description: 'Powerbank ecológico con carga solar',
    base_price: 1499,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 1,
    stock_quantity: 500,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'EcoTech',
    material: 'Bambú / Plástico reciclado',
    color: 'Natural',
    weight: 180,
    dimensions: { length: 14, width: 7, height: 1.5 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Serigrafía'],
    print_areas: ['Frontal', 'Trasera'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '1', image_url: DEMO_IMAGES.powerbank, alt_text: 'Powerbank Solar Bambú - Vista frontal', is_primary: true, sort_order: 0 },
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1499 },
      { min_quantity: 100, max_quantity: 249, price: 1349 },
      { min_quantity: 250, max_quantity: 499, price: 1199 },
      { min_quantity: 500, max_quantity: null, price: 999 },
    ]
  },
  {
    id: '2',
    sku: 'BOL-ALGOD-001',
    name: 'Bolsa Tote Algodón Orgánico 140g',
    slug: 'bolsa-tote-algodon-organico',
    description: 'Bolsa de algodón orgánico certificado GOTS, perfecta para compras y uso diario. Gran área de impresión para tu logo. Asas largas reforzadas.',
    short_description: 'Bolsa ecológica de algodón orgánico',
    base_price: 189,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 10,
    stock_quantity: 2000,
    stock_status: 'in_stock',
    category_id: '2',
    category: { id: '2', name: 'Bolsas', slug: 'bolsas' },
    brand: 'NatureBag',
    material: 'Algodón orgánico 140g/m²',
    color: 'Natural / Blanco / Negro',
    weight: 140,
    dimensions: { length: 38, width: 42, height: 0 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Transfer', 'Bordado'],
    print_areas: ['Frontal', 'Trasera'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '2', image_url: DEMO_IMAGES.bolsa, alt_text: 'Bolsa Tote Algodón Orgánico', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 100, max_quantity: 249, price: 189 },
      { min_quantity: 250, max_quantity: 499, price: 169 },
      { min_quantity: 500, max_quantity: 999, price: 149 },
      { min_quantity: 1000, max_quantity: null, price: 129 },
    ]
  },
  {
    id: '3',
    sku: 'USB-MADERA-16',
    name: 'Memoria USB Madera 16GB',
    slug: 'memoria-usb-madera-16gb',
    description: 'Pendrive con carcasa de madera natural grabable con láser. Incluye caja de madera a juego. USB 3.0 de alta velocidad.',
    short_description: 'USB de madera personalizable',
    base_price: 599,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 800,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'WoodTech',
    material: 'Madera natural de arce',
    color: 'Madera natural',
    weight: 15,
    dimensions: { length: 6, width: 2, height: 1 },
    is_customizable: true,
    customization_options: ['Grabado láser'],
    print_areas: ['Ambas caras'],
    is_bestseller: false,
    is_new: true,
    is_eco: true,
    is_eu_made: false,
    images: [
      { id: '3', image_url: DEMO_IMAGES.usb, alt_text: 'USB Madera 16GB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 599 },
      { min_quantity: 50, max_quantity: 99, price: 549 },
      { min_quantity: 100, max_quantity: 249, price: 499 },
      { min_quantity: 250, max_quantity: null, price: 449 },
    ]
  },
  {
    id: '4',
    sku: 'LAN-SUB-001',
    name: 'Lanyard Sublimado Full Color',
    slug: 'lanyard-sublimado-full-color',
    description: 'Lanyard de alta calidad con impresión sublimada a todo color en ambas caras. Incluye mosquetón metálico y cierre de seguridad desmontable.',
    short_description: 'Lanyard personalizable full color',
    base_price: 129,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 50,
    stock_quantity: 5000,
    stock_status: 'in_stock',
    category_id: '4',
    category: { id: '4', name: 'Congresos', slug: 'congresos' },
    brand: 'PrintPro',
    material: 'Poliéster satinado',
    color: 'Full color personalizable',
    weight: 25,
    dimensions: { length: 90, width: 2, height: 0 },
    is_customizable: true,
    customization_options: ['Sublimación full color'],
    print_areas: ['Ambas caras'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '4', image_url: DEMO_IMAGES.lanyard, alt_text: 'Lanyard Sublimado', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 100, max_quantity: 249, price: 129 },
      { min_quantity: 250, max_quantity: 499, price: 109 },
      { min_quantity: 500, max_quantity: 999, price: 95 },
      { min_quantity: 1000, max_quantity: null, price: 79 },
    ]
  },
  {
    id: '5',
    sku: 'BOT-TERM-500',
    name: 'Botella Térmica 500ml Acero Inox',
    slug: 'botella-termica-500ml-acero',
    description: 'Botella térmica de doble pared con aislamiento al vacío. Mantiene bebidas frías 24h y calientes 12h. Tapa hermética antigoteo.',
    short_description: 'Botella térmica de acero inoxidable',
    base_price: 1299,
    sale_price: 1099,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 350,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'ThermoPro',
    material: 'Acero inoxidable 304',
    color: 'Negro / Blanco / Azul / Rojo',
    weight: 280,
    dimensions: { length: 7, width: 7, height: 25 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Serigrafía'],
    print_areas: ['Cuerpo'],
    is_bestseller: false,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '5', image_url: DEMO_IMAGES.botella, alt_text: 'Botella Térmica 500ml', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1099 },
      { min_quantity: 100, max_quantity: 249, price: 999 },
      { min_quantity: 250, max_quantity: 499, price: 899 },
      { min_quantity: 500, max_quantity: null, price: 799 },
    ]
  },
  {
    id: '6',
    sku: 'SET-ESC-001',
    name: 'Set de Escritorio Ejecutivo',
    slug: 'set-escritorio-ejecutivo',
    description: 'Set completo de escritorio con bolígrafo metálico, portaminas, regla y abrecartas. Presentado en elegante estuche de cartón reciclado.',
    short_description: 'Set de escritorio premium',
    base_price: 899,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 600,
    stock_status: 'in_stock',
    category_id: '6',
    category: { id: '6', name: 'Oficina', slug: 'oficina' },
    brand: 'OfficePro',
    material: 'Metal / Cartón reciclado',
    color: 'Negro / Plata',
    weight: 150,
    dimensions: { length: 20, width: 8, height: 3 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Serigrafía'],
    print_areas: ['Bolígrafo', 'Estuche'],
    is_bestseller: false,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '6', image_url: DEMO_IMAGES.escritorio, alt_text: 'Set Escritorio Ejecutivo', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 899 },
      { min_quantity: 100, max_quantity: 249, price: 799 },
      { min_quantity: 250, max_quantity: null, price: 699 },
    ]
  },
  {
    id: '7',
    sku: 'POL-PER-001',
    name: 'Polo Personalizado Premium',
    slug: 'polo-personalizado-premium',
    description: 'Polo de algodón piqué de alta calidad con cuello reforzado. Ideal para uniformes corporativos y eventos. Disponible en múltiples colores y tallas.',
    short_description: 'Polo corporativo personalizable',
    base_price: 1199,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 1000,
    stock_status: 'in_stock',
    category_id: '3',
    category: { id: '3', name: 'Textil', slug: 'textil' },
    brand: 'TextilPro',
    material: 'Algodón piqué 220g/m²',
    color: 'Blanco / Negro / Azul / Rojo / Verde',
    weight: 220,
    dimensions: { length: 0, width: 0, height: 0 },
    is_customizable: true,
    customization_options: ['Bordado', 'Serigrafía', 'Transfer'],
    print_areas: ['Pecho izquierdo', 'Espalda'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '7', image_url: DEMO_IMAGES.polo, alt_text: 'Polo Personalizado Premium', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 1199 },
      { min_quantity: 50, max_quantity: 99, price: 1099 },
      { min_quantity: 100, max_quantity: 249, price: 999 },
      { min_quantity: 250, max_quantity: null, price: 899 },
    ]
  },
  {
    id: '8',
    sku: 'CUA-A5-001',
    name: 'Cuaderno A5 Tapa Dura Reciclado',
    slug: 'cuaderno-a5-tapa-dura-reciclado',
    description: 'Cuaderno A5 con tapa dura de cartón reciclado y 80 hojas de papel reciclado. Incluye bolígrafo a juego con clip. Cierre con goma elástica.',
    short_description: 'Cuaderno ecológico con bolígrafo',
    base_price: 399,
    sale_price: 349,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 1500,
    stock_status: 'in_stock',
    category_id: '6',
    category: { id: '6', name: 'Oficina', slug: 'oficina' },
    brand: 'EcoNote',
    material: 'Cartón y papel reciclado',
    color: 'Kraft / Negro / Azul',
    weight: 200,
    dimensions: { length: 21, width: 14.8, height: 1.5 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Grabado láser'],
    print_areas: ['Tapa'],
    is_bestseller: false,
    is_new: true,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '8', image_url: DEMO_IMAGES.cuaderno, alt_text: 'Cuaderno A5 Reciclado', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 349 },
      { min_quantity: 100, max_quantity: 249, price: 299 },
      { min_quantity: 250, max_quantity: 499, price: 269 },
      { min_quantity: 500, max_quantity: null, price: 239 },
    ]
  },
  {
    id: '9',
    sku: 'AUR-BT-001',
    name: 'Auriculares Bluetooth Plegables',
    slug: 'auriculares-bluetooth-plegables',
    description: 'Auriculares inalámbricos Bluetooth 5.0 con diseño plegable y estuche de transporte. Batería de 8h de duración. Incluye cable de carga USB-C.',
    short_description: 'Auriculares Bluetooth con estuche',
    base_price: 1899,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 200,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'SoundTech',
    material: 'Plástico ABS / Metal',
    color: 'Negro / Blanco',
    weight: 180,
    dimensions: { length: 18, width: 15, height: 7 },
    is_customizable: true,
    customization_options: ['Tampografía', 'Grabado láser'],
    print_areas: ['Auricular exterior'],
    is_bestseller: false,
    is_new: true,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '9', image_url: DEMO_IMAGES.auriculares, alt_text: 'Auriculares Bluetooth', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 1899 },
      { min_quantity: 50, max_quantity: 99, price: 1749 },
      { min_quantity: 100, max_quantity: 249, price: 1599 },
      { min_quantity: 250, max_quantity: null, price: 1449 },
    ]
  },
  {
    id: '10',
    sku: 'PAR-AUT-001',
    name: 'Paraguas Automático Resistente',
    slug: 'paraguas-automatico-resistente',
    description: 'Paraguas automático con varillas de fibra de vidrio resistentes al viento. Mango ergonómico y funda incluida. Apertura y cierre automáticos.',
    short_description: 'Paraguas automático antiviento',
    base_price: 799,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 400,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'RainPro',
    material: 'Poliéster / Fibra de vidrio',
    color: 'Negro / Azul / Rojo / Verde',
    weight: 350,
    dimensions: { length: 30, width: 5, height: 5 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Transfer'],
    print_areas: ['Paneles'],
    is_bestseller: false,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '10', image_url: DEMO_IMAGES.paraguas, alt_text: 'Paraguas Automático', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 799 },
      { min_quantity: 100, max_quantity: 249, price: 699 },
      { min_quantity: 250, max_quantity: 499, price: 599 },
      { min_quantity: 500, max_quantity: null, price: 499 },
    ]
  },
  {
    id: '11',
    sku: 'USB-METAL-8',
    name: 'USB Metal 8GB Grabable',
    slug: 'usb-metal-8gb-grabable',
    description: 'Memoria USB de metal con acabado mate. Grabado láser incluido. USB 2.0 con llavero metálico incorporado. Ideal para stock inmediato.',
    short_description: 'USB metálico con grabado láser',
    base_price: 450,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 1000,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'USB Stock',
    material: 'Aluminio',
    color: 'Plata / Negro / Azul',
    weight: 20,
    dimensions: { length: 6, width: 1.5, height: 0.5 },
    is_customizable: true,
    customization_options: ['Grabado láser'],
    print_areas: ['Ambas caras'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '11', image_url: DEMO_IMAGES.usb, alt_text: 'USB Metal 8GB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 450 },
      { min_quantity: 100, max_quantity: 249, price: 390 },
      { min_quantity: 250, max_quantity: 499, price: 340 },
      { min_quantity: 500, max_quantity: null, price: 290 },
    ]
  },
  {
    id: '12',
    sku: 'USB-CARD-16',
    name: 'USB Tarjeta 16GB',
    slug: 'usb-tarjeta-16gb',
    description: 'Pendrive en formato tarjeta de crédito con impresión full color. Perfecto para presentaciones y eventos. USB 2.0.',
    short_description: 'USB formato tarjeta full color',
    base_price: 590,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 25,
    stock_quantity: 800,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'USB Stock',
    material: 'Plástico PVC',
    color: 'Personalizable full color',
    weight: 10,
    dimensions: { length: 8.5, width: 5.4, height: 0.1 },
    is_customizable: true,
    customization_options: ['Impresión digital full color'],
    print_areas: ['Ambas caras'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '12', image_url: DEMO_IMAGES.usb, alt_text: 'USB Tarjeta 16GB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 100, max_quantity: 249, price: 590 },
      { min_quantity: 250, max_quantity: 499, price: 540 },
      { min_quantity: 500, max_quantity: 999, price: 490 },
      { min_quantity: 1000, max_quantity: null, price: 440 },
    ]
  },
  {
    id: '13',
    sku: 'MOCH-PORT-001',
    name: 'Mochila Portátil Acolchada',
    slug: 'mochila-portatil-acolchada',
    description: 'Mochila para portátiles hasta 15.6" con compartimento acolchado. Múltiples bolsillos organizadores y puerto USB externo. Material resistente al agua.',
    short_description: 'Mochila para portátil 15.6"',
    base_price: 2250,
    sale_price: 2050,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 150,
    stock_status: 'in_stock',
    category_id: '2',
    category: { id: '2', name: 'Bolsas', slug: 'bolsas' },
    brand: 'TechBag',
    material: 'Poliéster 600D impermeable',
    color: 'Negro / Gris / Azul',
    weight: 650,
    dimensions: { length: 45, width: 30, height: 15 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Transfer', 'Bordado'],
    print_areas: ['Frontal', 'Lateral'],
    is_bestseller: false,
    is_new: false,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '13', image_url: DEMO_IMAGES.mochila, alt_text: 'Mochila Portátil', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 2050 },
      { min_quantity: 50, max_quantity: 99, price: 1850 },
      { min_quantity: 100, max_quantity: null, price: 1650 },
    ]
  },
  {
    id: '14',
    sku: 'CAMI-BASI-001',
    name: 'Camiseta Basic Algodón',
    slug: 'camiseta-basic-algodon',
    description: 'Camiseta básica 100% algodón peinado de 165g/m². Cuello reforzado con costura de doble pespunte. Múltiples colores disponibles.',
    short_description: 'Camiseta básica 100% algodón',
    base_price: 590,
    sale_price: 490,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 2000,
    stock_status: 'in_stock',
    category_id: '3',
    category: { id: '3', name: 'Textil', slug: 'textil' },
    brand: 'BasicWear',
    material: 'Algodón peinado 165g/m²',
    color: 'Blanco / Negro / Gris / Azul / Rojo / Verde',
    weight: 165,
    dimensions: { length: 0, width: 0, height: 0 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Transfer', 'Bordado'],
    print_areas: ['Pecho', 'Espalda'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '14', image_url: DEMO_IMAGES.camiseta, alt_text: 'Camiseta Basic', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 490 },
      { min_quantity: 100, max_quantity: 249, price: 440 },
      { min_quantity: 250, max_quantity: 499, price: 390 },
      { min_quantity: 500, max_quantity: null, price: 340 },
    ]
  },
  {
    id: '15',
    sku: 'BOLI-BAMBU-001',
    name: 'Bolígrafo Bambú Tinta Azul',
    slug: 'boligrafo-bambu-tinta-azul',
    description: 'Bolígrafo ecológico con cuerpo de bambú natural. Tinta azul de larga duración. Pulsador y clip metálicos.',
    short_description: 'Bolígrafo ecológico de bambú',
    base_price: 79,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 50,
    stock_quantity: 5000,
    stock_status: 'in_stock',
    category_id: '6',
    category: { id: '6', name: 'Oficina', slug: 'oficina' },
    brand: 'EcoWrite',
    material: 'Bambú natural',
    color: 'Natural',
    weight: 12,
    dimensions: { length: 14, width: 1, height: 1 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Serigrafía'],
    print_areas: ['Cuerpo'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: false,
    images: [
      { id: '15', image_url: DEMO_IMAGES.boligrafo, alt_text: 'Bolígrafo Bambú', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 100, max_quantity: 249, price: 79 },
      { min_quantity: 250, max_quantity: 499, price: 69 },
      { min_quantity: 500, max_quantity: 999, price: 59 },
      { min_quantity: 1000, max_quantity: null, price: 49 },
    ]
  },
  {
    id: '16',
    sku: 'KIT-CONG-BAS',
    name: 'Kit Congreso Básico',
    slug: 'kit-congreso-basico',
    description: 'Kit esencial para congresos que incluye lanyard sublimado, badge holder, bolígrafo y bloc de notas A6. Presentado en bolsa de papel kraft.',
    short_description: 'Kit completo para congresos',
    base_price: 1250,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 300,
    stock_status: 'in_stock',
    category_id: '4',
    category: { id: '4', name: 'Congresos', slug: 'congresos' },
    brand: 'EventPro',
    material: 'Varios materiales',
    color: 'Personalizable',
    weight: 120,
    dimensions: { length: 22, width: 15, height: 3 },
    is_customizable: true,
    customization_options: ['Sublimación', 'Serigrafía'],
    print_areas: ['Lanyard', 'Bolígrafo', 'Bloc'],
    is_bestseller: false,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '16', image_url: DEMO_IMAGES.lanyard, alt_text: 'Kit Congreso', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1250 },
      { min_quantity: 100, max_quantity: 249, price: 1150 },
      { min_quantity: 250, max_quantity: null, price: 1050 },
    ]
  },
  {
    id: '17',
    sku: 'TAZA-CERA-001',
    name: 'Taza Cerámica 300ml Blanca',
    slug: 'taza-ceramica-300ml-blanca',
    description: 'Taza de cerámica blanca de 300ml. Apta para lavavajillas y microondas. Superficie de impresión amplia para tu logo.',
    short_description: 'Taza cerámica personalizable',
    base_price: 290,
    sale_price: 250,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 1000,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'CeramicPro',
    material: 'Cerámica',
    color: 'Blanco',
    weight: 350,
    dimensions: { length: 8, width: 8, height: 9.5 },
    is_customizable: true,
    customization_options: ['Sublimación', 'Serigrafía'],
    print_areas: ['360° alrededor'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '17', image_url: DEMO_IMAGES.taza, alt_text: 'Taza Cerámica Blanca', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 250 },
      { min_quantity: 100, max_quantity: 249, price: 220 },
      { min_quantity: 250, max_quantity: 499, price: 190 },
      { min_quantity: 500, max_quantity: null, price: 160 },
    ]
  },
  {
    id: '18',
    sku: 'VASO-ROMB-300',
    name: 'Vaso Cristal Geométrico 300ml',
    slug: 'vaso-cristal-geometrico-300ml',
    description: 'Vaso de cristal con diseño geométrico en forma de rombo. Ideal para eventos elegantes. Apto para lavavajillas.',
    short_description: 'Vaso cristal diseño rombo',
    base_price: 243,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 50,
    stock_quantity: 600,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'GlassDesign',
    material: 'Cristal',
    color: 'Transparente',
    weight: 220,
    dimensions: { length: 7, width: 7, height: 10 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Serigrafía'],
    print_areas: ['Lateral'],
    is_bestseller: true,
    is_new: true,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '18', image_url: DEMO_IMAGES.vaso1, alt_text: 'Vaso Cristal Geométrico', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 100, max_quantity: 249, price: 243 },
      { min_quantity: 250, max_quantity: 499, price: 219 },
      { min_quantity: 500, max_quantity: 999, price: 195 },
      { min_quantity: 1000, max_quantity: null, price: 171 },
    ]
  },
  {
    id: '19',
    sku: 'VASO-INOX-510',
    name: 'Vaso Acero Doble Pared 510ml',
    slug: 'vaso-acero-doble-pared-510ml',
    description: 'Vaso térmico de acero inoxidable con doble pared. Mantiene temperatura hasta 6h. Tapa hermética con orificio para beber.',
    short_description: 'Vaso térmico acero inoxidable',
    base_price: 702,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 400,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'SteelPro',
    material: 'Acero inoxidable 304',
    color: 'Plata / Negro / Azul',
    weight: 280,
    dimensions: { length: 8, width: 8, height: 18 },
    is_customizable: true,
    customization_options: ['Grabado láser'],
    print_areas: ['Cuerpo'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '19', image_url: DEMO_IMAGES.vaso2, alt_text: 'Vaso Acero Doble Pared', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 702 },
      { min_quantity: 100, max_quantity: 249, price: 632 },
      { min_quantity: 250, max_quantity: 499, price: 562 },
      { min_quantity: 500, max_quantity: null, price: 492 },
    ]
  },
  {
    id: '20',
    sku: 'VASO-RECIC-1200',
    name: 'Vaso Acero Reciclado 1200ml',
    slug: 'vaso-acero-reciclado-1200ml',
    description: 'Vaso de gran capacidad fabricado con acero inoxidable reciclado. Doble pared con aislamiento. Tapa de rosca hermética.',
    short_description: 'Vaso grande acero reciclado',
    base_price: 952,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 350,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'EcoSteel',
    material: 'Acero inoxidable reciclado',
    color: 'Acero mate',
    weight: 380,
    dimensions: { length: 9, width: 9, height: 25 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Serigrafía'],
    print_areas: ['Cuerpo'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '20', image_url: DEMO_IMAGES.vaso3, alt_text: 'Vaso Acero Reciclado 1200ml', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 952 },
      { min_quantity: 100, max_quantity: 249, price: 857 },
      { min_quantity: 250, max_quantity: 499, price: 762 },
      { min_quantity: 500, max_quantity: null, price: 667 },
    ]
  },
  {
    id: '21',
    sku: 'NAV-SET-PREM',
    name: 'Set Regalo Navidad Premium',
    slug: 'set-regalo-navidad-premium',
    description: 'Set navideño premium con botella térmica, taza cerámica y vela aromática. Presentado en elegante caja navideña con lazo.',
    short_description: 'Set regalo navideño exclusivo',
    base_price: 2990,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 100,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'GiftPro',
    material: 'Varios',
    color: 'Rojo / Dorado / Verde',
    weight: 850,
    dimensions: { length: 30, width: 25, height: 12 },
    is_customizable: true,
    customization_options: ['Grabado', 'Tarjeta personalizada'],
    print_areas: ['Botella', 'Taza', 'Caja'],
    is_bestseller: false,
    is_new: true,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '21', image_url: DEMO_IMAGES.regalo, alt_text: 'Set Navidad Premium', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 2990 },
      { min_quantity: 50, max_quantity: 99, price: 2790 },
      { min_quantity: 100, max_quantity: null, price: 2590 },
    ]
  },
  {
    id: '22',
    sku: 'USB-BAMBU-32',
    name: 'USB Bambú Ecológico 32GB',
    slug: 'usb-bambu-ecologico-32gb',
    description: 'Pendrive ecológico de bambú natural con tapa giratoria. USB 3.0 de alta velocidad. Capacidad 32GB.',
    short_description: 'USB ecológico bambú 32GB',
    base_price: 850,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 500,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'USB Stock',
    material: 'Bambú natural',
    color: 'Natural',
    weight: 18,
    dimensions: { length: 6.5, width: 2, height: 0.8 },
    is_customizable: true,
    customization_options: ['Grabado láser'],
    print_areas: ['Ambas caras'],
    is_bestseller: false,
    is_new: false,
    is_eco: true,
    is_eu_made: false,
    images: [
      { id: '22', image_url: DEMO_IMAGES.usb, alt_text: 'USB Bambú 32GB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 850 },
      { min_quantity: 100, max_quantity: 249, price: 790 },
      { min_quantity: 250, max_quantity: 499, price: 730 },
      { min_quantity: 500, max_quantity: null, price: 670 },
    ]
  },
  {
    id: '23',
    sku: 'USB-LLAV-64',
    name: 'USB Llavero Metal 64GB',
    slug: 'usb-llavero-metal-64gb',
    description: 'Memoria USB de alta capacidad con llavero metálico resistente. USB 3.1 ultra rápido. Diseño compacto y elegante.',
    short_description: 'USB llavero 64GB alta velocidad',
    base_price: 1290,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 400,
    stock_status: 'in_stock',
    category_id: '1',
    category: { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    brand: 'USB Stock',
    material: 'Metal aluminio',
    color: 'Plata / Negro / Oro',
    weight: 25,
    dimensions: { length: 5, width: 1.5, height: 0.6 },
    is_customizable: true,
    customization_options: ['Grabado láser'],
    print_areas: ['Cuerpo'],
    is_bestseller: true,
    is_new: true,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '23', image_url: DEMO_IMAGES.usb, alt_text: 'USB Llavero 64GB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1290 },
      { min_quantity: 100, max_quantity: 249, price: 1190 },
      { min_quantity: 250, max_quantity: 499, price: 1090 },
      { min_quantity: 500, max_quantity: null, price: 990 },
    ]
  },
  {
    id: '24',
    sku: 'CAL-ADV-001',
    name: 'Calendario Adviento Corporativo',
    slug: 'calendario-adviento-corporativo',
    description: 'Calendario de adviento personalizado con 24 cajitas. Perfecto para regalos navideños corporativos. Diseño premium con acabado mate.',
    short_description: 'Calendario adviento 24 cajitas',
    base_price: 1950,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 200,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'ChristmasPro',
    material: 'Cartón reciclado',
    color: 'Rojo / Verde / Blanco',
    weight: 400,
    dimensions: { length: 40, width: 30, height: 5 },
    is_customizable: true,
    customization_options: ['Impresión digital', 'Logo corporativo'],
    print_areas: ['Frontal', 'Cajitas'],
    is_bestseller: false,
    is_new: true,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '24', image_url: DEMO_IMAGES.calendario, alt_text: 'Calendario Adviento', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1950 },
      { min_quantity: 100, max_quantity: 249, price: 1750 },
      { min_quantity: 250, max_quantity: null, price: 1550 },
    ]
  },
  {
    id: '25',
    sku: 'SET-GOUR-001',
    name: 'Set Gourmet Selección Premium',
    slug: 'set-gourmet-seleccion-premium',
    description: 'Cesta gourmet con productos seleccionados: aceite virgen extra, vino, conservas artesanas y dulces típicos. Presentación en cesta de mimbre.',
    short_description: 'Set gourmet productos premium',
    base_price: 3500,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 80,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'GourmetSelect',
    material: 'Productos alimentarios',
    color: 'Natural',
    weight: 2500,
    dimensions: { length: 35, width: 25, height: 15 },
    is_customizable: true,
    customization_options: ['Tarjeta personalizada', 'Selección productos'],
    print_areas: ['Tarjeta'],
    is_bestseller: false,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '25', image_url: DEMO_IMAGES.gourmet, alt_text: 'Set Gourmet Premium', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 3500 },
      { min_quantity: 50, max_quantity: 99, price: 3300 },
      { min_quantity: 100, max_quantity: null, price: 3100 },
    ]
  },
  {
    id: '26',
    sku: 'SET-VIAJE-PREM',
    name: 'Set Viaje Ejecutivo Premium',
    slug: 'set-viaje-ejecutivo-premium',
    description: 'Set completo para viajes de negocio: neceser, almohada cervical, antifaz, adaptador universal y powerbank. Presentado en estuche elegante.',
    short_description: 'Set viaje ejecutivo completo',
    base_price: 3500,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 100,
    stock_status: 'in_stock',
    category_id: '2',
    category: { id: '2', name: 'Bolsas', slug: 'bolsas' },
    brand: 'TravelPro',
    material: 'Varios materiales premium',
    color: 'Negro / Gris',
    weight: 800,
    dimensions: { length: 35, width: 25, height: 10 },
    is_customizable: true,
    customization_options: ['Grabado láser', 'Bordado'],
    print_areas: ['Neceser', 'Estuche'],
    is_bestseller: false,
    is_new: true,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '26', image_url: DEMO_IMAGES.mochila, alt_text: 'Set Viaje Premium', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 3500 },
      { min_quantity: 50, max_quantity: 99, price: 3250 },
      { min_quantity: 100, max_quantity: null, price: 3000 },
    ]
  },
  {
    id: '27',
    sku: 'SET-EJEC-001',
    name: 'Set Ejecutivo Bolígrafo y Portaminas',
    slug: 'set-ejecutivo-boligrafo-portaminas',
    description: 'Set ejecutivo con bolígrafo y portaminas de metal cromado. Presentado en estuche acolchado. Escritura suave y elegante.',
    short_description: 'Set bolígrafo y portaminas metal',
    base_price: 4500,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 150,
    stock_status: 'in_stock',
    category_id: '6',
    category: { id: '6', name: 'Oficina', slug: 'oficina' },
    brand: 'ExecWrite',
    material: 'Metal cromado',
    color: 'Plata / Oro / Negro mate',
    weight: 120,
    dimensions: { length: 18, width: 8, height: 3 },
    is_customizable: true,
    customization_options: ['Grabado láser'],
    print_areas: ['Bolígrafo', 'Portaminas'],
    is_bestseller: false,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '27', image_url: DEMO_IMAGES.boligrafo, alt_text: 'Set Ejecutivo', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 4500 },
      { min_quantity: 50, max_quantity: 99, price: 4200 },
      { min_quantity: 100, max_quantity: null, price: 3900 },
    ]
  },
  {
    id: '28',
    sku: 'KIT-EVENT-001',
    name: 'Pack Completo Evento Corporativo',
    slug: 'pack-completo-evento-corporativo',
    description: 'Pack todo en uno para eventos: bolsa tote, lanyard, bloc A5, bolígrafo, botella plegable y mascarilla. Ideal para eventos masivos.',
    short_description: 'Pack completo para eventos',
    base_price: 1990,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 300,
    stock_status: 'in_stock',
    category_id: '4',
    category: { id: '4', name: 'Congresos', slug: 'congresos' },
    brand: 'EventPro',
    material: 'Varios materiales',
    color: 'Personalizable',
    weight: 350,
    dimensions: { length: 38, width: 42, height: 5 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Sublimación'],
    print_areas: ['Todos los artículos'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '28', image_url: DEMO_IMAGES.bolsa, alt_text: 'Pack Evento', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1990 },
      { min_quantity: 100, max_quantity: 249, price: 1790 },
      { min_quantity: 250, max_quantity: 499, price: 1590 },
      { min_quantity: 500, max_quantity: null, price: 1390 },
    ]
  },
  {
    id: '29',
    sku: 'MOCH-ECO-REC',
    name: 'Mochila Reciclada PET',
    slug: 'mochila-reciclada-pet',
    description: 'Mochila fabricada con botellas PET recicladas. Compartimento principal amplio y bolsillos organizadores. Correas acolchadas ajustables.',
    short_description: 'Mochila ecológica PET reciclado',
    base_price: 2490,
    sale_price: 2190,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 250,
    stock_status: 'in_stock',
    category_id: '2',
    category: { id: '2', name: 'Bolsas', slug: 'bolsas' },
    brand: 'EcoBag',
    material: 'PET reciclado',
    color: 'Gris / Azul / Verde',
    weight: 420,
    dimensions: { length: 40, width: 28, height: 12 },
    is_customizable: true,
    customization_options: ['Transfer', 'Bordado'],
    print_areas: ['Frontal', 'Lateral'],
    is_bestseller: false,
    is_new: true,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '29', image_url: DEMO_IMAGES.mochila, alt_text: 'Mochila Reciclada', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 2190 },
      { min_quantity: 100, max_quantity: 249, price: 1990 },
      { min_quantity: 250, max_quantity: 499, price: 1790 },
      { min_quantity: 500, max_quantity: null, price: 1590 },
    ]
  },
  {
    id: '30',
    sku: 'BOT-RPET-500',
    name: 'Botella RPET 500ml Transparente',
    slug: 'botella-rpet-500ml-transparente',
    description: 'Botella fabricada con plástico 100% reciclado (RPET). Transparente con tapa de rosca hermética. Libre de BPA.',
    short_description: 'Botella 100% plástico reciclado',
    base_price: 990,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 25,
    stock_quantity: 800,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'EcoBottle',
    material: 'RPET (PET reciclado)',
    color: 'Transparente / Azul / Verde',
    weight: 50,
    dimensions: { length: 7, width: 7, height: 21 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Etiqueta adhesiva'],
    print_areas: ['Cuerpo'],
    is_bestseller: false,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '30', image_url: DEMO_IMAGES.botella, alt_text: 'Botella RPET', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 100, max_quantity: 249, price: 990 },
      { min_quantity: 250, max_quantity: 499, price: 890 },
      { min_quantity: 500, max_quantity: 999, price: 790 },
      { min_quantity: 1000, max_quantity: null, price: 690 },
    ]
  }
];

// =============================================
// CATEGORÍAS DE DEMOSTRACIÓN
// =============================================
export const demoCategories = [
  { id: '1', name: 'Tecnología', slug: 'tecnologia', icon: '💻', image_url: DEMO_IMAGES.tecnologia, product_count: 3 },
  { id: '2', name: 'Bolsas', slug: 'bolsas', icon: '👜', image_url: DEMO_IMAGES.bolsas, product_count: 1 },
  { id: '3', name: 'Textil', slug: 'textil', icon: '👕', image_url: DEMO_IMAGES.textil, product_count: 1 },
  { id: '4', name: 'Congresos', slug: 'congresos', icon: '🎫', image_url: DEMO_IMAGES.congresos, product_count: 1 },
  { id: '5', name: 'Hogar', slug: 'hogar', icon: '🏠', image_url: DEMO_IMAGES.hogar, product_count: 2 },
  { id: '6', name: 'Oficina', slug: 'oficina', icon: '✏️', image_url: DEMO_IMAGES.oficina, product_count: 2 },
  { id: '7', name: 'Ecológico', slug: 'ecologico', icon: '🌱', image_url: DEMO_IMAGES.ecologico, product_count: 5 },
];

// =============================================
// TIPOS
// =============================================
export interface ProductImage {
  id: string;
  image_url: string;
  alt_text?: string;
  is_primary: boolean;
  sort_order: number;
}

export interface QuantityPrice {
  min_quantity: number;
  max_quantity: number | null;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  image_url?: string;
  product_count?: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  base_price: number;
  sale_price: number | null;
  min_quantity: number;
  quantity_step: number;
  stock_quantity: number;
  stock_status: string;
  category_id: string;
  category?: Category;
  brand: string;
  material?: string;
  color?: string;
  weight?: number;
  dimensions?: { length: number; width: number; height: number };
  is_customizable: boolean;
  customization_options?: string[];
  print_areas?: string[];
  is_bestseller: boolean;
  is_new: boolean;
  is_eco: boolean;
  is_eu_made: boolean;
  images?: ProductImage[];
  quantity_prices?: QuantityPrice[];
}

// =============================================
// SERVICIO DE PRODUCTOS
// =============================================
export const ProductService = {
  async getAll(options: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sortBy?: string;
    filters?: {
      is_eco?: boolean;
      is_eu_made?: boolean;
      is_bestseller?: boolean;
      priceMin?: number;
      priceMax?: number;
    };
  } = {}): Promise<{ products: Product[]; total: number; page: number; totalPages: number }> {
    const {
      page = 1,
      limit = 12,
      category,
      search,
      sortBy = 'name',
      filters = {}
    } = options;

    // Si tenemos Supabase real, usarlo
    if (supabase && !USE_DEMO_MODE) {
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(id, name, slug),
          images:product_images(id, image_url, alt_text, is_primary, sort_order),
          quantity_prices:product_quantity_prices(min_quantity, max_quantity, price)
        `, { count: 'exact' });

      if (category) {
        query = query.eq('category_id', category);
      }

      if (search) {
        query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%,sku.ilike.%${search}%`);
      }

      if (filters.is_eco) query = query.eq('is_eco', true);
      if (filters.is_eu_made) query = query.eq('is_eu_made', true);
      if (filters.is_bestseller) query = query.eq('is_bestseller', true);
      if (filters.priceMin) query = query.gte('base_price', filters.priceMin);
      if (filters.priceMax) query = query.lte('base_price', filters.priceMax);

      switch (sortBy) {
        case 'price_asc':
          query = query.order('base_price', { ascending: true });
          break;
        case 'price_desc':
          query = query.order('base_price', { ascending: false });
          break;
        case 'newest':
          query = query.order('created_at', { ascending: false });
          break;
        default:
          query = query.order('name', { ascending: true });
      }

      const start = (page - 1) * limit;
      const end = start + limit - 1;
      
      const { data, error, count } = await query.range(start, end);

      if (error) throw error;

      return {
        products: (data || []) as Product[],
        total: count || 0,
        page,
        totalPages: Math.ceil((count || 0) / limit)
      };
    }

    // Modo demo: filtrar datos locales
    let data = [...demoProducts] as Product[];

    if (category) {
      data = data.filter(p => p.category_id === category || p.category?.slug === category);
    }

    if (search) {
      const term = search.toLowerCase();
      data = data.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term)
      );
    }

    if (filters.is_eco) data = data.filter(p => p.is_eco);
    if (filters.is_eu_made) data = data.filter(p => p.is_eu_made);
    if (filters.is_bestseller) data = data.filter(p => p.is_bestseller);
    if (filters.priceMin) data = data.filter(p => p.base_price >= filters.priceMin!);
    if (filters.priceMax) data = data.filter(p => p.base_price <= filters.priceMax!);

    switch (sortBy) {
      case 'price_asc':
        data.sort((a, b) => (a.sale_price || a.base_price) - (b.sale_price || b.base_price));
        break;
      case 'price_desc':
        data.sort((a, b) => (b.sale_price || b.base_price) - (a.sale_price || a.base_price));
        break;
      case 'newest':
        data.sort((a, b) => (b.is_new ? 1 : 0) - (a.is_new ? 1 : 0));
        break;
      default:
        data.sort((a, b) => a.name.localeCompare(b.name));
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      products: data.slice(start, end),
      total: data.length,
      page,
      totalPages: Math.ceil(data.length / limit)
    };
  },

  async getBySlug(slug: string): Promise<Product | null> {
    if (supabase && !USE_DEMO_MODE) {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(id, name, slug),
          images:product_images(id, image_url, alt_text, is_primary, sort_order),
          quantity_prices:product_quantity_prices(min_quantity, max_quantity, price)
        `)
        .eq('slug', slug)
        .single();

      if (error) return null;
      return data as Product;
    }

    return (demoProducts.find(p => p.slug === slug) as Product) || null;
  },

  async getById(id: string): Promise<Product | null> {
    if (supabase && !USE_DEMO_MODE) {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(id, name, slug),
          images:product_images(id, image_url, alt_text, is_primary, sort_order),
          quantity_prices:product_quantity_prices(min_quantity, max_quantity, price)
        `)
        .eq('id', id)
        .single();

      if (error) return null;
      return data as Product;
    }

    return (demoProducts.find(p => p.id === id) as Product) || null;
  },

  calculatePrice(product: Product, quantity: number): number {
    if (!product.quantity_prices || product.quantity_prices.length === 0) {
      return product.sale_price || product.base_price;
    }

    const sortedPrices = [...product.quantity_prices]
      .sort((a, b) => b.min_quantity - a.min_quantity);

    for (const qp of sortedPrices) {
      if (quantity >= qp.min_quantity) {
        if (!qp.max_quantity || quantity <= qp.max_quantity) {
          return qp.price;
        }
      }
    }

    return product.sale_price || product.base_price;
  },

  getPrimaryImage(product: Product): string {
    const primary = product.images?.find(img => img.is_primary);
    return primary?.image_url || product.images?.[0]?.image_url || PLACEHOLDER;
  },

  formatPrice(cents: number): string {
    return (cents / 100).toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    });
  }
};

// =============================================
// SERVICIO DE CATEGORÍAS
// =============================================
export const CategoryService = {
  async getAll(): Promise<Category[]> {
    if (supabase && !USE_DEMO_MODE) {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data as Category[];
    }

    return demoCategories;
  },

  async getBySlug(slug: string): Promise<Category | null> {
    if (supabase && !USE_DEMO_MODE) {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) return null;
      return data as Category;
    }

    return demoCategories.find(c => c.slug === slug) || null;
  }
};

// Exportar estado de modo demo
export const isDemoMode = USE_DEMO_MODE;
