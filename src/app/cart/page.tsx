'use client';

import { useCartStore } from '../store/cartStore';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-6">Votre panier est vide</p>
            <Link 
              href="/" 
              className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Continuer vos achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Votre Panier</h1>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Continuer vos achats
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center p-6 border-b border-gray-200 last:border-b-0"
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
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
                    <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-700">
                      Quantité:
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="rounded border border-gray-300 py-1 px-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="text-red-600 hover:text-red-800 font-medium transition-colors"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="px-6 py-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">Sous-total</p>
                <p className="text-sm text-gray-600">Frais de livraison calculés à la caisse</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
            </div>
            
            <button 
              className="mt-6 w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Procéder au paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}