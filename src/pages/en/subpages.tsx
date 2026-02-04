import PageTemplate from '../../sections/PageTemplate';

export const BestSellerEN = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="Our best-selling products"
    description="Discover the promotional products that are most successful with our customers. Proven quality items that guarantee satisfaction."
    showProducts
    products={[
      { id: 1, name: 'KIMBERO 300 ml.', description: 'Short glass with geometric diamond shape', price: '2.43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'BRACE + 510 ml.', description: 'Double wall stainless steel glass', price: '7.02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'SUMA 1200 ml.', description: 'Recycled stainless steel glass', price: '9.52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'SILBASE 300 ml', description: 'White matte ceramic mug', price: '3.72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const FabricadoUEEN = () => (
  <PageTemplate
    title="EU Made"
    subtitle="Products manufactured in the European Union"
    description="All our EU-made products meet the highest quality standards and European regulations. Support local industry with proximity products."
    showProducts
    products={[
      { id: 1, name: 'Eco Bottle 500ml', description: 'Stainless steel bottle made in Spain', price: '12.50 €', image: '/images/cat-bottle.jpg' },
      { id: 2, name: 'Organic Cotton Bag', description: '100% European organic cotton bag', price: '3.20 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Premium T-Shirt', description: 'Combed cotton t-shirt made in Portugal', price: '8.90 €', image: '/images/cat-tshirt.jpg' },
      { id: 4, name: 'Metal Pen', description: 'Recycled aluminum pen made in Germany', price: '4.50 €', image: '/images/cat-pen.jpg' },
    ]}
  />
);

export const RecicladoEN = () => (
  <PageTemplate
    title="Recycled Products"
    subtitle="Commitment to the environment"
    description="Our line of recycled products is designed to reduce environmental impact. Sustainable materials without compromising quality."
    showProducts
    products={[
      { id: 1, name: 'RPET Bottle 500ml', description: 'Bottle made from 100% recycled plastic', price: '9.90 €', image: '/images/product-recycled.jpg' },
      { id: 2, name: 'Recycled PET Bag', description: 'Bag made from recycled PET bottles', price: '4.50 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Eco Notepad', description: '100% recycled paper with cardboard covers', price: '3.80 €', image: '/images/product-outlet.jpg' },
      { id: 4, name: 'PET Lanyard', description: 'Lanyard made from recycled bottles', price: '2.10 €', image: '/images/cat-lanyard.jpg' },
    ]}
  />
);

export const USBStockEN = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="USB drives with immediate delivery"
    description="Wide variety of USB drives available in stock for fast delivery. From basic models to premium options with high capacity."
    showProducts
    products={[
      { id: 1, name: 'Metal USB 8GB', description: 'Metal USB with engraved logo', price: '4.50 €', image: '/images/cat-usb.jpg' },
      { id: 2, name: 'Card USB 16GB', description: 'USB in credit card format', price: '5.90 €', image: '/images/cat-usb.jpg' },
      { id: 3, name: 'Bamboo USB 32GB', description: 'Eco-friendly bamboo USB', price: '8.50 €', image: '/images/cat-usb.jpg' },
      { id: 4, name: 'Keychain USB 64GB', description: 'USB with metal keychain', price: '12.90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const OutletEN = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Special offers and clearance sales"
    description="Take advantage of our exclusive offers on selected products. Limited stock at irresistible prices."
    showProducts
    products={[
      { id: 1, name: 'Desk Set', description: 'Complete desk set with discount', price: '15.00 €', image: '/images/product-outlet.jpg' },
      { id: 2, name: 'Laptop Backpack', description: 'Laptop backpack with compartments', price: '22.50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Automatic Umbrella', description: 'Automatic opening umbrella', price: '11.10 €', image: '/images/product-agumbe.jpg' },
      { id: 4, name: 'Mug Set', description: 'Set of 2 ceramic mugs', price: '8.00 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const EspecialesEN = () => (
  <PageTemplate
    title="Specials"
    subtitle="Products for special occasions"
    description="Exclusive collection of products designed for special events, congresses and important celebrations."
    showProducts
    products={[
      { id: 1, name: 'Premium Travel Set', description: 'Complete set for business trips', price: '35.00 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Welcome Kit', description: 'Perfect kit for new employees', price: '28.50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Executive Set', description: 'Set of products for executives', price: '45.00 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Event Pack', description: 'Complete pack for corporate events', price: '19.90 €', image: '/images/cat-bag.jpg' },
    ]}
  />
);

export const PromocionesEN = () => (
  <PageTemplate
    title="Promotions"
    subtitle="Discounts and offers of the month"
    description="Discover our active promotions. Special discounts on selected products for a limited time."
    showProducts
    products={[
      { id: 1, name: 'Power Bank 10000mAh', description: 'Portable charger with illuminated logo', price: '18.90 €', image: '/images/product-promotion.jpg' },
      { id: 2, name: 'Thermal Bottle', description: 'Steel bottle with thermal insulation', price: '14.50 €', image: '/images/cat-bottle.jpg' },
      { id: 3, name: 'Set of 3 Pens', description: 'Set of pens in different styles', price: '9.90 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Eco Backpack', description: 'Backpack made from recycled materials', price: '24.90 €', image: '/images/cat-backpack.jpg' },
    ]}
  />
);

export const CongresosEN = () => (
  <PageTemplate
    title="Congress"
    subtitle="Products for events and congresses"
    description="Complete solutions for congresses, fairs and corporate events. From lanyards to personalized welcome kits."
    showProducts
    products={[
      { id: 1, name: 'Basic Congress Kit', description: 'Essential kit for congresses', price: '12.50 €', image: '/images/cat-lanyard.jpg' },
      { id: 2, name: 'Premium Congress Kit', description: 'Complete kit with bag, notepad and pen', price: '25.00 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Sublimated Lanyard', description: 'Full color personalized lanyard', price: '2.50 €', image: '/images/cat-lanyard.jpg' },
      { id: 4, name: 'Badge Holder', description: 'Badge holder with ribbon', price: '1.80 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NovedadesEN = () => (
  <PageTemplate
    title="New Arrivals"
    subtitle="Discover the latest in promotional products"
    description="Stay up to date with our latest additions. New products every week to surprise your customers."
    showProducts
    products={[
      { id: 1, name: 'Kimero Crystal Glass', description: 'Crystal glass with geometric design', price: '2.43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'Brace Thermal Glass', description: 'Stainless steel thermal glass', price: '7.02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'Large Suma Glass', description: 'Large capacity glass 1200ml', price: '9.52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'Silbase Mug', description: 'Matte ceramic mug 300ml', price: '3.72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const NavidadEN = () => (
  <PageTemplate
    title="Christmas"
    subtitle="Special Christmas collection"
    description="Find the perfect corporate gift for this Christmas. Special products to surprise your customers and employees."
    showProducts
    products={[
      { id: 1, name: 'Premium Christmas Set', description: 'Gift set with Christmas box', price: '29.90 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Advent Calendar', description: 'Corporate advent calendar', price: '19.50 €', image: '/images/product-outlet.jpg' },
      { id: 3, name: 'Gourmet Set', description: 'Gourmet set with selected products', price: '35.00 €', image: '/images/product-kimero.jpg' },
      { id: 4, name: 'Christmas Decoration', description: 'Personalized decoration set', price: '24.90 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const YourchoiceEN = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Customization to your measure"
    description="With Yourchoice you can create unique and personalized products. From design to finish, you decide every detail."
    showProducts
    products={[
      { id: 1, name: 'Custom Lanyard', description: 'Lanyard with your full color design', price: 'From 1.50 €', image: '/images/hero-lanyard.jpg' },
      { id: 2, name: 'Custom T-Shirt', description: 'T-shirt with your logo or design', price: 'From 8.90 €', image: '/images/cat-tshirt.jpg' },
      { id: 3, name: 'Custom Bottle', description: 'Bottle with laser engraving', price: 'From 12.50 €', image: '/images/cat-bottle.jpg' },
      { id: 4, name: 'Custom USB', description: 'USB with your illuminated logo', price: 'From 5.90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NotaLegalEN = () => (
  <PageTemplate title="Legal Notice" description="Legal information about the use of our website and service conditions.">
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. General Information</h3>
      <p className="text-gray-600 mb-4">In compliance with Law 34/2002, of July 11, on services of the information society and electronic commerce, we inform you that the owner of this website is DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Terms of Use</h3>
      <p className="text-gray-600 mb-4">Access and use of this website confers the status of user, and it is understood that you accept the established terms of use. The user undertakes to make appropriate use of the contents and services offered.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h3>
      <p className="text-gray-600 mb-4">All content on this website, including images, texts, graphics and logos, is the property of DIPROMOTIONS or is used with authorization from their respective owners.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Data Protection</h3>
      <p className="text-gray-600 mb-4">Personal data provided will be processed in accordance with the General Data Protection Regulation (GDPR). You can exercise your rights of access, rectification, erasure, opposition, limitation and portability.</p>
    </div>
  </PageTemplate>
);
