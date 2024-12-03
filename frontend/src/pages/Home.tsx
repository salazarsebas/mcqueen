import React from 'react';
import { Link } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Dream Car
        </h1>
        <p className="text-gray-600 text-lg">
          Browse our exclusive collection of luxury vehicles
        </p>
      </div>

      <FilterBar onSearch={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredCars.slice(0, 6).map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/inventory"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Cars
        </Link>
      </div>
    </main>
  );
}