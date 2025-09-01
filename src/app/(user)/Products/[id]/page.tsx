'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

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

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch('/api/products');
        const data: Product[] = await res.json();
        const foundProduct = data.find((p) => p.id === Number(id));
        setProduct(foundProduct || null);
      } catch (err) {
        console.error('Error loading product:', err);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-28 text-center">
          <h1 className="text-2xl text-gray-600">Product not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 max-w-4xl mx-auto p-4">
        {/* Product Image */}
        <div className="relative w-full h-64 rounded overflow-hidden shadow mb-6">
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

        {/* Product Details */}
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2 text-gray-700">{product.description}</p>
        <p className="mb-2 text-gray-500">Category: {product.category}</p>
        {product.ingredients && (
          <p className="mb-2 text-gray-500">
            <strong>Ingredients:</strong> {product.ingredients}
          </p>
        )}
        {product.weight && (
          <p className="mb-2 text-gray-500">
            <strong>Weight:</strong> {product.weight}
          </p>
        )}
        <p className="text-lg font-semibold text-green-700 mb-6">
          ₨ {product.price}
        </p>

        {/* Contact Form */}
        <h2 className="text-2xl font-semibold mb-4">Send a Request</h2>
        <form
          action="https://formsubmit.co/favumail20@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_subject"
            value={`Request for ${product.name}`}
          />
          <input
            type="hidden"
            name="_next"
            value="https://megeb-export.vercel.app/Products"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name *"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email *"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message *"
            className="w-full border px-3 py-2 rounded"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="bg-[#f8e8d8] text-[#6b4226] px-4 py-2 rounded hover:bg-[#f0d9c3]"
          >
            Send Request
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
