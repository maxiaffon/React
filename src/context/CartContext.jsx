import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
   
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(storedCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (newProduct) => {
        const existingProduct = cart.find((p) => p.id === newProduct.id);
        if (existingProduct) {
            setCart(cart.map((p) =>
                p.id === newProduct.id ? { ...p, quantity: p.quantity + newProduct.quantity } : p
            ));
        } else {
            setCart([...cart, newProduct]);
        }
    };

    const removeProduct = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart"); 
    };

    const totalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((total, product) => total + product.quantity * product.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
