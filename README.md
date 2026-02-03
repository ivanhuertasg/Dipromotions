# diPromotions - Plataforma B2B de Artículos Promocionales

![diPromotions](https://img.shields.io/badge/version-1.0.0-red)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

Plataforma e-commerce B2B para venta de artículos promocionales personalizables.

## 🚀 Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 3.4 + Animaciones personalizadas
- **Routing**: React Router DOM 7
- **Estado**: Patrón Observer (CartService) + React Hooks
- **Build**: Vite 7
- **Backend**: Supabase (PostgreSQL) - Modo demo incluido
- **Hosting**: Cloudflare Pages

## 📁 Estructura del Proyecto

```
dipromotions/
├── public/
│   └── images/           # Imágenes estáticas
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── LanguageSelector.tsx   # Selector de idioma (modal)
│   │   ├── MiniCart.tsx           # Carrito en header
│   │   └── ProductCard.tsx        # Tarjeta de producto
│   ├── hooks/            # Custom hooks
│   │   └── useCart.ts             # Hook del carrito
│   ├── lib/              # Servicios y utilidades
│   │   ├── cart.ts                # CartService (localStorage)
│   │   ├── supabase.ts            # Supabase client + ProductService
│   │   └── utils.ts               # Utilidades generales
│   ├── pages/            # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   ├── Catalogo.tsx
│   │   ├── Producto.tsx
│   │   ├── Carrito.tsx
│   │   ├── Checkout.tsx
│   │   ├── Contacto.tsx
│   │   └── subpages.tsx           # Páginas de categorías
│   ├── sections/         # Secciones de layout
│   │   ├── TopBar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ... (secciones de home)
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globales + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone https://github.com/ivanhuertasg/dipromotions.git
cd dipromotions

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` basándote en `.env.example`:

```env
# Supabase (opcional - funciona en modo demo sin configurar)
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-anonima
```

### Base de Datos (Supabase)

Si quieres usar Supabase real:

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ejecuta el SQL de `database.sql`
3. Configura las variables de entorno

## 🎯 Características

### Sistema de Carrito
- ✅ Persistencia en localStorage
- ✅ Precios escalonados B2B (según cantidad)
- ✅ Cantidades mínimas por producto
- ✅ Cálculo automático de IVA (21%)
- ✅ Envío gratis en pedidos +500€
- ✅ Mini-carrito en header
- ✅ Página de carrito completa

### Selector de Idioma
- ✅ Modal overlay accesible
- ✅ 5 idiomas (ES, EN, FR, DE, PT)
- ✅ Persistencia en localStorage
- ✅ Animaciones fluidas

### Catálogo de Productos
- ✅ Grid/Lista responsive
- ✅ Filtros por categoría
- ✅ Búsqueda en tiempo real
- ✅ Badges (Eco, UE, Best Seller, etc.)
- ✅ Precios con descuento

### Checkout
- ✅ Proceso en 3 pasos
- ✅ Validación de formularios
- ✅ Múltiples métodos de pago
- ✅ Resumen del pedido

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter
```

## 🎨 Personalización

### Colores de Marca

Los colores principales están definidos en `index.css`:

```css
:root {
  --dipromotions-red: #e30614;
  --dipromotions-dark-red: #c7000b;
  --primary: 356 95% 45%;
}
```

### Fuentes

- **Montserrat**: Títulos
- **Open Sans**: Texto general

## 📱 Responsive

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menú móvil con animaciones

## 🔒 Seguridad

- Variables de entorno para credenciales
- Row Level Security en Supabase
- Validación de datos en frontend

## 📄 Licencia

Proprietary - Todos los derechos reservados.

## 👥 Contacto

- **Email**: pedidos@dipromotions.com
- **Teléfono**: +34 961 588 186
- **Web**: dipromotions.com
