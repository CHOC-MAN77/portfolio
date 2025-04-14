'use client';

import { useCartStore } from '@/app/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            href="../components" 
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <Link 
            href="/" 
            className="text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center px-6 py-5 border-b border-gray-200"
            >
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <div className="ml-6 flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-lg font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-600">
                      Quantity:
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="rounded border border-gray-300 py-1 px-2"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">Subtotal</p>
                <p className="text-sm text-gray-600">Shipping calculated at checkout</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
            </div>
            
            <button 
              className="mt-4 w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}