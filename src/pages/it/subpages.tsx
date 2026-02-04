import PageTemplate from '../../sections/PageTemplate';

export const BestSellerIT = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="I nostri prodotti più venduti"
    description="Scopri gli articoli promozionali che hanno maggiore successo tra i nostri clienti. Articoli di qualità comprovata che garantiscono soddisfazione."
    showProducts
    products={[
      { id: 1, name: 'KIMBERO 300 ml.', description: 'Bicchiere corto con forma geometrica a diamante', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'BRACE + 510 ml.', description: 'Bicchiere in acciaio inox a doppia parete', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'SUMA 1200 ml.', description: 'Bicchiere in acciaio inox riciclato', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'SILBASE 300 ml', description: 'Tazza in ceramica bianca opaca', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const FabricadoUEIT = () => (
  <PageTemplate
    title="Prodotto UE"
    subtitle="Prodotti fabbricati nell'Unione Europea"
    description="Tutti i nostri prodotti fabbricati nell'UE rispettano gli standard di qualità e le normative europee più elevati. Sostieni l'industria locale con prodotti di prossimità."
    showProducts
    products={[
      { id: 1, name: 'Bottiglia Eco 500ml', description: 'Bottiglia in acciaio inox fabbricata in Spagna', price: '12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 2, name: 'Borsa Cotone Bio', description: 'Borsa in tessuto 100% cotone biologico europeo', price: '3,20 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'T-Shirt Premium', description: 'T-shirt in cotone pettinato fabbricata in Portogallo', price: '8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 4, name: 'Penna Metallica', description: 'Penna in alluminio riciclato fabbricata in Germania', price: '4,50 €', image: '/images/cat-pen.jpg' },
    ]}
  />
);

export const RecicladoIT = () => (
  <PageTemplate
    title="Prodotti Riciclati"
    subtitle="Impegno per l'ambiente"
    description="La nostra linea di prodotti riciclati è progettata per ridurre l'impatto ambientale. Materiali sostenibili senza compromettere la qualità."
    showProducts
    products={[
      { id: 1, name: 'Bottiglia RPET 500ml', description: 'Bottiglia realizzata con plastica 100% riciclata', price: '9,90 €', image: '/images/product-recycled.jpg' },
      { id: 2, name: 'Borsa PET Riciclato', description: 'Borsa realizzata con bottiglie PET riciclate', price: '4,50 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Blocco Note Ecologico', description: 'Carta 100% riciclata con copertine in cartone', price: '3,80 €', image: '/images/product-outlet.jpg' },
      { id: 4, name: 'Lanyard PET', description: 'Lanyard realizzato con bottiglie riciclate', price: '2,10 €', image: '/images/cat-lanyard.jpg' },
    ]}
  />
);

export const USBStockIT = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="Chiavette USB con consegna immediata"
    description="Ampia varietà di chiavette USB disponibili in stock per consegna rapida. Dai modelli base alle opzioni premium con grande capacità."
    showProducts
    products={[
      { id: 1, name: 'USB Metallo 8GB', description: 'Chiavetta USB metallica con logo inciso', price: '4,50 €', image: '/images/cat-usb.jpg' },
      { id: 2, name: 'USB Carta 16GB', description: 'USB in formato carta di credito', price: '5,90 €', image: '/images/cat-usb.jpg' },
      { id: 3, name: 'USB Bamboo 32GB', description: 'USB ecologico in bambù', price: '8,50 €', image: '/images/cat-usb.jpg' },
      { id: 4, name: 'USB Portachiavi 64GB', description: 'USB con portachiavi metallico', price: '12,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const OutletIT = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Offerte speciali e liquidazioni"
    description="Approfitta delle nostre offerte esclusive su prodotti selezionati. Stock limitato a prezzi irresistibili."
    showProducts
    products={[
      { id: 1, name: 'Set da Scrivania', description: 'Set completo da scrivania con sconto', price: '15,00 €', image: '/images/product-outlet.jpg' },
      { id: 2, name: 'Zaino Porta PC', description: 'Zaino per laptop con scomparti', price: '22,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Ombrello Automatico', description: 'Ombrello ad apertura automatica', price: '11,10 €', image: '/images/product-agumbe.jpg' },
      { id: 4, name: 'Set di Tazze', description: 'Set di 2 tazze in ceramica', price: '8,00 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const EspecialesIT = () => (
  <PageTemplate
    title="Speciali"
    subtitle="Prodotti per occasioni speciali"
    description="Collezione esclusiva di prodotti progettati per eventi speciali, congressi e celebrazioni importanti."
    showProducts
    products={[
      { id: 1, name: 'Set Viaggio Premium', description: 'Set completo per viaggi di lavoro', price: '35,00 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Kit di Benvenuto', description: 'Kit perfetto per nuovi dipendenti', price: '28,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Set Executive', description: 'Set di prodotti per dirigenti', price: '45,00 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Pack Evento', description: 'Pack completo per eventi aziendali', price: '19,90 €', image: '/images/cat-bag.jpg' },
    ]}
  />
);

export const PromocionesIT = () => (
  <PageTemplate
    title="Promozioni"
    subtitle="Sconti e offerte del mese"
    description="Scopri le nostre promozioni attive. Sconti speciali su prodotti selezionati per tempo limitato."
    showProducts
    products={[
      { id: 1, name: 'Power Bank 10000mAh', description: 'Caricatore portatile con logo illuminato', price: '18,90 €', image: '/images/product-promotion.jpg' },
      { id: 2, name: 'Bottiglia Termica', description: 'Bottiglia in acciaio con isolamento termico', price: '14,50 €', image: '/images/cat-bottle.jpg' },
      { id: 3, name: 'Set di 3 Penne', description: 'Set di penne in diversi stili', price: '9,90 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Zaino Eco', description: 'Zaino in materiali riciclati', price: '24,90 €', image: '/images/cat-backpack.jpg' },
    ]}
  />
);

export const CongresosIT = () => (
  <PageTemplate
    title="Congressi"
    subtitle="Prodotti per eventi e congressi"
    description="Soluzioni complete per congressi, fiere ed eventi aziendali. Dai lanyard ai kit di benvenuto personalizzati."
    showProducts
    products={[
      { id: 1, name: 'Kit Congresso Base', description: 'Kit essenziale per congressi', price: '12,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 2, name: 'Kit Congresso Premium', description: 'Kit completo con borsa, blocco e penna', price: '25,00 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Lanyard Sublimato', description: 'Lanyard personalizzato full color', price: '2,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 4, name: 'Porta Badge', description: 'Porta accreditazioni con nastro', price: '1,80 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NovedadesIT = () => (
  <PageTemplate
    title="Novità"
    subtitle="Scopri le ultime novità in prodotti promozionali"
    description="Resta aggiornato con le nostre ultime aggiunte. Nuovi prodotti ogni settimana per sorprendere i tuoi clienti."
    showProducts
    products={[
      { id: 1, name: 'Bicchiere Cristallo Kimero', description: 'Bicchiere in cristallo con design geometrico', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'Bicchiere Termico Brace', description: 'Bicchiere termico in acciaio inox', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'Bicchiere Grande Suma', description: 'Bicchiere grande capacità 1200ml', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'Tazza Silbase', description: 'Tazza in ceramica opaca 300ml', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const NavidadIT = () => (
  <PageTemplate
    title="Natale"
    subtitle="Collezione speciale Natale"
    description="Trova il regalo aziendale perfetto per questo Natale. Prodotti speciali per sorprendere i tuoi clienti e dipendenti."
    showProducts
    products={[
      { id: 1, name: 'Set Natale Premium', description: 'Set regalo con confezione natalizia', price: '29,90 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Calendario Avvento', description: 'Calendario dell\'avvento aziendale', price: '19,50 €', image: '/images/product-outlet.jpg' },
      { id: 3, name: 'Set Gourmet', description: 'Set gourmet con prodotti selezionati', price: '35,00 €', image: '/images/product-kimero.jpg' },
      { id: 4, name: 'Decorazione Natalizia', description: 'Set di decorazione personalizzata', price: '24,90 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const YourchoiceIT = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Personalizzazione su misura"
    description="Con Yourchoice puoi creare prodotti unici e personalizzati. Dal design alla finitura, decidi tu ogni dettaglio."
    showProducts
    products={[
      { id: 1, name: 'Lanyard Personalizzato', description: 'Lanyard con il tuo design full color', price: 'Da 1,50 €', image: '/images/hero-lanyard.jpg' },
      { id: 2, name: 'T-Shirt Personalizzata', description: 'T-shirt con il tuo logo o design', price: 'Da 8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 3, name: 'Bottiglia Personalizzata', description: 'Bottiglia con incisione laser', price: 'Da 12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 4, name: 'USB Personalizzato', description: 'USB con il tuo logo illuminato', price: 'Da 5,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NotaLegalIT = () => (
  <PageTemplate title="Note Legali" description="Informazioni legali sull'uso del nostro sito web e condizioni di servizio.">
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Informazioni Generali</h3>
      <p className="text-gray-600 mb-4">In conformità con la Legge 34/2002, dell'11 luglio, sui servizi della società dell'informazione e del commercio elettronico, ti informiamo che il titolare di questo sito web è DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Condizioni d'Uso</h3>
      <p className="text-gray-600 mb-4">L'accesso e l'uso di questo sito web attribuiscono la condizione di utente, e si intende che accetti le condizioni d'uso stabilite. L'utente si impegna a fare un uso appropriato dei contenuti e dei servizi offerti.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Proprietà Intellettuale</h3>
      <p className="text-gray-600 mb-4">Tutti i contenuti di questo sito web, incluse immagini, testi, grafica e loghi, sono di proprietà di DIPROMOTIONS o sono utilizzati con l'autorizzazione dei rispettivi proprietari.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Protezione dei Dati</h3>
      <p className="text-gray-600 mb-4">I dati personali forniti saranno trattati in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR). Puoi esercitare i tuoi diritti di accesso, rettifica, cancellazione, opposizione, limitazione e portabilità.</p>
    </div>
  </PageTemplate>
);
