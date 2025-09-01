'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Alemayehu Tesfaye',
    role: 'Regular Customer',
    photo: '/images/testimonials/alemayehu.jpg',
    feedback:
      'Megeb Export delivers authentic Ethiopian products every time. The service is reliable and professional.',
  },
  {
    name: 'Sara Bekele',
    role: 'Food Enthusiast',
    photo: '/images/testimonials/sara.jpg',
    feedback:
      'The quality of the products and the timely delivery make Megeb Export my go-to for Ethiopian flavors.',
  },
  {
    name: 'Daniel Kebede',
    role: 'First-time Buyer',
    photo: '/images/testimonials/daniel.jpg',
    feedback:
      'I was impressed by the authenticity and freshness of the products. Highly recommend Megeb Export!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f1e7] text-gray-900"> {/* warm beige background */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-[#9c6b42]"> {/* medium brown heading */}
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map(({ name, role, photo, feedback }, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={photo}
                alt={`${name} photo`}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-[#d1a67d]"
              />
              <p className="text-[#7a4e2d] italic mb-6">“{feedback}”</p>
              <h3 className="text-xl font-semibold text-[#5e3c26]">{name}</h3>
              <p className="text-sm text-[#8b5e3c]">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
