import PageTemplate from '../sections/PageTemplate';
import { useLanguage } from '../context/LanguageContext';

// Best Seller Page
export const BestSeller = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.bestSeller.title')}
      subtitle={t('pages.bestSeller.subtitle')}
      description={t('pages.bestSeller.description')}
      showProducts
      productFilter={{ is_bestseller: true, limit: 8 }}
    />
  );
};

// Fabricado UE Page
export const FabricadoUE = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.fabricadoUE.title')}
      subtitle={t('pages.fabricadoUE.subtitle')}
      description={t('pages.fabricadoUE.description')}
      showProducts
      productFilter={{ is_eu_made: true, limit: 8 }}
    />
  );
};

// Reciclado Page
export const Reciclado = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.reciclado.title')}
      subtitle={t('pages.reciclado.subtitle')}
      description={t('pages.reciclado.description')}
      showProducts
      productFilter={{ is_eco: true, limit: 8 }}
    />
  );
};

// USB Stock Page
export const USBStock = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.usbStock.title')}
      subtitle={t('pages.usbStock.subtitle')}
      description={t('pages.usbStock.description')}
      showProducts
      productFilter={{ category: 'tecnologia', limit: 8 }}
    />
  );
};

// Outlet Page
export const Outlet = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.outlet.title')}
      subtitle={t('pages.outlet.subtitle')}
      description={t('pages.outlet.description')}
      showProducts
      productFilter={{ limit: 8 }}
    />
  );
};

// Especiales Page
export const Especiales = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.especiales.title')}
      subtitle={t('pages.especiales.subtitle')}
      description={t('pages.especiales.description')}
      showProducts
      productFilter={{ limit: 8 }}
    />
  );
};

// Promociones Page
export const Promociones = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.promociones.title')}
      subtitle={t('pages.promociones.subtitle')}
      description={t('pages.promociones.description')}
      showProducts
      productFilter={{ limit: 8 }}
    />
  );
};

// Congresos Page
export const Congresos = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.congresos.title')}
      subtitle={t('pages.congresos.subtitle')}
      description={t('pages.congresos.description')}
      showProducts
      productFilter={{ category: 'congresos', limit: 8 }}
    />
  );
};

// Novedades Page
export const Novedades = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.novedades.title')}
      subtitle={t('pages.novedades.subtitle')}
      description={t('pages.novedades.description')}
      showProducts
      productFilter={{ is_new: true, limit: 8 }}
    />
  );
};

// Navidad Page
export const Navidad = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.navidad.title')}
      subtitle={t('pages.navidad.subtitle')}
      description={t('pages.navidad.description')}
      showProducts
      productFilter={{ limit: 8 }}
    />
  );
};

// Yourchoice Page
export const Yourchoice = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.yourchoice.title')}
      subtitle={t('pages.yourchoice.subtitle')}
      description={t('pages.yourchoice.description')}
      showProducts
      productFilter={{ limit: 8 }}
    />
  );
};

// Nota Legal Page
export const NotaLegal = () => {
  const { t } = useLanguage();
  return (
    <PageTemplate
      title={t('pages.notaLegal.title')}
      description={t('pages.notaLegal.description')}
    >
      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">1. {t('pages.notaLegal.section1.title')}</h3>
        <p className="text-gray-600 mb-4">
          {t('pages.notaLegal.section1.content')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">2. {t('pages.notaLegal.section2.title')}</h3>
        <p className="text-gray-600 mb-4">
          {t('pages.notaLegal.section2.content')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">3. {t('pages.notaLegal.section3.title')}</h3>
        <p className="text-gray-600 mb-4">
          {t('pages.notaLegal.section3.content')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">4. {t('pages.notaLegal.section4.title')}</h3>
        <p className="text-gray-600 mb-4">
          {t('pages.notaLegal.section4.content')}
        </p>
      </div>
    </PageTemplate>
  );
};
