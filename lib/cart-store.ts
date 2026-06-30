"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types/product";

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product, selectedLength: string) => void;
  removeFromCart: (id: string, selectedLength: string) => void;
  updateQuantity: (id: string, selectedLength: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product, selectedLength) => {
        const currentPrice = product.salePrice || product.price;
        
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === product.id && item.selectedLength === selectedLength
          );

          if (existingItemIndex !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + 1,
            };
            return { items: updatedItems };
          } else {
            const newItem: CartItem = {
              ...product,
              selectedLength,
              quantity: 1,
              currentPrice,
            };
            return { items: [...state.items, newItem] };
          }
        });
      },

      removeFromCart: (id, selectedLength) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.selectedLength === selectedLength)
          ),
        }));
      },

      updateQuantity: (id, selectedLength, quantity) => {
        if (quantity < 1) return;
        
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.selectedLength === selectedLength
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.currentPrice * item.quantity,
          0
        );
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "btx3-cart-storage",
      partialize: (state) => ({ items: state.items }),
    }
  )
);