import React from 'react';
import { Car } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Contact from './pages/Contact';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`${
        isActive ? 'text-blue-600' : 'text-gray-600'
      } hover:text-blue-600 transition-colors`}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <Car className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-800">McqueenCars</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <NavLink to="/">Carros</NavLink>
                <NavLink to="/inventory">Inventario</NavLink>
                <NavLink to="/about">Sobre nosotros</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gray-800 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-6 h-6" />
                  <span className="text-xl font-bold">McqueenCars</span>
                </div>
                <p className="text-gray-400">
                  Su socio de confianza para encontrar el vehículo de lujo perfecto.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white">Carros</Link></li>
                  <li><Link to="/inventory" className="hover:text-white">Inventario</Link></li>
                  <li><Link to="/about" className="hover:text-white">Sobre nosotros</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contacto</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contactanos</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>1234 San Luis</li>
                  <li>Cartago, CA 902109</li>
                  <li>+506 73283900</li>
                  <li>info@mqueencars.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2024 MqueenCars.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;