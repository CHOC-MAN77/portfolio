'use client';

import Link from 'next/link';
import { products } from '../data/products';



export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-8xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Nos Produits</h1>
        
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
            <Link
              key={product.id}
              href={`../products/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-center">{product.name}</h3>
                <p className="text-gray-600 text-center">${product.price}</p>
              </div>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
}