import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import { Filter } from 'lucide-react';

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    const matchesFuel = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(car.fuelType);
    return matchesSearch && matchesPrice && matchesFuel;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nuestra colección</h1>
        <p className="text-gray-600">Descubre nuestra colección completa de vehículos de lujo</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Filtros</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Rango de precio</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="300000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Tipo de combustible</h3>
                <div className="space-y-2">
                  {['Gasolina', 'Eléctrico', 'Híbrido'].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedFuelTypes.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFuelTypes([...selectedFuelTypes, type]);
                          } else {
                            setSelectedFuelTypes(selectedFuelTypes.filter(t => t !== type));
                          }
                        }}
                        className="rounded text-blue-600"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <FilterBar onSearch={setSearchTerm} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {filteredCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No hay carros que coincidan con sus filtros actuales.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}