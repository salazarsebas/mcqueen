import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Car } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Contact from './pages/Contact';

const SERVICES = [
  { name: 'Car Sales', path: '/services/sales' },
  { name: 'Financing', path: '/services/financing' },
  { name: 'Trade-In', path: '/services/trade-in' },
  { name: 'Maintenance', path: '/services/maintenance' },
];

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  
  return (
    <Link
      to={to}
      role="menuitem"
      className={`${
        isActive ? 'text-blue-600' : 'text-gray-600'
      } hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-3 py-2`}
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
                <span className="text-2xl font-bold text-gray-800">LuxuryCars</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route element={<ErrorBoundary />}>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <footer className="bg-gray-800 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-6 h-6" />
                  <span className="text-xl font-bold">LuxuryCars</span>
                </div>
                <p className="text-gray-400">
                  Your trusted partner in finding the perfect luxury vehicle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/inventory" className="hover:text-white">Inventory</Link></li>
                  <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  {SERVICES.map(({ name, path }) => (
                    <li key={path}>
                      <Link to={path} className="hover:text-white transition-colors">
                        {name}
                      </Link>
                    </li>
                ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Luxury Lane</li>
                  <li>Beverly Hills, CA 90210</li>
                  <li>+1 (555) 123-4567</li>
                  <li>info@luxurycars.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2024 LuxuryCars. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;