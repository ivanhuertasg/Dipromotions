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
    },
    language: {
      title: 'Seleccionar Idioma',
      subtitle: 'Tu preferencia se guardará',
      saved: 'Idioma guardado',
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
    },
    language: {
      title: 'Select Language',
      subtitle: 'Your preference will be saved',
      saved: 'Language saved',
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
    },
    language: {
      title: 'Sélectionner la Langue',
      subtitle: 'Votre préférence sera enregistrée',
      saved: 'Langue enregistrée',
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
    },
    language: {
      title: 'Sprache auswählen',
      subtitle: 'Ihre Auswahl wird gespeichert',
      saved: 'Sprache gespeichert',
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
    },
    language: {
      title: 'Seleziona Lingua',
      subtitle: 'La tua preferenza verrà salvata',
      saved: 'Lingua salvata',
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
    },
    language: {
      title: 'Selecionar Idioma',
      subtitle: 'Sua preferência será salva',
      saved: 'Idioma salvo',
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
