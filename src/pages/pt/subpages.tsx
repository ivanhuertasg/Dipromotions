import PageTemplate from '../../sections/PageTemplate';

export const BestSellerPT = () => (
  <PageTemplate
    title="Best Seller"
    subtitle="Os nossos produtos mais vendidos"
    description="Descubra os artigos promocionais que têm mais sucesso entre os nossos clientes. Artigos de qualidade comprovada que garantem satisfação."
    showProducts
    products={[
      { id: 1, name: 'KIMBERO 300 ml.', description: 'Copo curto com forma geométrica de diamante', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'BRACE + 510 ml.', description: 'Copo de aço inoxidável de parede dupla', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'SUMA 1200 ml.', description: 'Copo de aço inoxidável reciclado', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'SILBASE 300 ml', description: 'Caneca de cerâmica branca mate', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const FabricadoUEPT = () => (
  <PageTemplate
    title="Fabricado UE"
    subtitle="Produtos fabricados na União Europeia"
    description="Todos os nossos produtos fabricados na UE cumprem os mais altos padrões de qualidade e normativas europeias. Apoie a indústria local com produtos de proximidade."
    showProducts
    products={[
      { id: 1, name: 'Garrafa Eco 500ml', description: 'Garrafa de aço inoxidável fabricada em Espanha', price: '12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 2, name: 'Saco de Algodão Orgânico', description: 'Saco de tecido 100% algodão orgânico europeu', price: '3,20 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'T-Shirt Premium', description: 'T-shirt de algodão penteado fabricada em Portugal', price: '8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 4, name: 'Caneta Metálica', description: 'Caneta de alumínio reciclado fabricada na Alemanha', price: '4,50 €', image: '/images/cat-pen.jpg' },
    ]}
  />
);

export const RecicladoPT = () => (
  <PageTemplate
    title="Produtos Reciclados"
    subtitle="Compromisso com o meio ambiente"
    description="A nossa linha de produtos reciclados é concebida para reduzir o impacto ambiental. Materiais sustentáveis sem comprometer a qualidade."
    showProducts
    products={[
      { id: 1, name: 'Garrafa RPET 500ml', description: 'Garrafa fabricada com plástico 100% reciclado', price: '9,90 €', image: '/images/product-recycled.jpg' },
      { id: 2, name: 'Saco de PET Reciclado', description: 'Saco fabricado com garrafas PET recicladas', price: '4,50 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Bloco de Notas Ecológico', description: 'Papel 100% reciclado com capas de cartão', price: '3,80 €', image: '/images/product-outlet.jpg' },
      { id: 4, name: 'Lanyard de PET', description: 'Lanyard fabricado com garrafas recicladas', price: '2,10 €', image: '/images/cat-lanyard.jpg' },
    ]}
  />
);

export const USBStockPT = () => (
  <PageTemplate
    title="USB Stock"
    subtitle="Memórias USB com entrega imediata"
    description="Grande variedade de memórias USB disponíveis em stock para entrega rápida. Desde modelos básicos até opções premium com grande capacidade."
    showProducts
    products={[
      { id: 1, name: 'USB Metal 8GB', description: 'Memória USB metálica com logo gravado', price: '4,50 €', image: '/images/cat-usb.jpg' },
      { id: 2, name: 'USB Cartão 16GB', description: 'USB em formato cartão de crédito', price: '5,90 €', image: '/images/cat-usb.jpg' },
      { id: 3, name: 'USB Bamboo 32GB', description: 'USB ecológico de bambu', price: '8,50 €', image: '/images/cat-usb.jpg' },
      { id: 4, name: 'USB Porta-chaves 64GB', description: 'USB com porta-chaves metálico', price: '12,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const OutletPT = () => (
  <PageTemplate
    title="Outlet"
    subtitle="Ofertas especiais e saldos"
    description="Aproveite as nossas ofertas exclusivas em produtos selecionados. Stock limitado a preços irresistíveis."
    showProducts
    products={[
      { id: 1, name: 'Set de Secretária', description: 'Set completo de secretária com desconto', price: '15,00 €', image: '/images/product-outlet.jpg' },
      { id: 2, name: 'Mochila Portátil', description: 'Mochila para portátil com compartimentos', price: '22,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Guarda-chuva Automático', description: 'Guarda-chuva de abertura automática', price: '11,10 €', image: '/images/product-agumbe.jpg' },
      { id: 4, name: 'Set de Canecas', description: 'Set de 2 canecas de cerâmica', price: '8,00 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const EspecialesPT = () => (
  <PageTemplate
    title="Especiais"
    subtitle="Produtos para ocasiões especiais"
    description="Coleção exclusiva de produtos concebidos para eventos especiais, congressos e celebrações importantes."
    showProducts
    products={[
      { id: 1, name: 'Set de Viagem Premium', description: 'Set completo para viagens de negócio', price: '35,00 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Kit de Boas-vindas', description: 'Kit perfeito para novos funcionários', price: '28,50 €', image: '/images/cat-backpack.jpg' },
      { id: 3, name: 'Set Executivo', description: 'Set de produtos para executivos', price: '45,00 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Pack Evento', description: 'Pack completo para eventos corporativos', price: '19,90 €', image: '/images/cat-bag.jpg' },
    ]}
  />
);

export const PromocionesPT = () => (
  <PageTemplate
    title="Promoções"
    subtitle="Descontos e ofertas do mês"
    description="Descubra as nossas promoções ativas. Descontos especiais em produtos selecionados durante tempo limitado."
    showProducts
    products={[
      { id: 1, name: 'Power Bank 10000mAh', description: 'Carregador portátil com logo iluminado', price: '18,90 €', image: '/images/product-promotion.jpg' },
      { id: 2, name: 'Garrafa Térmica', description: 'Garrafa de aço com isolamento térmico', price: '14,50 €', image: '/images/cat-bottle.jpg' },
      { id: 3, name: 'Set de 3 Canetas', description: 'Set de canetas de diferentes estilos', price: '9,90 €', image: '/images/cat-pen.jpg' },
      { id: 4, name: 'Mochila Eco', description: 'Mochila de materiais reciclados', price: '24,90 €', image: '/images/cat-backpack.jpg' },
    ]}
  />
);

export const CongresosPT = () => (
  <PageTemplate
    title="Congressos"
    subtitle="Produtos para eventos e congressos"
    description="Soluções completas para congressos, feiras e eventos corporativos. Desde lanyards até kits de boas-vindas personalizados."
    showProducts
    products={[
      { id: 1, name: 'Kit Congresso Básico', description: 'Kit essencial para congressos', price: '12,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 2, name: 'Kit Congresso Premium', description: 'Kit completo com saco, bloco e caneta', price: '25,00 €', image: '/images/cat-bag.jpg' },
      { id: 3, name: 'Lanyard Sublimado', description: 'Lanyard personalizado full color', price: '2,50 €', image: '/images/cat-lanyard.jpg' },
      { id: 4, name: 'Porta-crachá', description: 'Porta acreditações com fita', price: '1,80 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NovedadesPT = () => (
  <PageTemplate
    title="Novidades"
    subtitle="Descubra as últimas novidades em produtos promocionais"
    description="Mantenha-se atualizado com as nossas últimas adições. Novos produtos todas as semanas para surpreender os seus clientes."
    showProducts
    products={[
      { id: 1, name: 'Copo Cristal Kimero', description: 'Copo de cristal com design geométrico', price: '2,43 €', image: '/images/product-kimero.jpg' },
      { id: 2, name: 'Copo Térmico Brace', description: 'Copo térmico de aço inoxidável', price: '7,02 €', image: '/images/product-brace.jpg' },
      { id: 3, name: 'Copo Grande Suma', description: 'Copo de grande capacidade 1200ml', price: '9,52 €', image: '/images/product-suma.jpg' },
      { id: 4, name: 'Caneca Silbase', description: 'Caneca de cerâmica mate 300ml', price: '3,72 €', image: '/images/product-silbase.jpg' },
    ]}
  />
);

export const NavidadPT = () => (
  <PageTemplate
    title="Natal"
    subtitle="Coleção especial de Natal"
    description="Encontre o presente corporativo perfeito para este Natal. Produtos especiais para surpreender os seus clientes e funcionários."
    showProducts
    products={[
      { id: 1, name: 'Set Natal Premium', description: 'Set de presente com caixa natalícia', price: '29,90 €', image: '/images/product-especiales.jpg' },
      { id: 2, name: 'Calendário Advento', description: 'Calendário de advento corporativo', price: '19,50 €', image: '/images/product-outlet.jpg' },
      { id: 3, name: 'Set Gourmet', description: 'Set gourmet com produtos selecionados', price: '35,00 €', image: '/images/product-kimero.jpg' },
      { id: 4, name: 'Decoração Natalícia', description: 'Set de decoração personalizada', price: '24,90 €', image: '/images/cat-mug.jpg' },
    ]}
  />
);

export const YourchoicePT = () => (
  <PageTemplate
    title="Yourchoice"
    subtitle="Personalização à sua medida"
    description="Com a Yourchoice pode criar produtos únicos e personalizados. Do design ao acabamento, você decide cada detalhe."
    showProducts
    products={[
      { id: 1, name: 'Lanyard Personalizado', description: 'Lanyard com o seu design full color', price: 'Desde 1,50 €', image: '/images/hero-lanyard.jpg' },
      { id: 2, name: 'T-Shirt Personalizada', description: 'T-shirt com o seu logo ou design', price: 'Desde 8,90 €', image: '/images/cat-tshirt.jpg' },
      { id: 3, name: 'Garrafa Personalizada', description: 'Garrafa com gravação a laser', price: 'Desde 12,50 €', image: '/images/cat-bottle.jpg' },
      { id: 4, name: 'USB Personalizado', description: 'USB com o seu logo iluminado', price: 'Desde 5,90 €', image: '/images/cat-usb.jpg' },
    ]}
  />
);

export const NotaLegalPT = () => (
  <PageTemplate title="Nota Legal" description="Informação legal sobre a utilização do nosso website e condições de serviço.">
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Informação Geral</h3>
      <p className="text-gray-600 mb-4">Em cumprimento da Lei 34/2002, de 11 de julho, dos serviços da sociedade da informação e do comércio eletrónico, informamos que o titular deste website é a DIPROMOTIONS DIGARCO & ASOCIADOS, S.L.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Condições de Utilização</h3>
      <p className="text-gray-600 mb-4">O acesso e utilização deste website atribui a condição de utilizador, e entende-se que aceita as condições de utilização estabelecidas. O utilizador compromete-se a fazer uma utilização adequada dos conteúdos e serviços oferecidos.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Propriedade Intelectual</h3>
      <p className="text-gray-600 mb-4">Todos os conteúdos deste website, incluindo imagens, textos, gráficos e logotipos, são propriedade da DIPROMOTIONS ou são utilizados com autorização dos respetivos proprietários.</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Proteção de Dados</h3>
      <p className="text-gray-600 mb-4">Os dados pessoais fornecidos serão tratados em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD). Pode exercer os seus direitos de acesso, retificação, apagamento, oposição, limitação e portabilidade.</p>
    </div>
  </PageTemplate>
);
