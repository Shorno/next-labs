import {Product} from "@/db/schema/product-schema";
import {create} from "zustand";

export interface CartItem extends Product {
    quantity: number;
    subtotal: number;
}


interface CartState {
    items: CartItem[]
    totalQuantity: number;
    totalPrice: number;
    isOpen?: boolean;
    actions: {
        addItem: (product: Product) => void;
        setIsOpen?: (isOpen: boolean) => void;
        increment: (productId: number) => void
        decrement: (productId: number) => void
        removeItem: (productId: number) => void;
        // updateItemQuantity: (productId: string, quantity: number) => void;
        clearCart: () => void;
    };
}

function calculateTotals(items: CartItem[]) {
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.subtotal, 0)

    return {
        totalQuantity,
        totalPrice
    }
}

function calculateSubtotal(price: number, quantity: number): number {
    return Number(price) * quantity;
}

const useCartStore = create<CartState>()(set => ({
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isOpen: false,
    actions: {
        addItem(product: Product) {
            set((state) => {
                const existingCartItemIndex = state.items.findIndex((existingCartItem) => existingCartItem.id === product.id);
                let updatedCartItems: CartItem[];
                if (existingCartItemIndex !== -1) {

                    updatedCartItems = state.items.map((cartItem, currentIndex) => {
                        if (currentIndex !== existingCartItemIndex) {
                            return cartItem;
                        }
                        const existingCartItem = cartItem;


                        const nextQuantity = product.stock !== undefined ?
                            Math.min(existingCartItem.quantity + 1, product.stock) : existingCartItem.quantity + 1


                        const updatedCartItem: CartItem = {
                            ...existingCartItem,
                            quantity: nextQuantity,
                            subtotal: calculateSubtotal(Number(existingCartItem.price), nextQuantity)
                        }

                        return updatedCartItem;
                    })
                } else {
                    const newCartItem: CartItem = {
                        ...product,
                        quantity: 1,
                        subtotal: calculateSubtotal(Number(product.price), 1)
                    };
                    updatedCartItems = [...state.items, newCartItem]
                }

                const {totalQuantity, totalPrice} = calculateTotals(updatedCartItems)

                return {
                    items: updatedCartItems,
                    totalPrice,
                    totalQuantity,
                    isOpen: true,
                }
            })

        },
        increment(productId) {
            set((state) => {
                const items = state.items.map((item) => {
                    if (item.id === productId) {
                        const max = item.stock ?? Infinity;
                        const newQuantity = Math.min(item.quantity + 1, max);
                        return {
                            ...item,
                            quantity: newQuantity,
                            subtotal: calculateSubtotal(Number(item.price), newQuantity)
                        }
                    }
                    return item;
                })
                const {totalQuantity, totalPrice} = calculateTotals(items);

                return {
                    items,
                    totalQuantity,
                    totalPrice,
                }
            })

        },
        decrement(productId) {
            set((state) => {
                const items = state.items.map((item) => {
                    if (item.id === productId) {
                        const newQuantity = Math.max(item.quantity - 1, 1);
                        return {
                            ...item,
                            quantity: newQuantity,
                            subtotal: calculateSubtotal(Number(item.price), newQuantity)
                        }
                    }
                    return item;
                })
                const {totalQuantity, totalPrice} = calculateTotals(items);
                return {
                    items,
                    totalQuantity,
                    totalPrice
                }
            })
        },
        removeItem(productId) {
            set((state) => {
                const items = state.items.filter((item) => item.id !== productId);
                const {totalQuantity, totalPrice} = calculateTotals(items);
                return {items, totalQuantity, totalPrice};
            });
        },


        setIsOpen(isOpen: boolean) {
            set(() => ({isOpen}));
        },
        clearCart: () => {
            set(() => ({
                items: [],
                totalQuantity: 0,
                totalPrice: 0,
                isOpen: false,
            }));
        },

    }
}))


export const useCartItems = () => useCartStore((state) => state.items);
export const useCartTotalQuantity = () => useCartStore((state) => state.totalQuantity);
export const useCartTotalPrice = () => useCartStore((state) => state.totalPrice);
export const useCartActions = () => useCartStore((state) => state.actions);
export const useCartIsOpen = () => useCartStore((state) => state.isOpen);