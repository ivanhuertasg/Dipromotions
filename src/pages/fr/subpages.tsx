import PageTemplate from '../../sections/PageTemplate';

export const BestSellerFR = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="Nos produits les plus vendus"
    description="Découvrez les produits promotionnels qui connaissent le plus de succès auprès de nos clients. Des articles de qualité éprouvée qui garantissent la satisfaction."
    showProducts
    products={[
      { id: 1, name: 'KIMBERO 300 ml.', description: 'Verre court avec forme de diamant géométrique', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'BRACE + 510 ml.', description: 'Verre en acier inoxydable double paroi', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'SUMA 1200 ml.', description: 'Verre en acier inoxydable recyclé', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'SILBASE 300 ml', description: 'Mug en céramique blanc mat', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const FabricadoUEFR = () => (
  <PageTemplate
    title="Fabriqué UE"
    subtitle="Produits fabriqués dans l'Union Européenne"
    description="Tous nos produits fabriqués dans l'UE répondent aux normes de qualité et réglementations européennes les plus élevées. Soutenez l'industrie locale avec des produits de proximité."
    showProducts
    products={[
      { id: 1, name: 'Bouteille Eco 500ml', description: 'Bouteille en acier inoxydable fabriquée en Espagne', price: '12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 2, name: 'Sac Coton Bio', description: 'Sac en tissu 100% coton bio européen', price: '3,20 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'T-Shirt Premium', description: 'T-shirt en coton peigné fabriqué au Portugal', price: '8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 4, name: 'Stylo Métal', description: 'Stylo en aluminium recyclé fabriqué en Allemagne', price: '4,50 €', image: '/images/cat-pen.jpg' },
    ]}
  />
);

export const RecicladoFR = () => (
  <PageTemplate
    title="Produits Recyclés"
    subtitle="Engagement envers l'environnement"
    description="Notre gamme de produits recyclés est conçue pour réduire l'impact environnemental. Des matériaux durables sans compromettre la qualité."
    showProducts
    products={[
      { id: 1, name: 'Bouteille RPET 500ml', description: 'Bouteille fabriquée avec du plastique 100% recyclé', price: '9,90 €', image: '/images/product-recycled.jpg' },
      { id: 2, name: 'Sac PET Recyclé', description: 'Sac fabriqué avec des bouteilles PET recyclées', price: '4,50 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Bloc-notes Écologique', description: 'Papier 100% recyclé avec couvertures en carton', price: '3,80 €', image: '/images/product-outlet.jpg' },
      { id: 4, name: 'Lanyard PET', description: 'Lanyard fabriqué avec des bouteilles recyclées', price: '2,10 €', image: '/images/cat-lanyard.jpg' },
    ]}
  />
);

export const USBStockFR = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="Clés USB avec livraison immédiate"
    description="Grande variété de clés USB disponibles en stock pour une livraison rapide. Des modèles basiques aux options premium avec grande capacité."
    showProducts
    products={[
      { id: 1, name: 'USB Métal 8GB', description: 'Clé USB métallique avec logo gravé', price: '4,50 €', image: '/images/cat-usb.jpg' },
      { id: 2, name: 'USB Carte 16GB', description: 'USB au format carte de crédit', price: '5,90 €', image: '/images/cat-usb.jpg' },
      { id: 3, name: 'USB Bambou 32GB', description: 'USB écologique en bambou', price: '8,50 €', image: '/images/cat-usb.jpg' },
      { id: 4, name: 'USB Porte-clés 64GB', description: 'USB avec porte-clés métallique', price: '12,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const OutletFR = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Offres spéciales et liquidations"
    description="Profitez de nos offres exclusives sur des produits sélectionnés. Stock limité à des prix irrésistibles."
    showProducts
    products={[
      { id: 1, name: 'Set de Bureau', description: 'Set de bureau complet avec remise', price: '15,00 €', image: '/images/product-outlet.jpg' },
      { id: 2, name: 'Sac à Dos PC', description: 'Sac à dos pour ordinateur avec compartiments', price: '22,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Parapluie Auto', description: 'Parapluie à ouverture automatique', price: '11,10 €', image: '/images/product-agumbe.jpg' },
      { id: 4, name: 'Set de Mugs', description: 'Set de 2 mugs en céramique', price: '8,00 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const EspecialesFR = () => (
  <PageTemplate
    title="Spéciaux"
    subtitle="Produits pour occasions spéciales"
    description="Collection exclusive de produits conçus pour des événements spéciaux, congrès et célébrations importantes."
    showProducts
    products={[
      { id: 1, name: 'Set Voyage Premium', description: 'Set complet pour voyages d\'affaires', price: '35,00 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Kit de Bienvenue', description: 'Kit parfait pour nouveaux employés', price: '28,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Set Exécutif', description: 'Set de produits pour cadres', price: '45,00 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Pack Événement', description: 'Pack complet pour événements corporatifs', price: '19,90 €', image: '/images/cat-bag.jpg' },
    ]}
  />
);

export const PromocionesFR = () => (
  <PageTemplate
    title="Promotions"
    subtitle="Remises et offres du mois"
    description="Découvrez nos promotions actives. Remises spéciales sur des produits sélectionnés pendant une durée limitée."
    showProducts
    products={[
      { id: 1, name: 'Power Bank 10000mAh', description: 'Chargeur portable avec logo illuminé', price: '18,90 €', image: '/images/product-promotion.jpg' },
      { id: 2, name: 'Bouteille Thermique', description: 'Bouteille en acier avec isolation thermique', price: '14,50 €', image: '/images/cat-bottle.jpg' },
      { id: 3, name: 'Set de 3 Stylos', description: 'Set de stylos de différents styles', price: '9,90 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Sac à Dos Éco', description: 'Sac à dos en matériaux recyclés', price: '24,90 €', image: '/images/cat-backpack.jpg' },
    ]}
  />
);

export const CongresosFR = () => (
  <PageTemplate
    title="Congrès"
    subtitle="Produits pour événements et congrès"
    description="Solutions complètes pour congrès, foires et événements corporatifs. Des lanyards aux kits de bienvenue personnalisés."
    showProducts
    products={[
      { id: 1, name: 'Kit Congrès Basique', description: 'Kit essentiel pour congrès', price: '12,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 2, name: 'Kit Congrès Premium', description: 'Kit complet avec sac, bloc et stylo', price: '25,00 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Lanyard Sublimé', description: 'Lanyard personnalisé full color', price: '2,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 4, name: 'Porte-badge', description: 'Porte-accréditations avec ruban', price: '1,80 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NovedadesFR = () => (
  <PageTemplate
    title="Nouveautés"
    subtitle="Découvrez les dernières nouveautés en produits promotionnels"
    description="Restez à jour avec nos dernières additions. Nouveaux produits chaque semaine pour surprendre vos clients."
    showProducts
    products={[
      { id: 1, name: 'Verre Cristal Kimero', description: 'Verre en cristal avec design géométrique', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'Verre Thermique Brace', description: 'Verre thermique en acier inoxydable', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'Grand Verre Suma', description: 'Verre grande capacité 1200ml', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'Mug Silbase', description: 'Mug en céramique mate 300ml', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const NavidadFR = () => (
  <PageTemplate
    title="Noël"
    subtitle="Collection spéciale Noël"
    description="Trouvez le cadeau corporatif parfait pour ce Noël. Des produits spéciaux pour surprendre vos clients et employés."
    showProducts
    products={[
      { id: 1, name: 'Set Noël Premium', description: 'Set cadeau avec boîte de Noël', price: '29,90 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Calendrier Avent', description: 'Calendrier de l\'avent corporatif', price: '19,50 €', image: '/images/product-outlet.jpg' },
      { id: 3, name: 'Set Gourmet', description: 'Set gourmet avec produits sélectionnés', price: '35,00 €', image: '/images/product-kimero.jpg' },
      { id: 4, name: 'Décoration Noël', description: 'Set de décoration personnalisée', price: '24,90 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const YourchoiceFR = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Personnalisation sur mesure"
    description="Avec Yourchoice, vous pouvez créer des produits uniques et personnalisés. Du design à la finition, vous décidez de chaque détail."
    showProducts
    products={[
      { id: 1, name: 'Lanyard Personnalisé', description: 'Lanyard avec votre design full color', price: 'Dès 1,50 €', image: '/images/hero-lanyard.jpg' },
      { id: 2, name: 'T-Shirt Personnalisé', description: 'T-shirt avec votre logo ou design', price: 'Dès 8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 3, name: 'Bouteille Personnalisée', description: 'Bouteille avec gravure laser', price: 'Dès 12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 4, name: 'USB Personnalisé', description: 'USB avec votre logo illuminé', price: 'Dès 5,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NotaLegalFR = () => (
  <PageTemplate title="Mentions Légales" description="Informations légales sur l'utilisation de notre site web et conditions de service.">
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Informations Générales</h3>
      <p className="text-gray-600 mb-4">Conformément à la Loi 34/2002, du 11 juillet, sur les services de la société de l'information et du commerce électronique, nous vous informons que le propriétaire de ce site web est DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Conditions d'Utilisation</h3>
      <p className="text-gray-600 mb-4">L'accès et l'utilisation de ce site web confèrent la qualité d'utilisateur, et il est entendu que vous acceptez les conditions d'utilisation établies. L'utilisateur s'engage à faire un usage approprié des contenus et services offerts.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Propriété Intellectuelle</h3>
      <p className="text-gray-600 mb-4">Tout le contenu de ce site web, y compris les images, textes, graphiques et logos, est la propriété de DIPROMOTIONS ou est utilisé avec l'autorisation de leurs propriétaires respectifs.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Protection des Données</h3>
      <p className="text-gray-600 mb-4">Les données personnelles fournies seront traitées conformément au Règlement Général sur la Protection des Données (RGPD). Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité.</p>
    </div>
  </PageTemplate>
);
