'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  weight?: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState([
    { title: 'Total Products', value: 0 },
    { title: 'Spices', value: 0 },
    { title: 'Grains', value: 0 },
    { title: 'Beverages', value: 0 },
  ]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data: Product[] = await res.json();

        const total = data.length;
        const spicesCount = data.filter(p => p.category.toLowerCase().includes('spice')).length;
        const grainsCount = data.filter(p => p.category.toLowerCase().includes('grain')).length;
        const beveragesCount = data.filter(p => p.category.toLowerCase().includes('beverage')).length;

        setStats([
          { title: 'Total Products', value: total },
          { title: 'Spices', value: spicesCount },
          { title: 'Grains', value: grainsCount },
          { title: 'Beverages', value: beveragesCount },
        ]);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-gray-600 text-md">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Orders Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { name: 'Jan', orders: 12 },
                { name: 'Feb', orders: 18 },
                { name: 'Mar', orders: 9 },
                { name: 'Apr', orders: 22 },
                { name: 'May', orders: 27 },
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
