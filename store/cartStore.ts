import {Product} from "@/db/schema/product-schema";
import {create} from "zustand";

interface CartState {
    items: Product[]
    totalQuantity: number;
    totalPrice: number;
    isOpen?: boolean;
    actions: {
        addItem: (product: Product) => void;
        setIsOpen?: (isOpen: boolean) => void;
        // removeItem: (productId: string) => void;
        // updateItemQuantity: (productId: string, quantity: number) => void;
        // clearCart: () => void;
    };
}

const useCartStore = create<CartState>()(set => ({
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isOpen: false,
    actions: {
        addItem(product: Product) {
            set((state) => {
                const newItems = [...state.items, product];
                const totalQuantity = newItems.length;
                const totalPrice = newItems.reduce((sum, item) => sum + Number(item.price), 0);

                return {
                    items: newItems,
                    totalQuantity,
                    totalPrice,
                    isOpen: true,
                };
            });
        },
        setIsOpen(isOpen: boolean) {
            set(() => ({isOpen}));
        },
    }
}))


export const useCartItems = () => useCartStore((state) => state.items);
export const useCartTotalQuantity = () => useCartStore((state) => state.totalQuantity);
export const useCartTotalPrice = () => useCartStore((state) => state.totalPrice);
export const useCartActions = () => useCartStore((state) => state.actions);
export const useCartIsOpen = () => useCartStore((state) => state.isOpen);