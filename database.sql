-- =============================================
-- ESQUEMA DE BASE DE DATOS - diPromotions
-- =============================================
-- Este archivo contiene el esquema completo para PostgreSQL
-- Compatible con Supabase o cualquier base de datos PostgreSQL

-- =============================================
-- EXTENSIONES
-- =============================================
extension if not exists "uuid-ossp";

-- =============================================
-- TABLAS
-- =============================================

-- Categorías de productos
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(10),
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Productos
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  
  -- Precios (en céntimos)
  base_price INTEGER NOT NULL,
  sale_price INTEGER,
  
  -- Cantidades
  min_quantity INTEGER NOT NULL DEFAULT 1,
  quantity_step INTEGER NOT NULL DEFAULT 1,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  stock_status VARCHAR(20) DEFAULT 'in_stock', -- in_stock, out_of_stock, low_stock
  
  -- Categorización
  category_id UUID REFERENCES categories(id),
  brand VARCHAR(100),
  
  -- Especificaciones
  material VARCHAR(255),
  color VARCHAR(100),
  weight INTEGER, -- en gramos
  dimensions JSONB, -- {length, width, height} en cm
  
  -- Personalización
  is_customizable BOOLEAN DEFAULT false,
  customization_options TEXT[], -- ['Grabado láser', 'Serigrafía']
  print_areas TEXT[], -- ['Frontal', 'Trasera']
  
  -- Etiquetas
  is_bestseller BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  is_eco BOOLEAN DEFAULT false,
  is_eu_made BOOLEAN DEFAULT false,
  
  -- Estado
  is_active BOOLEAN DEFAULT true,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Imágenes de productos
CREATE TABLE IF NOT EXISTS product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255),
  is_primary BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Precios por cantidad (B2B)
CREATE TABLE IF NOT EXISTS product_quantity_prices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  min_quantity INTEGER NOT NULL,
  max_quantity INTEGER, -- NULL significa sin límite
  price INTEGER NOT NULL, -- en céntimos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clientes
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  company_name VARCHAR(255),
  vat_number VARCHAR(50),
  contact_name VARCHAR(255),
  phone VARCHAR(50),
  
  -- Dirección de facturación
  billing_address JSONB,
  
  -- Dirección de envío (puede ser diferente)
  shipping_address JSONB,
  
  -- Estado
  is_active BOOLEAN DEFAULT true,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pedidos
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id),
  
  -- Información de facturación
  billing_company_name VARCHAR(255),
  billing_vat_number VARCHAR(50),
  billing_contact_name VARCHAR(255),
  billing_email VARCHAR(255),
  billing_phone VARCHAR(50),
  billing_address JSONB,
  
  -- Información de envío
  shipping_company_name VARCHAR(255),
  shipping_contact_name VARCHAR(255),
  shipping_phone VARCHAR(50),
  shipping_address JSONB,
  
  -- Totales (en céntimos)
  subtotal INTEGER NOT NULL,
  shipping_cost INTEGER NOT NULL DEFAULT 0,
  tax_amount INTEGER NOT NULL,
  total INTEGER NOT NULL,
  
  -- Estado del pedido
  status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, processing, shipped, delivered, cancelled
  payment_status VARCHAR(50) DEFAULT 'pending', -- pending, paid, failed, refunded
  
  -- Notas
  customer_notes TEXT,
  internal_notes TEXT,
  
  -- Fechas
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed_at TIMESTAMP WITH TIME ZONE,
  shipped_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE
);

-- Items de pedidos
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  
  -- Copia de la información del producto (para historial)
  product_name VARCHAR(255) NOT NULL,
  product_sku VARCHAR(50) NOT NULL,
  product_image TEXT,
  
  -- Cantidad y precio
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL, -- en céntimos
  total_price INTEGER NOT NULL, -- en céntimos
  
  -- Personalización
  customization_data JSONB,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Configuración del sitio
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  type VARCHAR(20) DEFAULT 'string', -- string, number, boolean, json
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- ÍNDICES
-- =============================================

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_bestseller ON products(is_bestseller) WHERE is_bestseller = true;
CREATE INDEX IF NOT EXISTS idx_products_new ON products(is_new) WHERE is_new = true;
CREATE INDEX IF NOT EXISTS idx_products_eco ON products(is_eco) WHERE is_eco = true;
CREATE INDEX IF NOT EXISTS idx_products_eu_made ON products(is_eu_made) WHERE is_eu_made = true;

CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_quantity_prices_product ON product_quantity_prices(product_id);

CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at);

CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);

-- =============================================
-- FUNCIONES
-- =============================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para actualizar updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Función para generar número de pedido
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TEXT AS $$
DECLARE
  year TEXT;
  sequence_num INTEGER;
  order_num TEXT;
BEGIN
  year := TO_CHAR(NOW(), 'YYYY');
  
  -- Obtener el siguiente número de secuencia para este año
  SELECT COUNT(*) + 1 INTO sequence_num
  FROM orders
  WHERE EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM NOW());
  
  order_num := 'DP-' || year || '-' || LPAD(sequence_num::TEXT, 5, '0');
  
  RETURN order_num;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- DATOS INICIALES
-- =============================================

-- Categorías
INSERT INTO categories (name, slug, description, icon, sort_order) VALUES
('Tecnología', 'tecnologia', 'Productos tecnológicos y gadgets', '💻', 1),
('Bolsas', 'bolsas', 'Bolsas, mochilas y maletines', '👜', 2),
('Textil', 'textil', 'Ropa y accesorios textiles', '👕', 3),
('Congresos', 'congresos', 'Material para eventos y congresos', '🎫', 4),
('Hogar', 'hogar', 'Artículos para el hogar', '🏠', 5),
('Oficina', 'oficina', 'Material de oficina y escritorio', '✏️', 6),
('Ecológico', 'ecologico', 'Productos sostenibles y ecológicos', '🌱', 7)
ON CONFLICT (slug) DO NOTHING;

-- Configuración inicial
INSERT INTO site_settings (key, value, type, description) VALUES
('site_name', 'diPromotions', 'string', 'Nombre del sitio'),
('site_description', 'Productos promocionales de calidad', 'string', 'Descripción del sitio'),
('contact_email', 'pedidos@dipromotions.com', 'string', 'Email de contacto'),
('contact_phone', '+34 961 588 186', 'string', 'Teléfono de contacto'),
('free_shipping_threshold', '50000', 'number', 'Umbral para envío gratis (en céntimos)'),
('shipping_cost', '995', 'number', 'Costo de envío (en céntimos)'),
('tax_rate', '0.21', 'number', 'Tasa de impuestos (21% IVA)'),
('currency', 'EUR', 'string', 'Moneda'),
('maintenance_mode', 'false', 'boolean', 'Modo mantenimiento')
ON CONFLICT (key) DO NOTHING;

-- =============================================
-- POLÍTICAS DE SEGURIDAD (RLS) - Para Supabase
-- =============================================

-- Habilitar RLS en todas las tablas
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_quantity_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Políticas para lectura pública (productos, categorías)
CREATE POLICY "Allow public read access on categories" 
  ON categories FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read access on products" 
  ON products FOR SELECT TO anon, authenticated USING (is_active = true);

CREATE POLICY "Allow public read access on product_images" 
  ON product_images FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read access on product_quantity_prices" 
  ON product_quantity_prices FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read access on site_settings" 
  ON site_settings FOR SELECT TO anon, authenticated USING (true);

-- Políticas para usuarios autenticados (clientes y pedidos)
CREATE POLICY "Users can view own customer data" 
  ON customers FOR SELECT TO authenticated 
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own customer data" 
  ON customers FOR UPDATE TO authenticated 
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can view own orders" 
  ON orders FOR SELECT TO authenticated 
  USING (customer_id::text = auth.uid()::text);

CREATE POLICY "Users can create orders" 
  ON orders FOR INSERT TO authenticated 
  WITH CHECK (customer_id::text = auth.uid()::text);

CREATE POLICY "Users can view own order items" 
  ON order_items FOR SELECT TO authenticated 
  USING (order_id IN (SELECT id FROM orders WHERE customer_id::text = auth.uid()::text));

-- =============================================
-- VISTAS
-- =============================================

-- Vista de productos con información completa
CREATE OR REPLACE VIEW products_full AS
SELECT 
  p.*,
  c.name as category_name,
  c.slug as category_slug,
  (
    SELECT json_agg(json_build_object(
      'id', pi.id,
      'image_url', pi.image_url,
      'alt_text', pi.alt_text,
      'is_primary', pi.is_primary,
      'sort_order', pi.sort_order
    ) ORDER BY pi.sort_order)
    FROM product_images pi
    WHERE pi.product_id = p.id
  ) as images,
  (
    SELECT json_agg(json_build_object(
      'min_quantity', pqp.min_quantity,
      'max_quantity', pqp.max_quantity,
      'price', pqp.price
    ) ORDER BY pqp.min_quantity)
    FROM product_quantity_prices pqp
    WHERE pqp.product_id = p.id
  ) as quantity_prices
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
WHERE p.is_active = true;

-- =============================================
-- COMENTARIOS
-- =============================================

COMMENT ON TABLE categories IS 'Categorías de productos';
COMMENT ON TABLE products IS 'Catálogo de productos promocionales';
COMMENT ON TABLE product_images IS 'Imágenes de productos';
COMMENT ON TABLE product_quantity_prices IS 'Precios escalonados por cantidad (B2B)';
COMMENT ON TABLE customers IS 'Clientes registrados';
COMMENT ON TABLE orders IS 'Pedidos de clientes';
COMMENT ON TABLE order_items IS 'Items de cada pedido';
COMMENT ON TABLE site_settings IS 'Configuración del sitio';
