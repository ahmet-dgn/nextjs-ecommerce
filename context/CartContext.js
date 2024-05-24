"use client";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Sepeti localStorage'dan yükle
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

  // Sepeti localStorage'a kaydet
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const updateCartItemQuantity = (productoOption, productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (productoOption) {
          // Eğer `productoOption` varsa, productId ve option'a göre güncelleme yap
          if (item.id === productId && item.option === productoOption) {
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        } else {
          // `productoOption` yoksa sadece productId'ye göre güncelleme yap
          if (item.id === productId) {
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        }
      })
    );
  };

  const removeFromCart = (productId, productoOption) => {
    setCart((prevCart) =>
      prevCart.filter((item) =>
        productoOption
          ? item.id !== productId || item.option !== productoOption
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
