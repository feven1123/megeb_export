// File: app/api/products/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET: fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: 'desc' },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('GET products error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ✅ POST: add new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, category, description, ingredients, weight, price, image } = body;

    // Validation
    if (!name || !category || !description || !price || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        category,
        description,
        ingredients,
        weight,
        price,
        image,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('POST /api/products error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// ✅ PUT: update existing product
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, category, description, ingredients, weight, price, image } = body;

    if (!id || !name || !category || !description || !price || !image) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const updated = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, category, description, ingredients, weight, price, image },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PUT /api/products error:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// ✅ DELETE product
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');

  const id = idParam ? parseInt(idParam, 10) : null;

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'Invalid or missing product ID' }, { status: 400 });
  }

  try {
    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Product deleted' }, { status: 200 });
  } catch (error) {
    console.error('DELETE product error:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
