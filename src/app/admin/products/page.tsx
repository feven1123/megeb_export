'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  ingredients?: string;
  weight?: string;
  price: number;
  image: string;
}

export default function ProductsAdminPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete product');
      }

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
      if (error instanceof Error) {
        alert('Failed to delete product: ' + error.message);
      } else {
        alert('Failed to delete product: Unknown error');
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <button
          onClick={() => router.push('/admin/products/add')}
          className="bg-[#a67c52] text-white px-4 py-2 rounded hover:bg-[#8b633e] transition"
        >
          Add Product
        </button>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow overflow-hidden relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Category:</strong> {product.category}
                </p>
                {product.ingredients && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Ingredients:</strong> {product.ingredients}
                  </p>
                )}
                {product.weight && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Weight:</strong> {product.weight}
                  </p>
                )}
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Price:</strong> ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => router.push(`/admin/products/edit/${product.id}`)}
                    className="flex items-center text-[#a67c52] hover:underline"
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center text-red-600 hover:underline"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
