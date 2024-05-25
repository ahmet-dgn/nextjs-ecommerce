"use client";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (error) {
          console.error("Error parsing cart data from localStorage:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const updateCartItemQuantity = (productOption, productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (productOption) {
          if (item.id === productId && item.option === productOption) {
            return { ...item, quantity: newQuantity };
          }
        } else {
          if (item.id === productId) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId, productOption) => {
    setCart((prevCart) =>
      prevCart.filter((item) =>
        productOption
          ? item.id !== productId || item.option !== productOption
          : item.id !== productId
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
