'use client';

import React from 'react';

const features = [
  {
    icon: '📦',
    title: 'Authentic Products',
    description: 'We deliver genuine Ethiopian food products sourced directly from trusted producers.',
  },
  {
    icon: '🤝',
    title: 'Reliable Service',
    description: 'Our team ensures your orders are handled carefully and delivered on time.',
  },
  {
    icon: '🌱',
    title: 'Natural Ingredients',
    description: 'All our products are made from high-quality, natural, and organic ingredients.',
  },
  {
    icon: '🚚',
    title: 'Flexible Delivery',
    description: 'Choose delivery times and locations that fit your needs for convenience.',
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-24 bg-[#fef7ef] text-gray-900"> {/* warm, soft beige background */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide text-[#9c6b42]">
          What You Get with Megeb Export
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-6 px-4">
              <div className="flex-shrink-0 bg-gradient-to-tr from-[#d1a67d] to-[#b08b5a] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2 text-[#7a4e2d]">{feature.title}</h3>
                <p className="text-[#8b5e3c] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
