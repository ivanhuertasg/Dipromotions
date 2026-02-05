// =============================================
// CONTEXT DE IDIOMA - diPromotions
// =============================================

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// =============================================
// TIPOS Y CONFIGURACIÓN
// =============================================
export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt';

export const supportedLanguages = [
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
];

export const defaultLanguage: Language = 'es';

// =============================================
// TRADUCCIONES INTEGRADAS
// =============================================
export const translations: Record<Language, Record<string, unknown>> = {
  es: {
    general: {
      back: 'Volver al inicio',
      error: 'Error',
      loading: 'Cargando...',
      save: 'Guardar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      delete: 'Eliminar',
      edit: 'Editar',
      search: 'Buscar',
      noResults: 'No se encontraron resultados',
      viewAll: 'Ver todos',
      readMore: 'Leer más',
    },
    nav: {
      home: 'Inicio',
      catalog: 'Catálogo',
      contact: 'Contacto',
      cart: 'Carrito',
      categories: 'Categorías',
      about: 'Nosotros',
    },
    categories: {
      bestSeller: 'Best Seller',
      yourchoice: 'Yourchoice',
      fabricadoUE: 'Fabricado en UE',
      reciclado: 'Reciclado',
      usbStock: 'USB Stock',
      outlet: 'Outlet',
      especiales: 'Especiales',
      promociones: 'Promociones',
      novedades: 'Novedades',
    },
    hero: {
      slide1: {
        title: 'Lanyard sublimados',
        subtitle: 'Hechos a medida con diseño full color de alta calidad',
        cta: 'Lanyards sublimados',
      },
      slide2: {
        title: 'Uniformes médicos',
        subtitle: 'Conoce nuestra amplia variedad de prendas para profesionales de la salud',
        cta: 'Casaca | Bata',
      },
    },
    home: {
      hero: {
        title: 'Artículos Promocionales',
        subtitle: 'Personalizados para tu empresa',
        cta: 'Ver Catálogo',
      },
      featuredProducts: 'Productos Destacados',
      categories: 'Categorías',
      newArrivals: 'Novedades',
      bestSellers: 'Los Más Vendidos',
    },
    catalog: {
      title: 'Catálogo',
      filters: 'Filtros',
      sortBy: 'Ordenar por',
      priceRange: 'Rango de precio',
      categories: 'Categorías',
      clearFilters: 'Limpiar filtros',
      noResults: 'No se encontraron productos',
      viewDetails: 'Ver detalles',
      addToCart: 'Añadir al carrito',
      minQuantity: 'Cantidad mínima',
      inStock: 'En stock',
      outOfStock: 'Agotado',
      eco: 'Eco',
      euMade: 'UE',
      newest: 'Nuevo',
    },
    product: {
      description: 'Descripción',
      specifications: 'Especificaciones',
      customization: 'Personalización',
      relatedProducts: 'Productos relacionados',
      quantity: 'Cantidad',
      unitPrice: 'Precio unitario',
      total: 'Total',
      addToCart: 'Añadir al carrito',
      buyNow: 'Comprar ahora',
      sku: 'Referencia',
      material: 'Material',
      dimensions: 'Dimensiones',
      weight: 'Peso',
      colors: 'Colores disponibles',
      printArea: 'Área de impresión',
    },
    cart: {
      title: 'Carrito de Compra',
      empty: 'Tu carrito está vacío',
      emptyMessage: 'Añade productos para comenzar',
      continueShopping: 'Continuar comprando',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      freeShipping: 'Envío gratis',
      tax: 'IVA (21%)',
      total: 'Total',
      checkout: 'Finalizar compra',
      remove: 'Eliminar',
      update: 'Actualizar',
      itemAdded: 'añadido al carrito',
      itemRemoved: 'eliminado del carrito',
      quantityUpdated: 'Cantidad actualizada',
    },
    checkout: {
      title: 'Finalizar Compra',
      contactInfo: 'Información de contacto',
      shippingAddress: 'Dirección de envío',
      billingAddress: 'Dirección de facturación',
      paymentMethod: 'Método de pago',
      orderSummary: 'Resumen del pedido',
      placeOrder: 'Realizar pedido',
      processing: 'Procesando...',
      success: '¡Pedido realizado!',
      error: 'Error al procesar el pedido',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarte',
      form: {
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        company: 'Empresa',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        success: 'Mensaje enviado correctamente',
        error: 'Error al enviar el mensaje',
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        hours: 'Horario',
      },
    },
    footer: {
      company: 'Empresa',
      products: 'Productos',
      support: 'Soporte',
      legal: 'Legal',
      newsletter: 'Newsletter',
      newsletterText: 'Suscríbete para recibir ofertas',
      subscribe: 'Suscribirse',
      copyright: '© 2024 diPromotions. Todos los derechos reservados.',
      tagline: {
        always: 'Siempre',
        unique: 'tu producto único',
      },
      description1: 'En diPromotions nos especializamos en artículos promocionales personalizados de alta calidad. Con más de 20 años de experiencia, ayudamos a empresas a destacar su marca.',
      description2: 'Ofrecemos una amplia gama de productos personalizables, desde textil hasta tecnología, con el mejor servicio y asesoramiento profesional.',
      services: 'Nuestros servicios',
      help: '¿Podemos ayudarte?',
      schedule: {
        weekdays: 'Lun - Vie: 9:00 - 18:00',
        weekend: 'Sáb - Dom: Cerrado',
      },
      social: 'Síguenos en redes',
      privacy: 'Política de privacidad',
      contact: 'Contacto',
    },
    language: {
      title: 'Seleccionar Idioma',
      subtitle: 'Tu preferencia se guardará',
      saved: 'Idioma guardado',
    },
    pages: {
      bestSeller: {
        title: 'Best Seller',
        subtitle: 'Los productos más vendidos de nuestra colección',
        description: 'Descubre los productos promocionales que más éxito tienen entre nuestros clientes. Artículos de calidad probada que garantizan satisfacción.',
      },
      fabricadoUE: {
        title: 'Fabricado en UE',
        subtitle: 'Productos fabricados en la Unión Europea',
        description: 'Todos nuestros productos fabricados en la UE cumplen con los más altos estándares de calidad y normativas europeas. Apoya la industria local con productos de proximidad.',
      },
      reciclado: {
        title: 'Productos Reciclados',
        subtitle: 'Compromiso con el medio ambiente',
        description: 'Nuestra línea de productos reciclados está diseñada para reducir el impacto ambiental. Materiales sostenibles sin comprometer la calidad.',
      },
      usbStock: {
        title: 'USB Stock',
        subtitle: 'Memorias USB con entrega inmediata',
        description: 'Amplia variedad de memorias USB disponibles en stock para entrega rápida. Desde modelos básicos hasta opciones premium con gran capacidad.',
      },
      outlet: {
        title: 'Outlet',
        subtitle: 'Ofertas especiales y liquidaciones',
        description: 'Aprovecha nuestras ofertas exclusivas en productos seleccionados. Stock limitado a precios irresistibles.',
      },
      especiales: {
        title: 'Especiales',
        subtitle: 'Productos para ocasiones especiales',
        description: 'Colección exclusiva de productos diseñados para eventos especiales, congresos y celebraciones importantes.',
      },
      promociones: {
        title: 'Promociones',
        subtitle: 'Descuentos y ofertas del mes',
        description: 'Descubre nuestras promociones activas. Descuentos especiales en productos seleccionados durante tiempo limitado.',
      },
      congresos: {
        title: 'Congresos',
        subtitle: 'Productos para eventos y congresos',
        description: 'Soluciones completas para congresos, ferias y eventos corporativos. Desde lanyards hasta kits de bienvenida personalizados.',
      },
      novedades: {
        title: 'Novedades',
        subtitle: 'Descubre lo último en productos promocionales',
        description: 'Mantente al día con nuestras últimas incorporaciones. Nuevos productos cada semana para sorprender a tus clientes.',
      },
      navidad: {
        title: 'Navidad',
        subtitle: 'Colección especial de Navidad',
        description: 'Encuentra el regalo corporativo perfecto para esta Navidad. Productos especiales para sorprender a tus clientes y empleados.',
      },
      yourchoice: {
        title: 'Yourchoice',
        subtitle: 'Personalización a tu medida',
        description: 'Con Yourchoice puedes crear productos únicos y personalizados. Desde el diseño hasta el acabado, tú decides cada detalle.',
      },
      notaLegal: {
        title: 'Nota Legal',
        description: 'Información legal sobre el uso de nuestra web y condiciones de servicio.',
        section1: {
          title: 'Información General',
          content: 'En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, le informamos que el titular de esta web es DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.',
        },
        section2: {
          title: 'Condiciones de Uso',
          content: 'El acceso y uso de este sitio web atribuye la condición de usuario, y se entiende que acepta las condiciones de uso establecidas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos.',
        },
        section3: {
          title: 'Propiedad Intelectual',
          content: 'Todos los contenidos de esta web, incluyendo imágenes, textos, gráficos y logotipos, son propiedad de DIPROMOTIONS o se utilizan con autorización de sus respectivos propietarios.',
        },
        section4: {
          title: 'Protección de Datos',
          content: 'Los datos personales proporcionados serán tratados de conformidad con el Reglamento General de Protección de Datos (RGPD). Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad.',
        },
      },
    },
  },
  en: {
    general: {
      back: 'Back to home',
      error: 'Error',
      loading: 'Loading...',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      search: 'Search',
      noResults: 'No results found',
      viewAll: 'View all',
      readMore: 'Read more',
    },
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      contact: 'Contact',
      cart: 'Cart',
      categories: 'Categories',
      about: 'About',
    },
    categories: {
      bestSeller: 'Best Seller',
      yourchoice: 'Yourchoice',
      fabricadoUE: 'EU Made',
      reciclado: 'Recycled',
      usbStock: 'USB Stock',
      outlet: 'Outlet',
      especiales: 'Special',
      promociones: 'Promotions',
      novedades: 'New',
    },
    hero: {
      slide1: {
        title: 'Sublimated Lanyards',
        subtitle: 'Custom made with high quality full color design',
        cta: 'Sublimated Lanyards',
      },
      slide2: {
        title: 'Medical Uniforms',
        subtitle: 'Discover our wide variety of garments for healthcare professionals',
        cta: 'Coat | Gown',
      },
    },
    home: {
      hero: {
        title: 'Promotional Items',
        subtitle: 'Customized for your business',
        cta: 'View Catalog',
      },
      featuredProducts: 'Featured Products',
      categories: 'Categories',
      newArrivals: 'New Arrivals',
      bestSellers: 'Best Sellers',
    },
    catalog: {
      title: 'Catalog',
      filters: 'Filters',
      sortBy: 'Sort by',
      priceRange: 'Price range',
      categories: 'Categories',
      clearFilters: 'Clear filters',
      noResults: 'No products found',
      viewDetails: 'View details',
      addToCart: 'Add to cart',
      minQuantity: 'Minimum quantity',
      inStock: 'In stock',
      outOfStock: 'Out of stock',
      eco: 'Eco',
      euMade: 'EU',
      newest: 'New',
    },
    product: {
      description: 'Description',
      specifications: 'Specifications',
      customization: 'Customization',
      relatedProducts: 'Related products',
      quantity: 'Quantity',
      unitPrice: 'Unit price',
      total: 'Total',
      addToCart: 'Add to cart',
      buyNow: 'Buy now',
      sku: 'SKU',
      material: 'Material',
      dimensions: 'Dimensions',
      weight: 'Weight',
      colors: 'Available colors',
      printArea: 'Print area',
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      emptyMessage: 'Add products to get started',
      continueShopping: 'Continue shopping',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      freeShipping: 'Free shipping',
      tax: 'Tax (21%)',
      total: 'Total',
      checkout: 'Checkout',
      remove: 'Remove',
      update: 'Update',
      itemAdded: 'added to cart',
      itemRemoved: 'removed from cart',
      quantityUpdated: 'Quantity updated',
    },
    checkout: {
      title: 'Checkout',
      contactInfo: 'Contact information',
      shippingAddress: 'Shipping address',
      billingAddress: 'Billing address',
      paymentMethod: 'Payment method',
      orderSummary: 'Order summary',
      placeOrder: 'Place order',
      processing: 'Processing...',
      success: 'Order placed!',
      error: 'Error processing order',
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are here to help',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        message: 'Message',
        submit: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully',
        error: 'Error sending message',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
      },
    },
    footer: {
      company: 'Company',
      products: 'Products',
      support: 'Support',
      legal: 'Legal',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe for offers',
      subscribe: 'Subscribe',
      copyright: '© 2024 diPromotions. All rights reserved.',
      tagline: {
        always: 'Always',
        unique: 'your unique product',
      },
      description1: 'At diPromotions we specialize in high-quality personalized promotional items. With over 20 years of experience, we help companies stand out their brand.',
      description2: 'We offer a wide range of customizable products, from textiles to technology, with the best service and professional advice.',
      services: 'Our services',
      help: 'Can we help?',
      schedule: {
        weekdays: 'Mon - Fri: 9:00 AM - 6:00 PM',
        weekend: 'Sat - Sun: Closed',
      },
      social: 'Follow us',
      privacy: 'Privacy policy',
      contact: 'Contact',
    },
    language: {
      title: 'Select Language',
      subtitle: 'Your preference will be saved',
      saved: 'Language saved',
    },
    pages: {
      bestSeller: {
        title: 'Best Seller',
        subtitle: 'The best-selling products in our collection',
        description: 'Discover the promotional products that are most successful among our customers. Proven quality items that guarantee satisfaction.',
      },
      fabricadoUE: {
        title: 'EU Made',
        subtitle: 'Products manufactured in the European Union',
        description: 'All our products manufactured in the EU meet the highest quality standards and European regulations. Support local industry with proximity products.',
      },
      reciclado: {
        title: 'Recycled Products',
        subtitle: 'Commitment to the environment',
        description: 'Our line of recycled products is designed to reduce environmental impact. Sustainable materials without compromising quality.',
      },
      usbStock: {
        title: 'USB Stock',
        subtitle: 'USB drives with immediate delivery',
        description: 'Wide variety of USB drives available in stock for fast delivery. From basic models to premium options with large capacity.',
      },
      outlet: {
        title: 'Outlet',
        subtitle: 'Special offers and clearances',
        description: 'Take advantage of our exclusive offers on selected products. Limited stock at irresistible prices.',
      },
      especiales: {
        title: 'Special',
        subtitle: 'Products for special occasions',
        description: 'Exclusive collection of products designed for special events, congresses and important celebrations.',
      },
      promociones: {
        title: 'Promotions',
        subtitle: 'Discounts and offers of the month',
        description: 'Discover our active promotions. Special discounts on selected products for a limited time.',
      },
      congresos: {
        title: 'Congresses',
        subtitle: 'Products for events and congresses',
        description: 'Complete solutions for congresses, fairs and corporate events. From lanyards to personalized welcome kits.',
      },
      novedades: {
        title: 'New',
        subtitle: 'Discover the latest in promotional products',
        description: 'Stay up to date with our latest additions. New products every week to surprise your customers.',
      },
      navidad: {
        title: 'Christmas',
        subtitle: 'Special Christmas collection',
        description: 'Find the perfect corporate gift for this Christmas. Special products to surprise your customers and employees.',
      },
      yourchoice: {
        title: 'Yourchoice',
        subtitle: 'Personalization to your measure',
        description: 'With Yourchoice you can create unique and personalized products. From design to finish, you decide every detail.',
      },
      notaLegal: {
        title: 'Legal Notice',
        description: 'Legal information about the use of our website and terms of service.',
        section1: {
          title: 'General Information',
          content: 'In compliance with Law 34/2002, of July 11, on information society services and electronic commerce, we inform you that the owner of this website is DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.',
        },
        section2: {
          title: 'Terms of Use',
          content: 'Access to and use of this website confers the status of user, and it is understood that you accept the established terms of use. The user agrees to make proper use of the contents and services offered.',
        },
        section3: {
          title: 'Intellectual Property',
          content: 'All contents of this website, including images, texts, graphics and logos, are the property of DIPROMOTIONS or are used with authorization from their respective owners.',
        },
        section4: {
          title: 'Data Protection',
          content: 'Personal data provided will be processed in accordance with the General Data Protection Regulation (GDPR). You can exercise your rights of access, rectification, deletion, opposition, limitation and portability.',
        },
      },
    },
  },
  fr: {
    general: {
      back: 'Retour à l\'accueil',
      error: 'Erreur',
      loading: 'Chargement...',
      save: 'Enregistrer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      delete: 'Supprimer',
      edit: 'Modifier',
      search: 'Rechercher',
      noResults: 'Aucun résultat',
      viewAll: 'Voir tout',
      readMore: 'Lire plus',
    },
    nav: {
      home: 'Accueil',
      catalog: 'Catalogue',
      contact: 'Contact',
      cart: 'Panier',
      categories: 'Catégories',
      about: 'À propos',
    },
    categories: {
      bestSeller: 'Best Seller',
      yourchoice: 'Yourchoice',
      fabricadoUE: 'Fabriqué en UE',
      reciclado: 'Recyclé',
      usbStock: 'USB Stock',
      outlet: 'Outlet',
      especiales: 'Spéciaux',
      promociones: 'Promotions',
      novedades: 'Nouveautés',
    },
    hero: {
      slide1: {
        title: 'Lanyards sublimés',
        subtitle: 'Faits sur mesure avec un design full color de haute qualité',
        cta: 'Lanyards sublimés',
      },
      slide2: {
        title: 'Uniformes médicaux',
        subtitle: 'Découvrez notre large gamme de vêtements pour les professionnels de la santé',
        cta: 'Blouse | Tunique',
      },
    },
    home: {
      hero: {
        title: 'Articles Promotionnels',
        subtitle: 'Personnalisés pour votre entreprise',
        cta: 'Voir le Catalogue',
      },
      featuredProducts: 'Produits en Vedette',
      categories: 'Catégories',
      newArrivals: 'Nouveautés',
      bestSellers: 'Meilleures Ventes',
    },
    catalog: {
      title: 'Catalogue',
      filters: 'Filtres',
      sortBy: 'Trier par',
      priceRange: 'Gamme de prix',
      categories: 'Catégories',
      clearFilters: 'Effacer les filtres',
      noResults: 'Aucun produit trouvé',
      viewDetails: 'Voir les détails',
      addToCart: 'Ajouter au panier',
      minQuantity: 'Quantité minimum',
      inStock: 'En stock',
      outOfStock: 'Rupture de stock',
      eco: 'Éco',
      euMade: 'UE',
      newest: 'Nouveau',
    },
    product: {
      description: 'Description',
      specifications: 'Spécifications',
      customization: 'Personnalisation',
      relatedProducts: 'Produits similaires',
      quantity: 'Quantité',
      unitPrice: 'Prix unitaire',
      total: 'Total',
      addToCart: 'Ajouter au panier',
      buyNow: 'Acheter maintenant',
      sku: 'Référence',
      material: 'Matériau',
      dimensions: 'Dimensions',
      weight: 'Poids',
      colors: 'Couleurs disponibles',
      printArea: 'Zone d\'impression',
    },
    cart: {
      title: 'Panier',
      empty: 'Votre panier est vide',
      emptyMessage: 'Ajoutez des produits',
      continueShopping: 'Continuer les achats',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      freeShipping: 'Livraison gratuite',
      tax: 'TVA (21%)',
      total: 'Total',
      checkout: 'Commander',
      remove: 'Supprimer',
      update: 'Mettre à jour',
      itemAdded: 'ajouté au panier',
      itemRemoved: 'retiré du panier',
      quantityUpdated: 'Quantité mise à jour',
    },
    checkout: {
      title: 'Commander',
      contactInfo: 'Informations de contact',
      shippingAddress: 'Adresse de livraison',
      billingAddress: 'Adresse de facturation',
      paymentMethod: 'Mode de paiement',
      orderSummary: 'Résumé de la commande',
      placeOrder: 'Passer la commande',
      processing: 'Traitement...',
      success: 'Commande passée!',
      error: 'Erreur lors du traitement',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Nous sommes là pour vous aider',
      form: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        company: 'Entreprise',
        message: 'Message',
        submit: 'Envoyer',
        sending: 'Envoi...',
        success: 'Message envoyé',
        error: 'Erreur d\'envoi',
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Horaires',
      },
    },
    footer: {
      company: 'Entreprise',
      products: 'Produits',
      support: 'Support',
      legal: 'Mentions légales',
      newsletter: 'Newsletter',
      newsletterText: 'Abonnez-vous aux offres',
      subscribe: 'S\'abonner',
      copyright: '© 2024 diPromotions. Tous droits réservés.',
      tagline: {
        always: 'Toujours',
        unique: 'votre produit unique',
      },
      description1: 'Chez diPromotions, nous nous spécialisons dans les articles promotionnels personnalisés de haute qualité. Avec plus de 20 ans d\'expérience, nous aidons les entreprises à mettre en valeur leur marque.',
      description2: 'Nous offrons une large gamme de produits personnalisables, du textile à la technologie, avec le meilleur service et des conseils professionnels.',
      services: 'Nos services',
      help: 'Pouvons-nous vous aider ?',
      schedule: {
        weekdays: 'Lun - Ven : 9h00 - 18h00',
        weekend: 'Sam - Dim : Fermé',
      },
      social: 'Suivez-nous',
      privacy: 'Politique de confidentialité',
      contact: 'Contact',
    },
    language: {
      title: 'Sélectionner la Langue',
      subtitle: 'Votre préférence sera enregistrée',
      saved: 'Langue enregistrée',
    },
    pages: {
      bestSeller: {
        title: 'Best Seller',
        subtitle: 'Les produits les plus vendus de notre collection',
        description: 'Découvrez les produits promotionnels qui connaissent le plus de succès auprès de nos clients. Articles de qualité éprouvée garantissant la satisfaction.',
      },
      fabricadoUE: {
        title: 'Fabriqué en UE',
        subtitle: 'Produits fabriqués dans l\'Union Européenne',
        description: 'Tous nos produits fabriqués dans l\'UE respectent les normes de qualité les plus élevées et les réglementations européennes. Soutenez l\'industrie locale avec des produits de proximité.',
      },
      reciclado: {
        title: 'Produits Recyclés',
        subtitle: 'Engagement envers l\'environnement',
        description: 'Notre gamme de produits recyclés est conçue pour réduire l\'impact environnemental. Matériaux durables sans compromettre la qualité.',
      },
      usbStock: {
        title: 'USB Stock',
        subtitle: 'Clés USB avec livraison immédiate',
        description: 'Large gamme de clés USB disponibles en stock pour une livraison rapide. Des modèles basiques aux options premium de grande capacité.',
      },
      outlet: {
        title: 'Outlet',
        subtitle: 'Offres spéciales et liquidations',
        description: 'Profitez de nos offres exclusives sur des produits sélectionnés. Stock limité à des prix irrésistibles.',
      },
      especiales: {
        title: 'Spéciaux',
        subtitle: 'Produits pour occasions spéciales',
        description: 'Collection exclusive de produits conçus pour des événements spéciaux, des congrès et des célébrations importantes.',
      },
      promociones: {
        title: 'Promotions',
        subtitle: 'Réductions et offres du mois',
        description: 'Découvrez nos promotions actives. Réductions spéciales sur des produits sélectionnés pour une durée limitée.',
      },
      congresos: {
        title: 'Congrès',
        subtitle: 'Produits pour événements et congrès',
        description: 'Solutions complètes pour congrès, foires et événements d\'entreprise. Des lanyards aux kits de bienvenue personnalisés.',
      },
      novedades: {
        title: 'Nouveautés',
        subtitle: 'Découvrez les derniers produits promotionnels',
        description: 'Restez à jour avec nos dernières nouveautés. Nouveaux produits chaque semaine pour surprendre vos clients.',
      },
      navidad: {
        title: 'Noël',
        subtitle: 'Collection spéciale de Noël',
        description: 'Trouvez le cadeau d\'entreprise parfait pour ce Noël. Produits spéciaux pour surprendre vos clients et employés.',
      },
      yourchoice: {
        title: 'Yourchoice',
        subtitle: 'Personnalisation sur mesure',
        description: 'Avec Yourchoice, vous pouvez créer des produits uniques et personnalisés. Du design à la finition, vous décidez de chaque détail.',
      },
      notaLegal: {
        title: 'Mentions Légales',
        description: 'Informations légales sur l\'utilisation de notre site web et conditions de service.',
        section1: {
          title: 'Informations Générales',
          content: 'Conformément à la loi 34/2002 du 11 juillet sur les services de la société de l\'information et le commerce électronique, nous vous informons que le propriétaire de ce site web est DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.',
        },
        section2: {
          title: 'Conditions d\'Utilisation',
          content: 'L\'accès et l\'utilisation de ce site web confèrent la qualité d\'utilisateur, et il est entendu que vous acceptez les conditions d\'utilisation établies. L\'utilisateur s\'engage à faire un usage approprié des contenus et services offerts.',
        },
        section3: {
          title: 'Propriété Intellectuelle',
          content: 'Tous les contenus de ce site web, y compris les images, textes, graphiques et logos, sont la propriété de DIPROMOTIONS ou sont utilisés avec l\'autorisation de leurs propriétaires respectifs.',
        },
        section4: {
          title: 'Protection des Données',
          content: 'Les données personnelles fournies seront traitées conformément au Règlement Général sur la Protection des Données (RGPD). Vous pouvez exercer vos droits d\'accès, de rectification, de suppression, d\'opposition, de limitation et de portabilité.',
        },
      },
    },
  },
  de: {
    general: {
      back: 'Zurück zur Startseite',
      error: 'Fehler',
      loading: 'Laden...',
      save: 'Speichern',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      search: 'Suchen',
      noResults: 'Keine Ergebnisse',
      viewAll: 'Alle anzeigen',
      readMore: 'Mehr lesen',
    },
    nav: {
      home: 'Startseite',
      catalog: 'Katalog',
      contact: 'Kontakt',
      cart: 'Warenkorb',
      categories: 'Kategorien',
      about: 'Über uns',
    },
    categories: {
      bestSeller: 'Best Seller',
      yourchoice: 'Yourchoice',
      fabricadoUE: 'EU-Herstellung',
      reciclado: 'Recycelt',
      usbStock: 'USB Stock',
      outlet: 'Outlet',
      especiales: 'Besondere',
      promociones: 'Aktionen',
      novedades: 'Neuheiten',
    },
    hero: {
      slide1: {
        title: 'Sublimierte Lanyards',
        subtitle: 'Maßgefertigt mit hochwertigem Vollfarb-Design',
        cta: 'Sublimierte Lanyards',
      },
      slide2: {
        title: 'Medizinische Uniformen',
        subtitle: 'Entdecken Sie unsere große Auswahl an Kleidung für Gesundheitsfachkräfte',
        cta: 'Kittel | Kasack',
      },
    },
    home: {
      hero: {
        title: 'Werbeartikel',
        subtitle: 'Personalisiert für Ihr Unternehmen',
        cta: 'Katalog ansehen',
      },
      featuredProducts: 'Ausgewählte Produkte',
      categories: 'Kategorien',
      newArrivals: 'Neuheiten',
      bestSellers: 'Bestseller',
    },
    catalog: {
      title: 'Katalog',
      filters: 'Filter',
      sortBy: 'Sortieren nach',
      priceRange: 'Preisbereich',
      categories: 'Kategorien',
      clearFilters: 'Filter löschen',
      noResults: 'Keine Produkte gefunden',
      viewDetails: 'Details anzeigen',
      addToCart: 'In den Warenkorb',
      minQuantity: 'Mindestmenge',
      inStock: 'Auf Lager',
      outOfStock: 'Ausverkauft',
      eco: 'Öko',
      euMade: 'EU',
      newest: 'Neu',
    },
    product: {
      description: 'Beschreibung',
      specifications: 'Spezifikationen',
      customization: 'Personalisierung',
      relatedProducts: 'Ähnliche Produkte',
      quantity: 'Menge',
      unitPrice: 'Stückpreis',
      total: 'Gesamt',
      addToCart: 'In den Warenkorb',
      buyNow: 'Jetzt kaufen',
      sku: 'Artikelnummer',
      material: 'Material',
      dimensions: 'Abmessungen',
      weight: 'Gewicht',
      colors: 'Verfügbare Farben',
      printArea: 'Druckbereich',
    },
    cart: {
      title: 'Warenkorb',
      empty: 'Ihr Warenkorb ist leer',
      emptyMessage: 'Fügen Sie Produkte hinzu',
      continueShopping: 'Weiter einkaufen',
      subtotal: 'Zwischensumme',
      shipping: 'Versand',
      freeShipping: 'Kostenloser Versand',
      tax: 'MwSt (21%)',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
      remove: 'Entfernen',
      update: 'Aktualisieren',
      itemAdded: 'zum Warenkorb hinzugefügt',
      itemRemoved: 'aus dem Warenkorb entfernt',
      quantityUpdated: 'Menge aktualisiert',
    },
    checkout: {
      title: 'Kasse',
      contactInfo: 'Kontaktdaten',
      shippingAddress: 'Lieferadresse',
      billingAddress: 'Rechnungsadresse',
      paymentMethod: 'Zahlungsmethode',
      orderSummary: 'Bestellübersicht',
      placeOrder: 'Bestellung aufgeben',
      processing: 'Verarbeitung...',
      success: 'Bestellung aufgegeben!',
      error: 'Fehler bei der Verarbeitung',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Wir sind hier um zu helfen',
      form: {
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        company: 'Firma',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Nachricht gesendet',
        error: 'Fehler beim Senden',
      },
      info: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        hours: 'Öffnungszeiten',
      },
    },
    footer: {
      company: 'Unternehmen',
      products: 'Produkte',
      support: 'Support',
      legal: 'Rechtliches',
      newsletter: 'Newsletter',
      newsletterText: 'Für Angebote abonnieren',
      subscribe: 'Abonnieren',
      copyright: '© 2024 diPromotions. Alle Rechte vorbehalten.',
      tagline: {
        always: 'Immer',
        unique: 'Ihr einzigartiges Produkt',
      },
      description1: 'Bei diPromotions spezialisieren wir uns auf hochwertige personalisierte Werbeartikel. Mit über 20 Jahren Erfahrung helfen wir Unternehmen, ihre Marke hervorzuheben.',
      description2: 'Wir bieten eine breite Palette an personalisierbaren Produkten, von Textilien bis Technologie, mit bestem Service und professioneller Beratung.',
      services: 'Unsere Dienstleistungen',
      help: 'Können wir helfen?',
      schedule: {
        weekdays: 'Mo - Fr: 9:00 - 18:00 Uhr',
        weekend: 'Sa - So: Geschlossen',
      },
      social: 'Folgen Sie uns',
      privacy: 'Datenschutz',
      contact: 'Kontakt',
    },
    language: {
      title: 'Sprache auswählen',
      subtitle: 'Ihre Auswahl wird gespeichert',
      saved: 'Sprache gespeichert',
    },
    pages: {
      bestSeller: {
        title: 'Best Seller',
        subtitle: 'Die meistverkauften Produkte unserer Kollektion',
        description: 'Entdecken Sie die Werbeartikel, die bei unseren Kunden am erfolgreichsten sind. Produkte mit bewährter Qualität, die Zufriedenheit garantieren.',
      },
      fabricadoUE: {
        title: 'EU-Herstellung',
        subtitle: 'In der Europäischen Union hergestellte Produkte',
        description: 'Alle unsere in der EU hergestellten Produkte erfüllen höchste Qualitätsstandards und europäische Vorschriften. Unterstützen Sie die lokale Industrie mit regionalen Produkten.',
      },
      reciclado: {
        title: 'Recycelte Produkte',
        subtitle: 'Engagement für die Umwelt',
        description: 'Unsere Linie recycelter Produkte ist darauf ausgelegt, die Umweltbelastung zu reduzieren. Nachhaltige Materialien ohne Qualitätseinbußen.',
      },
      usbStock: {
        title: 'USB Stock',
        subtitle: 'USB-Sticks mit sofortiger Lieferung',
        description: 'Große Auswahl an USB-Sticks auf Lager für schnelle Lieferung. Von Basismodellen bis zu Premium-Optionen mit großer Kapazität.',
      },
      outlet: {
        title: 'Outlet',
        subtitle: 'Sonderangebote und Ausverkäufe',
        description: 'Nutzen Sie unsere exklusiven Angebote für ausgewählte Produkte. Begrenzter Bestand zu unschlagbaren Preisen.',
      },
      especiales: {
        title: 'Besondere',
        subtitle: 'Produkte für besondere Anlässe',
        description: 'Exklusive Kollektion von Produkten für besondere Events, Kongresse und wichtige Feierlichkeiten.',
      },
      promociones: {
        title: 'Aktionen',
        subtitle: 'Rabatte und Angebote des Monats',
        description: 'Entdecken Sie unsere aktiven Aktionen. Sonderrabatte auf ausgewählte Produkte für begrenzte Zeit.',
      },
      congresos: {
        title: 'Kongresse',
        subtitle: 'Produkte für Events und Kongresse',
        description: 'Komplettlösungen für Kongresse, Messen und Firmenevents. Von Lanyards bis zu personalisierten Willkommenspaketen.',
      },
      novedades: {
        title: 'Neuheiten',
        subtitle: 'Entdecken Sie die neuesten Werbeartikel',
        description: 'Bleiben Sie auf dem Laufenden mit unseren neuesten Ergänzungen. Neue Produkte jede Woche, um Ihre Kunden zu überraschen.',
      },
      navidad: {
        title: 'Weihnachten',
        subtitle: 'Spezielle Weihnachtskollektion',
        description: 'Finden Sie das perfekte Firmengeschenk für diese Weihnachten. Spezielle Produkte, um Ihre Kunden und Mitarbeiter zu überraschen.',
      },
      yourchoice: {
        title: 'Yourchoice',
        subtitle: 'Personalisierung nach Maß',
        description: 'Mit Yourchoice können Sie einzigartige und personalisierte Produkte erstellen. Vom Design bis zur Fertigstellung entscheiden Sie jedes Detail.',
      },
      notaLegal: {
        title: 'Rechtliche Hinweise',
        description: 'Rechtliche Informationen über die Nutzung unserer Website und Nutzungsbedingungen.',
        section1: {
          title: 'Allgemeine Informationen',
          content: 'In Übereinstimmung mit dem Gesetz 34/2002 vom 11. Juli über Dienstleistungen der Informationsgesellschaft und elektronischen Handel informieren wir Sie, dass der Eigentümer dieser Website DIPROMOTIONS DIGARCO & ASOCIADOS, S.L. ist.',
        },
        section2: {
          title: 'Nutzungsbedingungen',
          content: 'Der Zugriff auf und die Nutzung dieser Website verleiht die Eigenschaft eines Benutzers, und es wird verstanden, dass Sie die festgelegten Nutzungsbedingungen akzeptieren. Der Benutzer verpflichtet sich, die angebotenen Inhalte und Dienstleistungen angemessen zu nutzen.',
        },
        section3: {
          title: 'Geistiges Eigentum',
          content: 'Alle Inhalte dieser Website, einschließlich Bilder, Texte, Grafiken und Logos, sind Eigentum von DIPROMOTIONS oder werden mit Genehmigung ihrer jeweiligen Eigentümer verwendet.',
        },
        section4: {
          title: 'Datenschutz',
          content: 'Die bereitgestellten persönlichen Daten werden gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeitet. Sie können Ihre Rechte auf Zugang, Berichtigung, Löschung, Widerspruch, Einschränkung und Übertragbarkeit ausüben.',
        },
      },
    },
  },
  it: {
    general: {
      back: 'Torna alla home',
      error: 'Errore',
      loading: 'Caricamento...',
      save: 'Salva',
      cancel: 'Annulla',
      confirm: 'Conferma',
      delete: 'Elimina',
      edit: 'Modifica',
      search: 'Cerca',
      noResults: 'Nessun risultato',
      viewAll: 'Vedi tutti',
      readMore: 'Leggi di più',
    },
    nav: {
      home: 'Home',
      catalog: 'Catalogo',
      contact: 'Contatto',
      cart: 'Carrello',
      categories: 'Categorie',
      about: 'Chi siamo',
    },
    categories: {
      bestSeller: 'Best Seller',
      yourchoice: 'Yourchoice',
      fabricadoUE: 'Fatto in UE',
      reciclado: 'Riciclato',
      usbStock: 'USB Stock',
      outlet: 'Outlet',
      especiales: 'Speciali',
      promociones: 'Promozioni',
      novedades: 'Novità',
    },
    hero: {
      slide1: {
        title: 'Lanyards sublimati',
        subtitle: 'Fatti su misura con design full color di alta qualità',
        cta: 'Lanyards sublimati',
      },
      slide2: {
        title: 'Uniformi mediche',
        subtitle: 'Scopri la nostra ampia varietà di indumenti per professionisti della salute',
        cta: 'Camice | Casacca',
      },
    },
    home: {
      hero: {
        title: 'Articoli Promozionali',
        subtitle: 'Personalizzati per la tua azienda',
        cta: 'Vedi Catalogo',
      },
      featuredProducts: 'Prodotti in Evidenza',
      categories: 'Categorie',
      newArrivals: 'Novità',
      bestSellers: 'I Più Venduti',
    },
    catalog: {
      title: 'Catalogo',
      filters: 'Filtri',
      sortBy: 'Ordina per',
      priceRange: 'Fascia di prezzo',
      categories: 'Categorie',
      clearFilters: 'Cancella filtri',
      noResults: 'Nessun prodotto trovato',
      viewDetails: 'Vedi dettagli',
      addToCart: 'Aggiungi al carrello',
      minQuantity: 'Quantità minima',
      inStock: 'Disponibile',
      outOfStock: 'Esaurito',
      eco: 'Eco',
      euMade: 'UE',
      newest: 'Nuovo',
    },
    product: {
      description: 'Descrizione',
      specifications: 'Specifiche',
      customization: 'Personalizzazione',
      relatedProducts: 'Prodotti correlati',
      quantity: 'Quantità',
      unitPrice: 'Prezzo unitario',
      total: 'Totale',
      addToCart: 'Aggiungi al carrello',
      buyNow: 'Acquista ora',
      sku: 'Codice',
      material: 'Materiale',
      dimensions: 'Dimensioni',
      weight: 'Peso',
      colors: 'Colori disponibili',
      printArea: 'Area di stampa',
    },
    cart: {
      title: 'Carrello',
      empty: 'Il tuo carrello è vuoto',
      emptyMessage: 'Aggiungi prodotti',
      continueShopping: 'Continua lo shopping',
      subtotal: 'Subtotale',
      shipping: 'Spedizione',
      freeShipping: 'Spedizione gratuita',
      tax: 'IVA (21%)',
      total: 'Totale',
      checkout: 'Checkout',
      remove: 'Rimuovi',
      update: 'Aggiorna',
      itemAdded: 'aggiunto al carrello',
      itemRemoved: 'rimosso dal carrello',
      quantityUpdated: 'Quantità aggiornata',
    },
    checkout: {
      title: 'Checkout',
      contactInfo: 'Informazioni di contatto',
      shippingAddress: 'Indirizzo di spedizione',
      billingAddress: 'Indirizzo di fatturazione',
      paymentMethod: 'Metodo di pagamento',
      orderSummary: 'Riepilogo ordine',
      placeOrder: 'Effettua ordine',
      processing: 'Elaborazione...',
      success: 'Ordine effettuato!',
      error: 'Errore nell\'elaborazione',
    },
    contact: {
      title: 'Contatto',
      subtitle: 'Siamo qui per aiutarti',
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefono',
        company: 'Azienda',
        message: 'Messaggio',
        submit: 'Invia messaggio',
        sending: 'Invio...',
        success: 'Messaggio inviato',
        error: 'Errore di invio',
      },
      info: {
        address: 'Indirizzo',
        phone: 'Telefono',
        email: 'Email',
        hours: 'Orari',
      },
    },
    footer: {
      company: 'Azienda',
      products: 'Prodotti',
      support: 'Supporto',
      legal: 'Legale',
      newsletter: 'Newsletter',
      newsletterText: 'Iscriviti per le offerte',
      subscribe: 'Iscriviti',
      copyright: '© 2024 diPromotions. Tutti i diritti riservati.',
      tagline: {
        always: 'Sempre',
        unique: 'il tuo prodotto unico',
      },
      description1: 'In diPromotions ci specializziamo in articoli promozionali personalizzati di alta qualità. Con oltre 20 anni di esperienza, aiutiamo le aziende a distinguere il loro marchio.',
      description2: 'Offriamo una vasta gamma di prodotti personalizzabili, dal tessile alla tecnologia, con il miglior servizio e consulenza professionale.',
      services: 'I nostri servizi',
      help: 'Possiamo aiutarti?',
      schedule: {
        weekdays: 'Lun - Ven: 9:00 - 18:00',
        weekend: 'Sab - Dom: Chiuso',
      },
      social: 'Seguici',
      privacy: 'Informativa sulla privacy',
      contact: 'Contatto',
    },
    language: {
      title: 'Seleziona Lingua',
      subtitle: 'La tua preferenza verrà salvata',
      saved: 'Lingua salvata',
    },
    pages: {
      bestSeller: {
        title: 'Best Seller',
        subtitle: 'I prodotti più venduti della nostra collezione',
        description: 'Scopri i prodotti promozionali di maggior successo tra i nostri clienti. Articoli di qualità comprovata che garantiscono soddisfazione.',
      },
      fabricadoUE: {
        title: 'Fatto in UE',
        subtitle: 'Prodotti fabbricati nell\'Unione Europea',
        description: 'Tutti i nostri prodotti fabbricati nell\'UE soddisfano i più alti standard di qualità e normative europee. Sostieni l\'industria locale con prodotti di prossimità.',
      },
      reciclado: {
        title: 'Prodotti Riciclati',
        subtitle: 'Impegno per l\'ambiente',
        description: 'La nostra linea di prodotti riciclati è progettata per ridurre l\'impatto ambientale. Materiali sostenibili senza compromettere la qualità.',
      },
      usbStock: {
        title: 'USB Stock',
        subtitle: 'Chiavette USB con consegna immediata',
        description: 'Ampia varietà di chiavette USB disponibili in stock per consegna rapida. Da modelli base a opzioni premium con grande capacità.',
      },
      outlet: {
        title: 'Outlet',
        subtitle: 'Offerte speciali e liquidazioni',
        description: 'Approfitta delle nostre offerte esclusive su prodotti selezionati. Stock limitato a prezzi irresistibili.',
      },
      especiales: {
        title: 'Speciali',
        subtitle: 'Prodotti per occasioni speciali',
        description: 'Collezione esclusiva di prodotti progettati per eventi speciali, congressi e celebrazioni importanti.',
      },
      promociones: {
        title: 'Promozioni',
        subtitle: 'Sconti e offerte del mese',
        description: 'Scopri le nostre promozioni attive. Sconti speciali su prodotti selezionati per un periodo limitato.',
      },
      congresos: {
        title: 'Congressi',
        subtitle: 'Prodotti per eventi e congressi',
        description: 'Soluzioni complete per congressi, fiere ed eventi aziendali. Dai lanyards ai kit di benvenuto personalizzati.',
      },
      novedades: {
        title: 'Novità',
        subtitle: 'Scopri le ultime novità in prodotti promozionali',
        description: 'Rimani aggiornato con le nostre ultime novità. Nuovi prodotti ogni settimana per sorprendere i tuoi clienti.',
      },
      navidad: {
        title: 'Natale',
        subtitle: 'Collezione speciale di Natale',
        description: 'Trova il regalo aziendale perfetto per questo Natale. Prodotti speciali per sorprendere i tuoi clienti e dipendenti.',
      },
      yourchoice: {
        title: 'Yourchoice',
        subtitle: 'Personalizzazione su misura',
        description: 'Con Yourchoice puoi creare prodotti unici e personalizzati. Dal design alla finitura, decidi ogni dettaglio.',
      },
      notaLegal: {
        title: 'Note Legali',
        description: 'Informazioni legali sull\'uso del nostro sito web e condizioni di servizio.',
        section1: {
          title: 'Informazioni Generali',
          content: 'In conformità con la legge 34/2002, dell\'11 luglio, sui servizi della società dell\'informazione e sul commercio elettronico, ti informiamo che il proprietario di questo sito web è DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.',
        },
        section2: {
          title: 'Condizioni d\'Uso',
          content: 'L\'accesso e l\'uso di questo sito web conferiscono la condizione di utente, e si intende che accetti le condizioni d\'uso stabilite. L\'utente si impegna a fare un uso appropriato dei contenuti e servizi offerti.',
        },
        section3: {
          title: 'Proprietà Intellettuale',
          content: 'Tutti i contenuti di questo sito web, incluse immagini, testi, grafici e loghi, sono proprietà di DIPROMOTIONS o sono utilizzati con l\'autorizzazione dei rispettivi proprietari.',
        },
        section4: {
          title: 'Protezione dei Dati',
          content: 'I dati personali forniti saranno trattati in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR). Puoi esercitare i tuoi diritti di accesso, rettifica, cancellazione, opposizione, limitazione e portabilità.',
        },
      },
    },
  },
  pt: {
    general: {
      back: 'Voltar ao início',
      error: 'Erro',
      loading: 'Carregando...',
      save: 'Salvar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      delete: 'Excluir',
      edit: 'Editar',
      search: 'Buscar',
      noResults: 'Nenhum resultado',
      viewAll: 'Ver todos',
      readMore: 'Ler mais',
    },
    nav: {
      home: 'Início',
      catalog: 'Catálogo',
      contact: 'Contato',
      cart: 'Carrinho',
      categories: 'Categorias',
      about: 'Sobre',
    },
    categories: {
      bestSeller: 'Best Seller',
      yourchoice: 'Yourchoice',
      fabricadoUE: 'Feito na UE',
      reciclado: 'Reciclado',
      usbStock: 'USB Stock',
      outlet: 'Outlet',
      especiales: 'Especiais',
      promociones: 'Promoções',
      novedades: 'Novidades',
    },
    hero: {
      slide1: {
        title: 'Lanyards sublimados',
        subtitle: 'Feitos sob medida com design full color de alta qualidade',
        cta: 'Lanyards sublimados',
      },
      slide2: {
        title: 'Uniformes médicos',
        subtitle: 'Conheça nossa ampla variedade de roupas para profissionais de saúde',
        cta: 'Jaleco | Bata',
      },
    },
    home: {
      hero: {
        title: 'Artigos Promocionais',
        subtitle: 'Personalizados para sua empresa',
        cta: 'Ver Catálogo',
      },
      featuredProducts: 'Produtos em Destaque',
      categories: 'Categorias',
      newArrivals: 'Novidades',
      bestSellers: 'Mais Vendidos',
    },
    catalog: {
      title: 'Catálogo',
      filters: 'Filtros',
      sortBy: 'Ordenar por',
      priceRange: 'Faixa de preço',
      categories: 'Categorias',
      clearFilters: 'Limpar filtros',
      noResults: 'Nenhum produto encontrado',
      viewDetails: 'Ver detalhes',
      addToCart: 'Adicionar ao carrinho',
      minQuantity: 'Quantidade mínima',
      inStock: 'Em estoque',
      outOfStock: 'Esgotado',
      eco: 'Eco',
      euMade: 'UE',
      newest: 'Novo',
    },
    product: {
      description: 'Descrição',
      specifications: 'Especificações',
      customization: 'Personalização',
      relatedProducts: 'Produtos relacionados',
      quantity: 'Quantidade',
      unitPrice: 'Preço unitário',
      total: 'Total',
      addToCart: 'Adicionar ao carrinho',
      buyNow: 'Comprar agora',
      sku: 'Código',
      material: 'Material',
      dimensions: 'Dimensões',
      weight: 'Peso',
      colors: 'Cores disponíveis',
      printArea: 'Área de impressão',
    },
    cart: {
      title: 'Carrinho',
      empty: 'Seu carrinho está vazio',
      emptyMessage: 'Adicione produtos',
      continueShopping: 'Continuar comprando',
      subtotal: 'Subtotal',
      shipping: 'Frete',
      freeShipping: 'Frete grátis',
      tax: 'IVA (21%)',
      total: 'Total',
      checkout: 'Finalizar',
      remove: 'Remover',
      update: 'Atualizar',
      itemAdded: 'adicionado ao carrinho',
      itemRemoved: 'removido do carrinho',
      quantityUpdated: 'Quantidade atualizada',
    },
    checkout: {
      title: 'Finalizar Compra',
      contactInfo: 'Informações de contato',
      shippingAddress: 'Endereço de entrega',
      billingAddress: 'Endereço de cobrança',
      paymentMethod: 'Método de pagamento',
      orderSummary: 'Resumo do pedido',
      placeOrder: 'Fazer pedido',
      processing: 'Processando...',
      success: 'Pedido realizado!',
      error: 'Erro no processamento',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Estamos aqui para ajudar',
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        company: 'Empresa',
        message: 'Mensagem',
        submit: 'Enviar mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada',
        error: 'Erro ao enviar',
      },
      info: {
        address: 'Endereço',
        phone: 'Telefone',
        email: 'Email',
        hours: 'Horário',
      },
    },
    footer: {
      company: 'Empresa',
      products: 'Produtos',
      support: 'Suporte',
      legal: 'Legal',
      newsletter: 'Newsletter',
      newsletterText: 'Inscreva-se para ofertas',
      subscribe: 'Inscrever',
      copyright: '© 2024 diPromotions. Todos os direitos reservados.',
      tagline: {
        always: 'Sempre',
        unique: 'seu produto único',
      },
      description1: 'Na diPromotions nos especializamos em artigos promocionais personalizados de alta qualidade. Com mais de 20 anos de experiência, ajudamos empresas a destacar sua marca.',
      description2: 'Oferecemos uma ampla gama de produtos personalizáveis, desde têxteis até tecnologia, com o melhor serviço e assessoria profissional.',
      services: 'Nossos serviços',
      help: 'Podemos ajudar?',
      schedule: {
        weekdays: 'Seg - Sex: 9:00 - 18:00',
        weekend: 'Sáb - Dom: Fechado',
      },
      social: 'Siga-nos',
      privacy: 'Política de privacidade',
      contact: 'Contato',
    },
    language: {
      title: 'Selecionar Idioma',
      subtitle: 'Sua preferência será salva',
      saved: 'Idioma salvo',
    },
    pages: {
      bestSeller: {
        title: 'Best Seller',
        subtitle: 'Os produtos mais vendidos da nossa coleção',
        description: 'Descubra os produtos promocionais que mais fazem sucesso entre nossos clientes. Artigos de qualidade comprovada que garantem satisfação.',
      },
      fabricadoUE: {
        title: 'Feito na UE',
        subtitle: 'Produtos fabricados na União Europeia',
        description: 'Todos os nossos produtos fabricados na UE cumprem com os mais altos padrões de qualidade e normativas europeias. Apoie a indústria local com produtos de proximidade.',
      },
      reciclado: {
        title: 'Produtos Reciclados',
        subtitle: 'Compromisso com o meio ambiente',
        description: 'Nossa linha de produtos reciclados está projetada para reduzir o impacto ambiental. Materiais sustentáveis sem comprometer a qualidade.',
      },
      usbStock: {
        title: 'USB Stock',
        subtitle: 'Pen drives com entrega imediata',
        description: 'Ampla variedade de pen drives disponíveis em estoque para entrega rápida. Desde modelos básicos até opções premium com grande capacidade.',
      },
      outlet: {
        title: 'Outlet',
        subtitle: 'Ofertas especiais e liquidações',
        description: 'Aproveite nossas ofertas exclusivas em produtos selecionados. Estoque limitado a preços irresistíveis.',
      },
      especiales: {
        title: 'Especiais',
        subtitle: 'Produtos para ocasiões especiais',
        description: 'Coleção exclusiva de produtos projetados para eventos especiais, congressos e celebrações importantes.',
      },
      promociones: {
        title: 'Promoções',
        subtitle: 'Descontos e ofertas do mês',
        description: 'Descubra nossas promoções ativas. Descontos especiais em produtos selecionados por tempo limitado.',
      },
      congresos: {
        title: 'Congressos',
        subtitle: 'Produtos para eventos e congressos',
        description: 'Soluções completas para congressos, feiras e eventos corporativos. Desde lanyards até kits de boas-vindas personalizados.',
      },
      novedades: {
        title: 'Novidades',
        subtitle: 'Descubra o mais recente em produtos promocionais',
        description: 'Mantenha-se atualizado com nossas últimas novidades. Novos produtos toda semana para surpreender seus clientes.',
      },
      navidad: {
        title: 'Natal',
        subtitle: 'Coleção especial de Natal',
        description: 'Encontre o presente corporativo perfeito para este Natal. Produtos especiais para surpreender seus clientes e funcionários.',
      },
      yourchoice: {
        title: 'Yourchoice',
        subtitle: 'Personalização sob medida',
        description: 'Com Yourchoice você pode criar produtos únicos e personalizados. Desde o design até o acabamento, você decide cada detalhe.',
      },
      notaLegal: {
        title: 'Nota Legal',
        description: 'Informação legal sobre o uso do nosso site e condições de serviço.',
        section1: {
          title: 'Informação Geral',
          content: 'Em cumprimento da Lei 34/2002, de 11 de julho, de serviços da sociedade da informação e de comércio eletrônico, informamos que o titular deste site é DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.',
        },
        section2: {
          title: 'Condições de Uso',
          content: 'O acesso e uso deste site atribui a condição de usuário, e se entende que aceita as condições de uso estabelecidas. O usuário se compromete a fazer um uso adequado dos conteúdos e serviços oferecidos.',
        },
        section3: {
          title: 'Propriedade Intelectual',
          content: 'Todos os conteúdos deste site, incluindo imagens, textos, gráficos e logos, são propriedade da DIPROMOTIONS ou são utilizados com autorização de seus respectivos proprietários.',
        },
        section4: {
          title: 'Proteção de Dados',
          content: 'Os dados pessoais fornecidos serão tratados em conformidade com o Regulamento Geral de Proteção de Dados (RGPD). Você pode exercer seus direitos de acesso, retificação, exclusão, oposição, limitação e portabilidade.',
        },
      },
    },
  },
};

// =============================================
// CONTEXT
// =============================================
interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  supportedLanguages: typeof supportedLanguages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'dipromotions_language';

// =============================================
// PROVIDER
// =============================================
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Language;
      if (stored && translations[stored]) {
        return stored;
      }
    }
    return defaultLanguage;
  });

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      // Emitir evento global
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
  }, []);

  // Inicializar lang del documento
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Función de traducción
  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const keys = key.split('.');
      let value: unknown = translations[currentLang];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback al español
          value = translations[defaultLanguage];
          for (const fk of keys) {
            if (value && typeof value === 'object' && fk in value) {
              value = (value as Record<string, unknown>)[fk];
            } else {
              return key; // Retornar la clave si no se encuentra
            }
          }
          break;
        }
      }

      if (typeof value === 'string') {
        // Reemplazar parámetros
        if (params) {
          return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
            return acc.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
          }, value);
        }
        return value;
      }

      return key;
    },
    [currentLang]
  );

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t,
        supportedLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// =============================================
// HOOK - NO CRASHEA SI NO HAY PROVIDER
// =============================================
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  
  // Si no hay provider, devolver valores por defecto en lugar de crashear
  if (context === undefined) {
    console.warn('useLanguage: No LanguageProvider found, using defaults');
    return {
      currentLang: defaultLanguage,
      setLanguage: (lang: Language) => {
        console.warn('useLanguage: Cannot set language without LanguageProvider');
        localStorage.setItem(STORAGE_KEY, lang);
      },
      t: (key: string) => {
        // Intentar traducir con valores por defecto
        const keys = key.split('.');
        let value: unknown = translations[defaultLanguage];
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = (value as Record<string, unknown>)[k];
          } else {
            return key;
          }
        }
        return typeof value === 'string' ? value : key;
      },
      supportedLanguages,
    };
  }
  
  return context;
}

export default LanguageContext;
