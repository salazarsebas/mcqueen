import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

// types/about.ts
interface Stat {
  label: string;
  value: string;
}

interface Value {
  icon: typeof Shield;
  title: string;
  description: string;
}

const STORE_LOCATION = {
  lat: 34.0696147806083,
  lng: -118.40144168478264,
  address: 'Beverly Hills, CA 90210'
};

// data/about.ts
export const COMPANY_STATS: Stat[] = [
  { label: 'Years of Experience', value: '25+' },
  // ... other stats
];

export const COMPANY_VALUES: Value[] = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every vehicle undergoes rigorous inspection and certification.'
  },
  // ... other values
];

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Luxury Cars Sold', value: '10,000+' },
    { label: 'Satisfied Customers', value: '9,800+' },
    { label: 'Expert Staff', value: '50+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes rigorous inspection and certification.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the finest luxury vehicles and service.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority in every interaction.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on.'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About LuxuryCars</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Setting the standard in luxury automotive excellence since 1999
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="relative w-full h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
              alt="LuxuryCars Beverly Hills showroom featuring premium vehicles and modern architecture"
              className="rounded-lg shadow-lg w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1999, LuxuryCars has established itself as the premier destination for luxury automobile enthusiasts. Our journey began with a simple vision: to provide an unparalleled car buying experience that matches the excellence of our vehicles.
          </p>
          <p className="text-gray-600">
            Today, we're proud to be the leading luxury car dealership in Beverly Hills, serving clients nationwide with our exceptional collection of vehicles and commitment to outstanding service.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(STORE_LOCATION.address)}`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LuxuryCars Beverly Hills Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </main>
  );
}