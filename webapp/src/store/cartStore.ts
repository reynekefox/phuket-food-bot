import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Dish } from '../types';

interface CartStore {
    items: CartItem[];
    addItem: (dish: Dish) => void;
    removeItem: (dishId: string) => void;
    updateQuantity: (dishId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (dish: Dish) => {
                set((state) => {
                    const existingItem = state.items.find((item) => item.dish.id === dish.id);
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.dish.id === dish.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return { items: [...state.items, { dish, quantity: 1 }] };
                });
            },

            removeItem: (dishId: string) => {
                set((state) => ({
                    items: state.items.filter((item) => item.dish.id !== dishId),
                }));
            },

            updateQuantity: (dishId: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(dishId);
                    return;
                }
                set((state) => ({
                    items: state.items.map((item) =>
                        item.dish.id === dishId ? { ...item, quantity } : item
                    ),
                }));
            },

            clearCart: () => set({ items: [] }),

            getTotalPrice: () => {
                return get().items.reduce(
                    (total, item) => total + item.dish.price * item.quantity,
                    0
                );
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },
        }),
        {
            name: 'phuket-cart',
        }
    )
);
