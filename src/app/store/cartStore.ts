import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, CartStore } from '../lib/cart';
import { Product } from '../lib/product';

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,

      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);

          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            return {
              items: updatedItems,
              total: calculateTotal(updatedItems),
            };
          }

          const newItems = [...state.items, { ...product, quantity: 1 }];

          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        });
      },

      removeItem: (productId: number) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== productId);
          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        });
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity < 1) return;
        
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );

          return {
            items: updatedItems,
            total: calculateTotal(updatedItems),
          };
        });
      },

      clearCart: () => {
        set({ items: [], total: 0 });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      skipHydration: false,
    }
  )
);