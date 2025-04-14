import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartStore } from '@/app/lib/cart';
import { Product } from '@/app/lib/product';

// Fonction pour calculer le total du panier
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Création du store avec persistance
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      // État initial
      items: [],
      total: 0,

      // Ajouter un produit au panier
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);

          if (existingItem) {
            // Si le produit existe déjà, augmenter la quantité
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

          // Si le produit n'existe pas, l'ajouter avec quantité 1
          const newItems = [...state.items, { ...product, quantity: 1 }];

          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        });
      },

      // Supprimer un produit du panier
      removeItem: (productId: number) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== productId);
          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        });
      },

      // Mettre à jour la quantité d'un produit
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

      // Vider le panier
      clearCart: () => {
        set({ items: [], total: 0 });
      },
    }),
    {
      name: 'shopping-cart',
      skipHydration: true,
    }
  )
);