import { create } from "zustand";
import { persist } from "zustand/middleware";

const normalizeCartName = (name) => String(name).toLowerCase().trim();

export const useStore = create(
  persist((set) => ({
    cart: [],
    clearCart: () => set({ cart: [] }),
    addToCart: (name) =>
      set((state) => {
        const normalizedName = normalizeCartName(name);

        const exist = state.cart.find(
          (item) => normalizeCartName(item.name) === normalizedName,
        );

        if (exist) {
          return {
            cart: state.cart.map((item) =>
              normalizeCartName(item.name) === normalizedName
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        }

        return {
          cart: [
            ...state.cart,
            {
              name: normalizedName,
              quantity: 1,
            },
          ],
        };
      }),

    decreaseQuantity: (name) =>
      set((state) => {
        const normalizedName = normalizeCartName(name);
        const updatedCart = state.cart.map((item) =>
          normalizeCartName(item.name) === normalizedName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
        return {
          cart: updatedCart.filter((item) => item.quantity > 0),
        };
      }),

    removeFromCart: (name) =>
      set((state) => ({
        cart: state.cart.filter(
          (item) => normalizeCartName(item.name) !== normalizeCartName(name),
        ),
      })),
  })),
);
