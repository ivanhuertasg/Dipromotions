import PageTemplate from '../../sections/PageTemplate';

export const BestSellerDE = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="Unsere meistverkauften Produkte"
    description="Entdecken Sie die Werbeartikel, die bei unseren Kunden am erfolgreichsten sind. Erprobte Qualitätsartikel, die Zufriedenheit garantieren."
    showProducts
    products={[
      { id: 1, name: 'KIMBERO 300 ml.', description: 'Kurzes Glas mit geometrischer Diamantform', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'BRACE + 510 ml.', description: 'Doppelwandiges Edelstahlglas', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'SUMA 1200 ml.', description: 'Recyceltes Edelstahlglas', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'SILBASE 300 ml', description: 'Weiße matte Keramiktasse', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const FabricadoUEDE = () => (
  <PageTemplate
    title="EU Hergestellt"
    subtitle="Produkte hergestellt in der Europäischen Union"
    description="Alle unsere in der EU hergestellten Produkte erfüllen die höchsten Qualitätsstandards und europäischen Vorschriften. Unterstützen Sie die lokale Industrie mit Produkten aus der Region."
    showProducts
    products={[
      { id: 1, name: 'Eco Flasche 500ml', description: 'Edelstahlflasche hergestellt in Spanien', price: '12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 2, name: 'Bio-Baumwolltasche', description: 'Stofftasche 100% europäische Bio-Baumwolle', price: '3,20 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Premium T-Shirt', description: 'Gekämmtes Baumwoll-T-Shirt hergestellt in Portugal', price: '8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 4, name: 'Metallkugelschreiber', description: 'Recycelter Aluminium-Kugelschreiber hergestellt in Deutschland', price: '4,50 €', image: '/images/cat-pen.jpg' },
    ]}
  />
);

export const RecicladoDE = () => (
  <PageTemplate
    title="Recycelte Produkte"
    subtitle="Engagement für die Umwelt"
    description="Unsere Linie recycelter Produkte ist darauf ausgelegt, die Umweltauswirkungen zu reduzieren. Nachhaltige Materialien ohne Kompromisse bei der Qualität."
    showProducts
    products={[
      { id: 1, name: 'RPET Flasche 500ml', description: 'Flasche aus 100% recyceltem Kunststoff', price: '9,90 €', image: '/images/product-recycled.jpg' },
      { id: 2, name: 'Recycelte PET-Tasche', description: 'Tasche aus recycelten PET-Flaschen', price: '4,50 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Öko-Notizblock', description: '100% recyceltes Papier mit Kartondeckeln', price: '3,80 €', image: '/images/product-outlet.jpg' },
      { id: 4, name: 'PET-Lanyard', description: 'Lanyard aus recycelten Flaschen', price: '2,10 €', image: '/images/cat-lanyard.jpg' },
    ]}
  />
);

export const USBStockDE = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="USB-Sticks mit sofortiger Lieferung"
    description="Große Auswahl an USB-Sticks auf Lager für schnelle Lieferung. Von Basis-Modellen bis zu Premium-Optionen mit großer Kapazität."
    showProducts
    products={[
      { id: 1, name: 'Metall USB 8GB', description: 'Metall-USB mit graviertem Logo', price: '4,50 €', image: '/images/cat-usb.jpg' },
      { id: 2, name: 'Karten USB 16GB', description: 'USB im Kreditkartenformat', price: '5,90 €', image: '/images/cat-usb.jpg' },
      { id: 3, name: 'Bambus USB 32GB', description: 'Öko-USB aus Bambus', price: '8,50 €', image: '/images/cat-usb.jpg' },
      { id: 4, name: 'Schlüsselanhänger USB 64GB', description: 'USB mit Metall-Schlüsselanhänger', price: '12,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const OutletDE = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Sonderangebote und Abverkäufe"
    description="Profitieren Sie von unseren exklusiven Angeboten auf ausgewählte Produkte. Begrenzter Bestand zu unwiderstehlichen Preisen."
    showProducts
    products={[
      { id: 1, name: 'Schreibtisch-Set', description: 'Komplettes Schreibtisch-Set mit Rabatt', price: '15,00 €', image: '/images/product-outlet.jpg' },
      { id: 2, name: 'Laptop-Rucksack', description: 'Laptop-Rucksack mit Fächern', price: '22,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Automatik-Regenschirm', description: 'Regenschirm mit automatischer Öffnung', price: '11,10 €', image: '/images/product-agumbe.jpg' },
      { id: 4, name: 'Tassen-Set', description: 'Set mit 2 Keramiktassen', price: '8,00 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const EspecialesDE = () => (
  <PageTemplate
    title="Angebote"
    subtitle="Produkte für besondere Anlässe"
    description="Exklusive Kollektion von Produkten für besondere Veranstaltungen, Kongresse und wichtige Feierlichkeiten."
    showProducts
    products={[
      { id: 1, name: 'Premium Reise-Set', description: 'Komplettes Set für Geschäftsreisen', price: '35,00 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Willkommens-Kit', description: 'Perfektes Kit für neue Mitarbeiter', price: '28,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Executive-Set', description: 'Produktset für Führungskräfte', price: '45,00 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Event-Pack', description: 'Komplettes Pack für Firmenveranstaltungen', price: '19,90 €', image: '/images/cat-bag.jpg' },
    ]}
  />
);

export const PromocionesDE = () => (
  <PageTemplate
    title="Aktionen"
    subtitle="Rabatte und Angebote des Monats"
    description="Entdecken Sie unsere aktiven Aktionen. Sonderrabatte auf ausgewählte Produkte für begrenzte Zeit."
    showProducts
    products={[
      { id: 1, name: 'Power Bank 10000mAh', description: 'Tragbares Ladegerät mit beleuchtetem Logo', price: '18,90 €', image: '/images/product-promotion.jpg' },
      { id: 2, name: 'Thermoflasche', description: 'Stahlflasche mit Wärmeisolierung', price: '14,50 €', image: '/images/cat-bottle.jpg' },
      { id: 3, name: 'Set mit 3 Kugelschreibern', description: 'Set mit Kugelschreibern in verschiedenen Stilen', price: '9,90 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Eco-Rucksack', description: 'Rucksack aus recycelten Materialien', price: '24,90 €', image: '/images/cat-backpack.jpg' },
    ]}
  />
);

export const CongresosDE = () => (
  <PageTemplate
    title="Kongresse"
    subtitle="Produkte für Veranstaltungen und Kongresse"
    description="Komplette Lösungen für Kongresse, Messen und Firmenveranstaltungen. Von Lanyards bis zu personalisierten Willkommens-Kits."
    showProducts
    products={[
      { id: 1, name: 'Basis Kongress-Kit', description: 'Essentielles Kit für Kongresse', price: '12,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 2, name: 'Premium Kongress-Kit', description: 'Komplettes Kit mit Tasche, Block und Stift', price: '25,00 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Sublimierter Lanyard', description: 'Full-Color personalisierter Lanyard', price: '2,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 4, name: 'Ausweishalter', description: 'Ausweishalter mit Band', price: '1,80 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NovedadesDE = () => (
  <PageTemplate
    title="Neuheiten"
    subtitle="Entdecken Sie die neuesten Werbeartikel"
    description="Bleiben Sie auf dem Laufenden mit unseren neuesten Ergänzungen. Neue Produkte jede Woche, um Ihre Kunden zu überraschen."
    showProducts
    products={[
      { id: 1, name: 'Kimero Kristallglas', description: 'Kristallglas mit geometrischem Design', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'Brace Thermoglas', description: 'Thermoglas aus Edelstahl', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'Großes Suma-Glas', description: 'Großes Glas mit 1200ml Kapazität', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'Silbase-Tasse', description: 'Matte Keramiktasse 300ml', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const NavidadDE = () => (
  <PageTemplate
    title="Weihnachten"
    subtitle="Spezielle Weihnachtskollektion"
    description="Finden Sie das perfekte Firmengeschenk für dieses Weihnachten. Spezielle Produkte, um Ihre Kunden und Mitarbeiter zu überraschen."
    showProducts
    products={[
      { id: 1, name: 'Premium Weihnachts-Set', description: 'Geschenkset mit Weihnachtsbox', price: '29,90 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Adventskalender', description: 'Firmen-Adventskalender', price: '19,50 €', image: '/images/product-outlet.jpg' },
      { id: 3, name: 'Gourmet-Set', description: 'Gourmet-Set mit ausgewählten Produkten', price: '35,00 €', image: '/images/product-kimero.jpg' },
      { id: 4, name: 'Weihnachtsdekoration', description: 'Personalisiertes Dekorationsset', price: '24,90 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const YourchoiceDE = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Maßgeschneiderte Personalisierung"
    description="Mit Yourchoice können Sie einzigartige und personalisierte Produkte erstellen. Vom Design bis zur Verarbeitung entscheiden Sie über jedes Detail."
    showProducts
    products={[
      { id: 1, name: 'Personalisiertes Lanyard', description: 'Lanyard mit Ihrem Full-Color Design', price: 'Ab 1,50 €', image: '/images/hero-lanyard.jpg' },
      { id: 2, name: 'Personalisiertes T-Shirt', description: 'T-Shirt mit Ihrem Logo oder Design', price: 'Ab 8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 3, name: 'Personalisierte Flasche', description: 'Flasche mit Lasergravur', price: 'Ab 12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 4, name: 'Personalisiertes USB', description: 'USB mit Ihrem beleuchteten Logo', price: 'Ab 5,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NotaLegalDE = () => (
  <PageTemplate title="Impressum" description="Rechtliche Informationen zur Nutzung unserer Website und Servicebedingungen.">
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Allgemeine Informationen</h3>
      <p className="text-gray-600 mb-4">Gemäß dem Gesetz 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und des elektronischen Handels informieren wir Sie, dass der Eigentümer dieser Website DIPROMOTIONS DIGARCO & ASOCIADOS, S.L. ist.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Nutzungsbedingungen</h3>
      <p className="text-gray-600 mb-4">Der Zugriff auf und die Nutzung dieser Website verleihen den Status eines Benutzers, und es wird davon ausgegangen, dass Sie die festgelegten Nutzungsbedingungen akzeptieren. Der Benutzer verpflichtet sich, einen angemessenen Gebrauch der angebotenen Inhalte und Dienstleistungen zu machen.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Geistiges Eigentum</h3>
      <p className="text-gray-600 mb-4">Alle Inhalte dieser Website, einschließlich Bilder, Texte, Grafiken und Logos, sind Eigentum von DIPROMOTIONS oder werden mit Genehmigung ihrer jeweiligen Eigentümer verwendet.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Datenschutz</h3>
      <p className="text-gray-600 mb-4">Die bereitgestellten personenbezogenen Daten werden in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) verarbeitet. Sie können Ihre Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Übertragbarkeit ausüben.</p>
    </div>
  </PageTemplate>
);
