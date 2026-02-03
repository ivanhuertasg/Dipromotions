// =============================================
// CONFIGURACIÓN DE SUPABASE (Demo Mode)
// =============================================

// Demo data for products
export const demoProducts = [
  {
    id: '1',
    sku: 'PB-5000-ECO',
    name: 'Powerbank Solar 5000mAh Bambú',
    slug: 'powerbank-solar-5000-bambu',
    description: 'Batería externa con panel solar integrado y carcasa de bambú natural. Ideal para empresas comprometidas con el medio ambiente.',
    short_description: 'Powerbank ecológico con carga solar',
    base_price: 1499,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 1,
    stock_quantity: 500,
    stock_status: 'in_stock',
    category_id: '1',
    brand: 'EcoTech',
    material: 'Bambú / Plástico reciclado',
    is_customizable: true,
    is_bestseller: true,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '1', image_url: '/images/product-promotion.jpg', alt_text: 'Powerbank Solar Bambú', is_primary: true, sort_order: 0 }
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
    description: 'Bolsa de algodón orgánico certificado, perfecta para compras y uso diario. Gran área de impresión para tu logo.',
    short_description: 'Bolsa ecológica de algodón orgánico',
    base_price: 189,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 10,
    stock_quantity: 2000,
    stock_status: 'in_stock',
    category_id: '2',
    brand: 'NatureBag',
    material: 'Algodón orgánico 140g/m²',
    is_customizable: true,
    is_bestseller: true,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '2', image_url: '/images/cat-bag.jpg', alt_text: 'Bolsa Tote Algodón', is_primary: true, sort_order: 0 }
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
    description: 'Pendrive con carcasa de madera natural grabable con láser. Incluye caja de madera a juego.',
    short_description: 'USB de madera personalizable',
    base_price: 599,
    sale_price: null,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 800,
    stock_status: 'in_stock',
    category_id: '3',
    brand: 'WoodTech',
    material: 'Madera natural',
    is_customizable: true,
    is_bestseller: false,
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
    description: 'Lanyard de alta calidad con impresión sublimada a todo color. Incluye mosquetón metálico y cierre de seguridad.',
    short_description: 'Lanyard personalizable full color',
    base_price: 129,
    sale_price: null,
    min_quantity: 100,
    quantity_step: 50,
    stock_quantity: 5000,
    stock_status: 'in_stock',
    category_id: '4',
    brand: 'PrintPro',
    material: 'Poliéster',
    is_customizable: true,
    is_bestseller: true,
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
    description: 'Botella térmica de doble pared con aislamiento al vacío. Mantiene bebidas frías 24h y calientes 12h.',
    short_description: 'Botella térmica de acero inoxidable',
    base_price: 1299,
    sale_price: 1099,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 350,
    stock_status: 'in_stock',
    category_id: '5',
    brand: 'ThermoPro',
    material: 'Acero inoxidable 304',
    is_customizable: true,
    is_bestseller: false,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '5', image_url: '/images/cat-bottle.jpg', alt_text: 'Botella Térmica', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 50, max_quantity: 99, price: 1299 },
      { min_quantity: 100, max_quantity: 249, price: 1149 },
      { min_quantity: 250, max_quantity: 499, price: 999 },
      { min_quantity: 500, max_quantity: null, price: 899 },
    ]
  },
  {
    id: '6',
    sku: 'BOL-ESP-001',
    name: 'Set de Escritorio Ejecutivo',
    slug: 'set-escritorio-ejecutivo',
    description: 'Set completo de escritorio con bolígrafo, lápiz, regla y portaminas. Presentado en elegante estuche de cartón.',
    short_description: 'Set de escritorio premium',
    base_price: 899,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 600,
    stock_status: 'in_stock',
    category_id: '6',
    brand: 'OfficePro',
    material: 'Metal / Plástico',
    is_customizable: true,
    is_bestseller: false,
    is_eco: false,
    is_eu_made: true,
    images: [
      { id: '6', image_url: '/images/cat-pen.jpg', alt_text: 'Set Escritorio', is_primary: true, sort_order: 0 }
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
    description: 'Camiseta de algodón orgánico 180g/m². Corte moderno y acabados de alta calidad. Ideal para uniformes corporativos.',
    short_description: 'Camiseta de algodón orgánico',
    base_price: 1299,
    sale_price: null,
    min_quantity: 50,
    quantity_step: 10,
    stock_quantity: 1200,
    stock_status: 'in_stock',
    category_id: '7',
    brand: 'OrganicWear',
    material: 'Algodón orgánico 180g/m²',
    is_customizable: true,
    is_bestseller: true,
    is_eco: true,
    is_eu_made: true,
    images: [
      { id: '7', image_url: '/images/cat-tshirt.jpg', alt_text: 'Camiseta Orgánica', is_primary: true, sort_order: 0 }
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
    description: 'Mochila moderna con puerto USB integrado para cargar dispositivos. Compartimento acolchado para portátil.',
    short_description: 'Mochila con puerto USB',
    base_price: 2499,
    sale_price: 2199,
    min_quantity: 25,
    quantity_step: 5,
    stock_quantity: 200,
    stock_status: 'in_stock',
    category_id: '8',
    brand: 'TechBag',
    material: 'Poliéster 600D',
    is_customizable: true,
    is_bestseller: false,
    is_eco: false,
    is_eu_made: false,
    images: [
      { id: '8', image_url: '/images/cat-backpack.jpg', alt_text: 'Mochila USB', is_primary: true, sort_order: 0 }
    ],
    quantity_prices: [
      { min_quantity: 25, max_quantity: 49, price: 2499 },
      { min_quantity: 50, max_quantity: 99, price: 2199 },
      { min_quantity: 100, max_quantity: 249, price: 1999 },
      { min_quantity: 250, max_quantity: null, price: 1799 },
    ]
  },
];

// Mock Supabase client
export const supabase = {
  from: (table: string) => ({
    select: () => ({
      eq: (_column: string, value: any) => ({
        single: async () => {
          if (table === 'products') {
            const product = demoProducts.find(p => p.slug === value || p.id === value);
            return { data: product || null, error: product ? null : new Error('Not found') };
          }
          return { data: null, error: new Error('Not implemented') };
        },
        order: () => ({
          range: () => ({
            then: async (callback: any) => {
              if (table === 'products') {
                return callback({ data: demoProducts, error: null, count: demoProducts.length });
              }
              return callback({ data: [], error: null, count: 0 });
            }
          })
        })
      }),
      order: () => ({
        range: (from: number, to: number) => ({
          then: async (callback: any) => {
            if (table === 'products') {
              return callback({ data: demoProducts.slice(from, to + 1), error: null, count: demoProducts.length });
            }
            return callback({ data: [], error: null, count: 0 });
          }
        }),
        then: async (callback: any) => {
          if (table === 'products') {
            return callback({ data: demoProducts, error: null, count: demoProducts.length });
          }
          return callback({ data: [], error: null, count: 0 });
        }
      }),
      or: (query: string) => ({
        range: (from: number, to: number) => ({
          then: async (callback: any) => {
            if (table === 'products') {
              const searchTerm = query.match(/%(.+?)%/)?.[1] || '';
              const filtered = demoProducts.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.sku.toLowerCase().includes(searchTerm.toLowerCase())
              );
              return callback({ data: filtered.slice(from, to + 1), error: null, count: filtered.length });
            }
            return callback({ data: [], error: null, count: 0 });
          }
        })
      }),
      then: async (callback: any) => {
        if (table === 'products') {
          return callback({ data: demoProducts, error: null, count: demoProducts.length });
        }
        return callback({ data: [], error: null, count: 0 });
      }
    }),
    insert: (data: any) => ({
      select: () => ({
        single: async () => ({ data: { id: 'new-id', ...data }, error: null })
      })
    }),
    update: (data: any) => ({
      eq: () => ({
        select: () => ({
          single: async () => ({ data, error: null })
        })
      })
    }),
    delete: () => ({
      eq: async () => ({ error: null })
    })
  }),
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: null }),
    signUp: async () => ({ data: null, error: null }),
    signOut: async () => ({ error: null })
  }
};

// =============================================
// SERVICIO DE PRODUCTOS
// =============================================
export const ProductService = {
  async getAll(options: any = {}) {
    const { 
      page = 1, 
      limit = 20, 
      search = null
    } = options;

    let data = [...demoProducts];

    if (search) {
      const term = search.toLowerCase();
      data = data.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term)
      );
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

  async getBySlug(slug: string) {
    return demoProducts.find(p => p.slug === slug) || null;
  },

  calculatePrice(product: any, quantity: number) {
    if (!product.quantity_prices || product.quantity_prices.length === 0) {
      return product.base_price;
    }

    const applicablePrice = product.quantity_prices
      .filter((qp: any) => quantity >= qp.min_quantity && (!qp.max_quantity || quantity <= qp.max_quantity))
      .sort((a: any, b: any) => b.min_quantity - a.min_quantity)[0];

    return applicablePrice ? applicablePrice.price : product.base_price;
  }
};
