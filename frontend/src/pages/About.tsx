import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Años de experiencia', value: '25+' },
    { label: 'Carros de lujo vendidos', value: '10,000+' },
    { label: 'Clientes satisfechos', value: '9,800+' },
    { label: 'Personal experto', value: '50+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Garantía de calidad',
      description: 'Cada vehículo pasa por un riguroso examen y certificación.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comitado a proporcionar los vehículos de lujo más finos y servicio.'
    },
    {
      icon: Users,
      title: 'Cliente primero',
      description: 'Su satisfacción es nuestra prioridad en cada interacción.'
    },
    {
      icon: Clock,
      title: 'Confianza',
      description: 'Servicio consistente, confiable que puede contar.'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre McqueenCars</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estableciendo el estándar en la excelencia automotriz de lujo desde 1979
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
            alt="Sala de exposiciones de lujo"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra historia</h2>
          <p className="text-gray-600 mb-4">
            Fundada en 1979, McqueenCars se ha convertido en el destino principal para los entusiastas de los automóviles de lujo. Nuestra historia comenzó con una visión simple: proporcionar una experiencia de compra de automóviles sin precedentes que coincida con la excelencia de nuestros vehículos.
          </p>
          <p className="text-gray-600">
            Hoy, estamos orgullosos de ser el líder en concesionarios de automóviles de lujo en Cartago la ciudad de la papa🥔, sirviendo a clientes de todo el país con nuestra colección excepcional de vehículos y compromiso con el servicio excepcional.
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
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros valores</h2>
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra ubicación</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7523299764107!2d-84.11247812573824!3d9.954552773816683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb4f391be72f%3A0x272928de345334e3!2sPurdy%20Motor!5e0!3m2!1ses-419!2scr!4v1733274543743!5m2!1ses-419!2scr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

