'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

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

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<Product>({
    id: Number(id),
    name: '',
    category: '',
    description: '',
    ingredients: '',
    weight: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch('/api/products');
        const data: Product[] = await res.json();
        const product = data.find((p) => p.id === Number(id));
        if (product) setFormData(product);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    }
    fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to update product');
      router.push('/admin/products');
    } catch (error) {
      alert('Error updating product');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>

      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-gray-400 rounded text-sm text-gray-600 hover:bg-gray-100 mb-2"
      >
        <Plus className="w-4 h-4 mr-2" />
        Change Image
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      {formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="ingredients"
        placeholder="Ingredients (optional)"
        value={formData.ingredients}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="weight"
        placeholder="Weight (optional)"
        value={formData.weight}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        className="w-full mb-4 border px-3 py-2 rounded"
      />

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Changes
      </button>
    </div>
  );
}
