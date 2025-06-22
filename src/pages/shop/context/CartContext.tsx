import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { CartContextType, CartType } from "../type/ShopType";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ExtendedCartContextType = CartContextType & {
    clearCart: () => void;
    getTotalAmount: () => number;
    getTotalItems: () => number;
};

const CartContext = createContext<ExtendedCartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartType[]>(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartType) => {
        setCart((prev) => [...prev, item]);
        toast.success(`Se añadió a tu carrito ${item.nombre}`);
    };

    const removeFromCart = (item: CartType) => {
        setCart((prev) => prev.filter((c) => c.id !== item.id));
        toast.error(`Se eliminó a tu carrito ${item.nombre}`);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
        toast.warning(`Se vació tu carrito`);
    };

    const uniqueItems = (arr: CartType[]) => [...new Set(arr.map((item) => item.id))];

    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + (item.precio || 0), 0);
    };

    const getTotalItems = () => {
        return cart.length;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                uniqueItems,
                getTotalAmount,
                getTotalItems,
            }}
        >
            {children}
            <ToastContainer position="top-right" autoClose={700} />
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};

export { CartProvider, useCart };