import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';

export default function Home() {
  const filters = [
    'Top Villa', 'Pet Friendly', 'Self Checkin', 'Beachfront',
    'Mountain View', 'Free Parking', 'Free WiFi'
  ];

  return (
    <div className="px-4 py-8">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-20 px-4 rounded-lg mb-8"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x600/?villa')` }}>
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
              <div className="text-sm mt-2 text-yellow-500">⭐ {property.rating}</div>
              <div className="text-blue-600 font-bold mt-2">${property.price}/night</div>
              {property.discount && (
                <span className="inline-block mt-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                  {property.discount}% off
                </span>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
