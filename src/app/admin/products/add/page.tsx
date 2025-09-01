'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

export default function AddProductPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    ingredients: '',
    weight: '',
    price: '',
    image: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleSubmit = async () => {
    try {
      const body = {
        ...formData,
        price: parseFloat(formData.price),
      };

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add product');
      }

      router.push('/admin/products');
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error adding product: ${error.message}`);
      } else {
        alert('An unknown error occurred while adding the product.');
      }
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-[#6b4226]">Add New Product</h1>

      {/* Image Upload */}
      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-[#a67c52] rounded text-sm text-[#6b4226] hover:bg-[#f8f1e7] mb-4"
      >
        <Plus className="w-4 h-4 mr-2" />
        Choose Image
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
          className="w-full h-48 object-cover rounded mb-4 shadow"
        />
      )}

      {/* Form Inputs */}
      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-3 border border-[#a67c52] px-3 py-2 rounded"
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full mb-3 border border-[#a67c52] px-3 py-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={3}
        className="w-full mb-3 border border-[#a67c52] px-3 py-2 rounded"
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (optional)"
        value={formData.ingredients}
        onChange={handleChange}
        rows={2}
        className="w-full mb-3 border border-[#a67c52] px-3 py-2 rounded"
      />
      <input
        name="weight"
        placeholder="Weight (optional, e.g., 500g)"
        value={formData.weight}
        onChange={handleChange}
        className="w-full mb-3 border border-[#a67c52] px-3 py-2 rounded"
      />
      <input
        name="price"
        placeholder="Price (USD)"
        value={formData.price}
        onChange={handleChange}
        type="number"
        step="0.01"
        className="w-full mb-4 border border-[#a67c52] px-3 py-2 rounded"
      />

      <button
        onClick={handleSubmit}
        className="bg-[#a67c52] hover:bg-[#8b633e] text-white px-6 py-2 rounded font-medium transition"
      >
        Add Product
      </button>
    </div>
  );
}
