import { useEffect, useState } from "react";
import { CartItem } from "../types/amazonTypes";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadFromStorage = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
          },
          {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: "2",
          },
        ]);
      }
    };
    loadFromStorage();
  }, []);

  useEffect(() => {
    const saveToStorage = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    saveToStorage();
  }, [cart]);

  const calculateCartQuantity = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  const addToCart = (productId: string, quantity: number) => {
    setCart((prevCart) => {
      const matchingItem = prevCart.find(
        (item) => item.productId === productId
      );

      if (matchingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            productId,
            quantity,
            deliveryOptionId: "1",
          },
        ];
      }
    });
  };
  return {
    cart,
    calculateCartQuantity,
    addToCart,
  };
}
