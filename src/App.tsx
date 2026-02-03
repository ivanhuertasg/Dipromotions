import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './sections/TopBar';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Producto from './pages/Producto';
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
  const [currentLang, setCurrentLang] = useState('ES');

  // Load saved language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('dipromotions_lang');
    if (savedLang) {
      setCurrentLang(savedLang);
      document.documentElement.lang = savedLang.toLowerCase();
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopBar currentLang={currentLang} onLangChange={setCurrentLang} />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/producto/:slug" element={<Producto />} />
            <Route path="/carrito" element={<Carrito />} />
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
            <Route path="/nota-legal" element={<NotaLegal />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
