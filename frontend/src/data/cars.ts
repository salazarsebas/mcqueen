interface Car {
  id: number;
  image: string;
  name: string;
  price: number;
  year: number;
  mileage: string;
  fuelType: string;
}

export const cars: Car[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    name: 'BMW M4 Competition',
    price: 84900,
    year: 2023,
    mileage: '12,450 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    name: 'Mercedes AMG GT',
    price: 118000,
    year: 2023,
    mileage: '8,320 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80',
    name: 'Porsche 911 GT3',
    price: 161100,
    year: 2022,
    mileage: '5,400 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Audi RS e-tron GT',
    price: 147500,
    year: 2023,
    mileage: '2,800 mi',
    fuelType: 'Electric'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
    name: 'Tesla Model S Plaid',
    price: 129900,
    year: 2023,
    mileage: '1,200 mi',
    fuelType: 'Electric'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    name: 'Lamborghini Huracán',
    price: 248000,
    year: 2023,
    mileage: '950 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80',
    name: 'Ferrari F8 Tributo',
    price: 276500,
    year: 2023,
    mileage: '1,850 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80',
    name: 'Rolls-Royce Ghost',
    price: 311900,
    year: 2023,
    mileage: '890 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?auto=format&fit=crop&w=800&q=80',
    name: 'Bentley Continental GT',
    price: 202500,
    year: 2023,
    mileage: '3,200 mi',
    fuelType: 'Gasoline'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80',
    name: 'Porsche Taycan Turbo S',
    price: 185000,
    year: 2023,
    mileage: '2,100 mi',
    fuelType: 'Electric'
  }
];