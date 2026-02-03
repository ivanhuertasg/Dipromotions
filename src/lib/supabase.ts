// =============================================
// CONFIGURACIÓN DE SUPABASE
// =============================================
// Para conectar con Supabase real:
// 1. Crea un proyecto en https://supabase.com
// 2. Ejecuta el SQL del archivo database.sql
// 3. Configura las variables de entorno

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Configuración - Usar variables de entorno en producción
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Modo demo si no hay credenciales
const USE_DEMO_MODE = !SUPABASE_URL || !SUPABASE_ANON_KEY;

// Cliente de Supabase (solo si hay credenciales)
export const supabase: SupabaseClient | null = USE_DEMO_MODE 
  ? null 
  : createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
      { id: '1', image_url: '/images/product-promotion.jpg', alt_text: 'Powerbank Solar Bambú - Vista frontal', is_primary: true, sort_order: 0 },
      { id: '1b', image_url: '/images/cat-usb.jpg', alt_text: 'Powerbank Solar Bambú - Vista lateral', is_primary: false, sort_order: 1 }
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
      { id: '2', image_url: '/images/cat-bag.jpg', alt_text: 'Bolsa Tote Algodón Orgánico', is_primary: true, sort_order: 0 }
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
      { id: '3', image_url: '/images/cat-usb.jpg', alt_text: 'USB Madera 16GB', is_primary: true, sort_order: 0 }
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
      { id: '4', image_url: '/images/cat-lanyard.jpg', alt_text: 'Lanyard Sublimado', is_primary: true, sort_order: 0 }
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
      { id: '5', image_url: '/images/cat-bottle.jpg', alt_text: 'Botella Térmica 500ml', is_primary: true, sort_order: 0 }
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
      { id: '6', image_url: '/images/cat-pen.jpg', alt_text: 'Set Escritorio Ejecutivo', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 899 },
      { min_quantity: 100, max_quantity: 249, price: 799 },
      { min_quantity: 250, max_quantity: 499, price: 699 },
      { min_quantity: 500, max_quantity: null, price: 599 },
    ]
  },
  {
    id: '7',
    sku: 'CAM-ORG-001',
    name: 'Camiseta Orgánica Premium',
    slug: 'camiseta-organica-premium',
    description: 'Camiseta de algodón orgánico 180g/m² certificado GOTS. Corte moderno y acabados de alta calidad. Ideal para uniformes corporativos.',
    short_description: 'Camiseta de algodón orgánico',
    base_price: 1299,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 1200,
    stock_status: 'in_stock',
    category_id: '7',
    category: { id: '7', name: 'Textil', slug: 'textil' },
    brand: 'OrganicWear',
    material: 'Algodón orgánico 180g/m²',
    color: 'Blanco / Negro / Gris / Azul marino',
    weight: 180,
    dimensions: null,
    is_customizable: true,
    customization_options: ['Serigrafía', 'Transfer', 'Bordado', 'DTF'],
    print_areas: ['Pecho', 'Espalda', 'Manga'],
    is_bestseller: true,
    is_new: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '7', image_url: '/images/cat-tshirt.jpg', alt_text: 'Camiseta Orgánica Premium', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1299 },
      { min_quantity: 100, max_quantity: 249, price: 1149 },
      { min_quantity: 250, max_quantity: 499, price: 999 },
      { min_quantity: 500, max_quantity: null, price: 899 },
    ]
  },
  {
    id: '8',
    sku: 'MOCH-USB-001',
    name: 'Mochila USB con Puerto de Carga',
    slug: 'mochila-usb-puerto-carga',
    description: 'Mochila moderna con puerto USB integrado para cargar dispositivos. Compartimento acolchado para portátil hasta 15.6". Múltiples bolsillos organizadores.',
    short_description: 'Mochila con puerto USB',
    base_price: 2499,
    sale_price: 2199,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 200,
    stock_status: 'in_stock',
    category_id: '2',
    category: { id: '2', name: 'Bolsas', slug: 'bolsas' },
    brand: 'TechBag',
    material: 'Poliéster 600D resistente al agua',
    color: 'Negro / Gris',
    weight: 650,
    dimensions: { length: 30, width: 15, height: 45 },
    is_customizable: true,
    customization_options: ['Bordado', 'Serigrafía'],
    print_areas: ['Frontal'],
    is_bestseller: false,
    is_new: true,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '8', image_url: '/images/cat-backpack.jpg', alt_text: 'Mochila USB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 2199 },
      { min_quantity: 50, max_quantity: 99, price: 1999 },
      { min_quantity: 100, max_quantity: 249, price: 1799 },
      { min_quantity: 250, max_quantity: null, price: 1599 },
    ]
  },
  {
    id: '9',
    sku: 'TAZA-CER-300',
    name: 'Taza Cerámica Premium 300ml',
    slug: 'taza-ceramica-premium-300ml',
    description: 'Taza de cerámica de alta calidad con acabado mate. Apta para microondas y lavavajillas. Perfecta para personalización con sublimación.',
    short_description: 'Taza de cerámica de alta calidad',
    base_price: 299,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 3000,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'CeramicPro',
    material: 'Cerámica de gres',
    color: 'Blanco / Negro / Colores variados',
    weight: 320,
    dimensions: { length: 8, width: 8, height: 10 },
    is_customizable: true,
    customization_options: ['Sublimación', 'Grabado láser'],
    print_areas: ['360° envolvente'],
    is_bestseller: true,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '9', image_url: '/images/cat-mug.jpg', alt_text: 'Taza Cerámica Premium', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 299 },
      { min_quantity: 100, max_quantity: 249, price: 269 },
      { min_quantity: 250, max_quantity: 499, price: 239 },
      { min_quantity: 500, max_quantity: null, price: 199 },
    ]
  },
  {
    id: '10',
    sku: 'PAR-AUTO-23',
    name: 'Paraguas Automático 23"',
    slug: 'paraguas-automatico-23',
    description: 'Paraguas de apertura automática con varillas de fibra de vidrio resistentes al viento. Mango ergonómico antideslizante. Funda a juego incluida.',
    short_description: 'Paraguas automático antiviento',
    base_price: 1199,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 450,
    stock_status: 'in_stock',
    category_id: '5',
    category: { id: '5', name: 'Hogar', slug: 'hogar' },
    brand: 'RainPro',
    material: 'Pongee / Fibra de vidrio',
    color: 'Negro / Azul / Rojo / Verde',
    weight: 380,
    dimensions: { length: 30, width: 5, height: 5 },
    is_customizable: true,
    customization_options: ['Serigrafía', 'Transfer'],
    print_areas: ['Gajos'],
    is_bestseller: false,
    is_new: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '10', image_url: '/images/product-agumbe.jpg', alt_text: 'Paraguas Automático 23"', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1199 },
      { min_quantity: 100, max_quantity: 249, price: 1049 },
      { min_quantity: 250, max_quantity: 499, price: 949 },
      { min_quantity: 500, max_quantity: null, price: 849 },
    ]
  },
];

// Categorías demo
export const demoCategories = [
  { id: '1', name: 'Tecnología', slug: 'tecnologia', icon: '💻', image_url: '/images/cat-usb.jpg', product_count: 45 },
  { id: '2', name: 'Bolsas', slug: 'bolsas', icon: '👜', image_url: '/images/cat-bag.jpg', product_count: 38 },
  { id: '3', name: 'Textil', slug: 'textil', icon: '👕', image_url: '/images/cat-tshirt.jpg', product_count: 89 },
  { id: '4', name: 'Congresos', slug: 'congresos', icon: '🎫', image_url: '/images/cat-lanyard.jpg', product_count: 52 },
  { id: '5', name: 'Hogar', slug: 'hogar', icon: '🏠', image_url: '/images/cat-mug.jpg', product_count: 67 },
  { id: '6', name: 'Oficina', slug: 'oficina', icon: '✏️', image_url: '/images/cat-pen.jpg', product_count: 74 },
  { id: '7', name: 'Ecológico', slug: 'ecologico', icon: '🌱', image_url: '/images/product-recycled.jpg', product_count: 34 },
];

// =============================================
// TIPOS
// =============================================
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
  category?: { id: string; name: string; slug: string };
  brand: string;
  material: string;
  color?: string;
  weight?: number;
  dimensions?: { length: number; width: number; height: number } | null;
  is_customizable: boolean;
  customization_options?: string[];
  print_areas?: string[];
  is_bestseller: boolean;
  is_new: boolean;
  is_eco: boolean;
  is_eu_made: boolean;
  images: Array<{
    id: string;
    image_url: string;
    alt_text: string;
    is_primary: boolean;
    sort_order: number;
  }>;
  quantity_prices: Array<{
    min_quantity: number;
    max_quantity: number | null;
    price: number;
  }>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  image_url?: string;
  product_count?: number;
}

// =============================================
// SERVICIO DE PRODUCTOS
// =============================================
export const ProductService = {
  /**
   * Obtiene productos con filtros y paginación
   */
  async getAll(options: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sortBy?: 'name' | 'price_asc' | 'price_desc' | 'newest';
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
      limit = 20, 
      category = null,
      search = null,
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

      // Ordenación
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

    // Filtro por categoría
    if (category) {
      data = data.filter(p => p.category_id === category || p.category?.slug === category);
    }

    // Filtro por búsqueda
    if (search) {
      const term = search.toLowerCase();
      data = data.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term)
      );
    }

    // Filtros adicionales
    if (filters.is_eco) data = data.filter(p => p.is_eco);
    if (filters.is_eu_made) data = data.filter(p => p.is_eu_made);
    if (filters.is_bestseller) data = data.filter(p => p.is_bestseller);
    if (filters.priceMin) data = data.filter(p => p.base_price >= filters.priceMin!);
    if (filters.priceMax) data = data.filter(p => p.base_price <= filters.priceMax!);

    // Ordenación
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

  /**
   * Obtiene un producto por su slug
   */
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

  /**
   * Obtiene un producto por su ID
   */
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

  /**
   * Calcula el precio según la cantidad (precios escalonados B2B)
   */
  calculatePrice(product: Product, quantity: number): number {
    if (!product.quantity_prices || product.quantity_prices.length === 0) {
      return product.sale_price || product.base_price;
    }

    // Ordenar por min_quantity descendente y encontrar el rango aplicable
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

  /**
   * Obtiene la imagen principal de un producto
   */
  getPrimaryImage(product: Product): string {
    const primary = product.images?.find(img => img.is_primary);
    return primary?.image_url || product.images?.[0]?.image_url || '/images/placeholder.jpg';
  },

  /**
   * Formatea el precio para mostrar (céntimos a euros)
   */
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
  /**
   * Obtiene todas las categorías
   */
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

  /**
   * Obtiene una categoría por su slug
   */
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

// Exportar estado de modo demo para debugging
export const isDemoMode = USE_DEMO_MODE;
