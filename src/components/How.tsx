'use client';

import React from 'react';

const steps = [
  {
    title: 'Select Your Product',
    description: 'Browse our authentic Ethiopian food products and choose what you need.',
    icon: '🍲',
  },
  {
    title: 'Place Your Order',
    description: 'Fill in your order details easily and select your delivery preferences.',
    icon: '🛒',
  },
  {
    title: 'Shipping & Delivery',
    description: 'We carefully package and ship your order to reach you safely.',
    icon: '📦',
  },
  {
    title: 'Enjoy the Taste',
    description: 'Receive and enjoy authentic Ethiopian flavors at your home or business.',
    icon: '🌿',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#f8f1e7]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-16 text-[#6b4226]">
          How Megeb Export Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl"
              style={{ zIndex: steps.length - idx }} // slight stagger effect
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#a67c52] to-[#6b4226] text-white text-4xl shadow-lg mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4b2e1a]">{step.title}</h3>
              <p className="text-[#5a3e2b]">{step.description}</p>

              {/* Optional floating connector dot for style */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-40px] top-1/2 w-4 h-4 bg-[#a67c52] rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
