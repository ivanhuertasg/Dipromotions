// =============================================
// APP PRINCIPAL - diPromotions
// =============================================

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Context Provider
import { LanguageProvider } from './context/LanguageContext';

// Layout
import TopBar from './sections/TopBar';
import Header from './sections/Header';
import Footer from './sections/Footer';

// Pages
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Producto from './pages/Producto';
import Checkout from './pages/Checkout';
import {
  BestSeller,
  FabricadoUE,
  Reciclado,
  USBStock,
  Outlet,
  Especiales,
  Promociones,
  Congresos,
  Novedades,
  Navidad,
  Yourchoice,
  NotaLegal,
} from './pages/subpages';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          {/* Top Bar con selector de idioma */}
          <TopBar />
          
          {/* Header principal con navegación */}
          <Header />
          
          {/* Contenido principal */}
          <main className="flex-1">
            <Routes>
              {/* Páginas principales */}
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:category" element={<Catalogo />} />
              <Route path="/producto/:slug" element={<Producto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contacto" element={<Contacto />} />
              
              {/* Subpáginas de categorías */}
              <Route path="/best-seller" element={<BestSeller />} />
              <Route path="/fabricado-ue" element={<FabricadoUE />} />
              <Route path="/reciclado" element={<Reciclado />} />
              <Route path="/usb" element={<USBStock />} />
              <Route path="/outlet" element={<Outlet />} />
              <Route path="/especiales" element={<Especiales />} />
              <Route path="/promociones" element={<Promociones />} />
              <Route path="/congresos" element={<Congresos />} />
              <Route path="/novedades" element={<Novedades />} />
              <Route path="/navidad" element={<Navidad />} />
              <Route path="/yourchoice" element={<Yourchoice />} />
              
              {/* Legal */}
              <Route path="/nota-legal" element={<NotaLegal />} />
              
              {/* 404 - Redirigir a home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Toast notifications */}
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
                borderRadius: '12px',
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
