'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  ingredients?: string;
  weight?: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('API returned invalid data:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts([]);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="pt-20 bg-[#fef7ef]"> {/* soft beige background */}

        {/* Intro Section */}
        <section className="bg-[#f8e8d8] text-[#6b4226] py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse and search through our delicious Ethiopian food products.
          </p>
        </section>

        {/* Search Section */}
        <section className="bg-white py-10 px-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <input
              type="text"
              placeholder="Search by name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring focus:border-primary"
            />
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 bg-[#fdf5ec]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={
                      product.image && product.image.trim() !== ''
                        ? `/uploads/${product.image}`
                        : '/images/placeholder.jpg'
                    }
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#6b4226] mb-1">{product.name}</h3>
                <p className="text-sm text-[#8b5e3c] mb-1">{product.category}</p>
                <p className="text-sm text-[#8b5e3c] mb-2">{product.description}</p>
                {product.ingredients && (
                  <p className="text-sm text-[#8b5e3c] mb-1">
                    <strong>Ingredients:</strong> {product.ingredients}
                  </p>
                )}
                {product.weight && (
                  <p className="text-sm text-[#8b5e3c] mb-1">
                    <strong>Weight:</strong> {product.weight}
                  </p>
                )}
                <p className="text-lg font-semibold text-green-700 mb-4">₨ {product.price}</p>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/Products/${product.id}`}
                    className="inline-block bg-[#f8e8d8] hover:bg-[#fef7ef] text-[#6b4226] px-4 py-2 rounded font-medium"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center text-[#8b5e3c] mt-10">No products found.</div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
