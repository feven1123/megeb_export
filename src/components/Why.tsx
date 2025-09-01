'use client';

import React from 'react';

const reasons = [
  {
    icon: '🌿',
    title: 'Trusted Quality',
    description: 'We use premium natural products and professional techniques for your customers.',
  },
  {
    icon: '🤝',
    title: 'Personalized Service',
    description: 'Our team tailors each order to your unique needs and preferences.',
  },
  {
    icon: '⏱️',
    title: 'Reliable Delivery',
    description: 'We ensure your products arrive safely and on time.',
  },
  {
    icon: '🏆',
    title: 'Experienced Team',
    description: 'Our certified staff bring years of expertise to ensure quality and satisfaction.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#fef7ef]"> {/* warm, soft beige background */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-16 text-[#9c6b42]"> {/* medium brown for contrast */}
          Why Choose Megeb Export
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl"
              style={{ zIndex: reasons.length - idx }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#d1a67d] to-[#b08b5a] text-5xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#7a4e2d] group-hover:text-[#d1a67d] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-[#8b5e3c] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
