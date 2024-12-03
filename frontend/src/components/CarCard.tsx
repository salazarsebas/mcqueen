import React from 'react';
import { Heart, DollarSign, Fuel, Calendar, Gauge } from 'lucide-react';

interface CarProps {
  image: string;
  name: string;
  price: number;
  year: number;
  mileage: string;
  fuelType: string;
}

export default function CarCard({ image, name, price, year, mileage, fuelType }: CarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button 
          aria-label={`Add ${name} to favorites`}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white"
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center text-green-600 mb-4">
          <DollarSign className="w-5 h-5" />
          <span className="text-xl font-bold">{price.toLocaleString()}</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{fuelType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}