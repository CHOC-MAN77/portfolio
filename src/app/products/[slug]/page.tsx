'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '../../store/cartStore'
import { products } from '../../data/products'
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const [selectedFrame, setSelectedFrame] = useState('');
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const frames = ['Black', 'White', 'None'];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Retour aux produits
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                  
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price}</p>
            <p className="text-gray-600 mb-8">
              This is an art print. The handcrafted canvas makes it perfect for both home and office wall decor. Option to frame.
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Frame</label>
              <select 
                className="w-full border rounded-md p-2"
                value={selectedFrame}
                onChange={(e) => setSelectedFrame(e.target.value)}
              >
                <option value="">Select Frame</option>
                {frames.map((frame) => (
                  <option key={frame} value={frame}>{frame}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-32 border rounded-md p-2"
              />
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}