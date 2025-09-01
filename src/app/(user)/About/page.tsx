'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div style={{ height: '80px' }} />
      <main className="min-h-screen bg-[#fef7ef]"> {/* soft beige background */}

        {/* Intro Section */}
        <section className="bg-[#f8e8d8] py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6b4226]">About Megeb Export</h1>
          <p className="max-w-3xl mx-auto text-lg text-[#5a3e2b]">
            Delivering authentic Ethiopian products with quality, reliability, and passion. Experience the richness of Ethiopia in every order.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-[#7a4e2d] mb-6 text-center">Who We Are</h2>
          <p className="text-[#8b5e3c] text-lg leading-relaxed max-w-5xl mx-auto text-justify">
            Megeb Export is dedicated to bringing authentic Ethiopian flavors and products to your doorstep. We carefully source every item from trusted local producers to ensure the highest quality. Our mission is to connect people around the world with the rich traditions and taste of Ethiopia through reliable and professional service.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-[#7a4e2d] mb-10 text-center">Why Choose Megeb Export?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div className="bg-[#fdf5ec] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#7a4e2d] mb-2">Authentic Products</h3>
              <p className="text-[#8b5e3c]">We source genuine Ethiopian products directly from trusted local producers.</p>
            </div>
            <div className="bg-[#fdf5ec] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#7a4e2d] mb-2">Reliable Service</h3>
              <p className="text-[#8b5e3c]">Our team ensures your orders are carefully handled and delivered on time.</p>
            </div>
            <div className="bg-[#fdf5ec] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#7a4e2d] mb-2">Customer Satisfaction</h3>
              <p className="text-[#8b5e3c]">We focus on quality, freshness, and service to make every order a delight.</p>
            </div>
          </div>
        </section>

        {/* Image and Description Section */}
        <section className="py-16 px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
            <div className="flex-1">
              <Image
                src="/images/ethiopian-products.jpg"
                alt="Megeb Export Products"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-[#7a4e2d]">Committed to Quality</h3>
              <p className="text-[#8b5e3c] text-lg leading-relaxed">
                At Megeb Export, we prioritize quality and authenticity. Every product is carefully sourced to bring the true taste of Ethiopia to your home or business. Our focus is on delivering an exceptional experience with every order.
              </p>
            </div>
          </div>
        </section>

        {/* CEO's Message Section */}
        <section className="py-16 px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-[#7a4e2d] mb-4 text-center md:text-left">Message from the CEO</h2>
              <p className="text-[#8b5e3c] text-lg leading-relaxed">
                Welcome to Megeb Export! Our goal is to bring authentic Ethiopian products to customers worldwide with care, reliability, and passion. We are committed to maintaining the highest standards and connecting people with Ethiopia’s rich culinary heritage.
              </p>
              <p className="mt-6 font-semibold text-[#8b5e3c]">— Mrs. Feven Gebremedhn, CEO</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/ceo-feven.jpg"
                alt="CEO Mrs. Feven Gebremedhn"
                width={350}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sister Companies Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#7a4e2d] mb-12">Our Sister Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
              {[
                { name: 'Selam Wellness', logo: '/images/sister1.png' },
                { name: 'Zemen Aromatherapy', logo: '/images/sister2.png' },
                { name: 'Abyssinia Natural Care', logo: '/images/sister3.png' },
                { name: 'Ethio Herbal Essentials', logo: '/images/sister4.png' },
                { name: 'Selam Beauty Clinic', logo: '/images/sister5.png' },
                { name: 'Selam Holistic Center', logo: '/images/sister6.png' },
              ].map((company) => (
                <div key={company.name} className="flex flex-col items-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={64}
                    height={64}
                    className="object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-[#8b5e3c]">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
