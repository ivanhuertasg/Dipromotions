// =============================================
// CONTENIDO CATÁLOGO - TODOS LOS IDIOMAS
// =============================================

export const catalogContent = {
  es: {
    title: 'Catálogo de Productos',
    subtitle: 'Descubre nuestra amplia gama de productos promocionales',
    searchPlaceholder: 'Buscar productos...',
    filters: 'Filtros',
    allCategories: 'Todas las categorías',
    sortBy: 'Ordenar por',
    priceAsc: 'Precio: menor a mayor',
    priceDesc: 'Precio: mayor a menor',
    name: 'Nombre',
    newest: 'Más recientes',
    minQuantity: 'Cantidad mínima',
    from: 'Desde',
    addToCart: 'Añadir al carrito',
    viewDetails: 'Ver detalles',
    noResults: 'No se encontraron productos',
    categories: {
      tecnologia: 'Tecnología',
      bolsas: 'Bolsas',
      textil: 'Textil',
      congresos: 'Congresos',
      hogar: 'Hogar',
      oficina: 'Oficina',
      ecologico: 'Ecológico'
    }
  },
  en: {
    title: 'Product Catalog',
    subtitle: 'Discover our wide range of promotional products',
    searchPlaceholder: 'Search products...',
    filters: 'Filters',
    allCategories: 'All categories',
    sortBy: 'Sort by',
    priceAsc: 'Price: low to high',
    priceDesc: 'Price: high to low',
    name: 'Name',
    newest: 'Newest',
    minQuantity: 'Minimum quantity',
    from: 'From',
    addToCart: 'Add to cart',
    viewDetails: 'View details',
    noResults: 'No products found',
    categories: {
      tecnologia: 'Technology',
      bolsas: 'Bags',
      textil: 'Textile',
      congresos: 'Events',
      hogar: 'Home',
      oficina: 'Office',
      ecologico: 'Eco-friendly'
    }
  },
  fr: {
    title: 'Catalogue de Produits',
    subtitle: 'Découvrez notre large gamme de produits promotionnels',
    searchPlaceholder: 'Rechercher des produits...',
    filters: 'Filtres',
    allCategories: 'Toutes les catégories',
    sortBy: 'Trier par',
    priceAsc: 'Prix: croissant',
    priceDesc: 'Prix: décroissant',
    name: 'Nom',
    newest: 'Plus récents',
    minQuantity: 'Quantité minimum',
    from: 'À partir de',
    addToCart: 'Ajouter au panier',
    viewDetails: 'Voir les détails',
    noResults: 'Aucun produit trouvé',
    categories: {
      tecnologia: 'Technologie',
      bolsas: 'Sacs',
      textil: 'Textile',
      congresos: 'Congrès',
      hogar: 'Maison',
      oficina: 'Bureau',
      ecologico: 'Écologique'
    }
  },
  de: {
    title: 'Produktkatalog',
    subtitle: 'Entdecken Sie unsere große Auswahl an Werbeartikeln',
    searchPlaceholder: 'Produkte suchen...',
    filters: 'Filter',
    allCategories: 'Alle Kategorien',
    sortBy: 'Sortieren nach',
    priceAsc: 'Preis: aufsteigend',
    priceDesc: 'Preis: absteigend',
    name: 'Name',
    newest: 'Neueste',
    minQuantity: 'Mindestmenge',
    from: 'Ab',
    addToCart: 'In den Warenkorb',
    viewDetails: 'Details ansehen',
    noResults: 'Keine Produkte gefunden',
    categories: {
      tecnologia: 'Technologie',
      bolsas: 'Taschen',
      textil: 'Textil',
      congresos: 'Kongresse',
      hogar: 'Zuhause',
      oficina: 'Büro',
      ecologico: 'Umweltfreundlich'
    }
  },
  it: {
    title: 'Catalogo Prodotti',
    subtitle: 'Scopri la nostra vasta gamma di prodotti promozionali',
    searchPlaceholder: 'Cerca prodotti...',
    filters: 'Filtri',
    allCategories: 'Tutte le categorie',
    sortBy: 'Ordina per',
    priceAsc: 'Prezzo: crescente',
    priceDesc: 'Prezzo: decrescente',
    name: 'Nome',
    newest: 'Più recenti',
    minQuantity: 'Quantità minima',
    from: 'Da',
    addToCart: 'Aggiungi al carrello',
    viewDetails: 'Vedi dettagli',
    noResults: 'Nessun prodotto trovato',
    categories: {
      tecnologia: 'Tecnologia',
      bolsas: 'Borse',
      textil: 'Tessile',
      congresos: 'Congressi',
      hogar: 'Casa',
      oficina: 'Ufficio',
      ecologico: 'Ecologico'
    }
  },
  pt: {
    title: 'Catálogo de Produtos',
    subtitle: 'Descubra a nossa vasta gama de produtos promocionais',
    searchPlaceholder: 'Pesquisar produtos...',
    filters: 'Filtros',
    allCategories: 'Todas as categorias',
    sortBy: 'Ordenar por',
    priceAsc: 'Preço: menor para maior',
    priceDesc: 'Preço: maior para menor',
    name: 'Nome',
    newest: 'Mais recentes',
    minQuantity: 'Quantidade mínima',
    from: 'Desde',
    addToCart: 'Adicionar ao carrinho',
    viewDetails: 'Ver detalhes',
    noResults: 'Nenhum produto encontrado',
    categories: {
      tecnologia: 'Tecnologia',
      bolsas: 'Bolsas',
      textil: 'Têxtil',
      congresos: 'Congressos',
      hogar: 'Casa',
      oficina: 'Escritório',
      ecologico: 'Ecológico'
    }
  }
};

export type CatalogContent = typeof catalogContent.es;
export type Language = keyof typeof catalogContent;
