import React, { createContext, useEffect, useState } from "react";
import { ProductType } from "../types";

interface ContextType {
  allProducts: ProductType[];
  basketProducts: ProductType[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  totalPrice: number;
  clearCart: () => void;
}

export const ContextData = createContext<ContextType | null>(null);

export const ContextDataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [basketProducts, setBasketProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setAllProducts(data);
  };

  const addToCart = (id: string) => {
    const targetPrd = allProducts.find((product) => product.id === id);

    if (!targetPrd) {
      // Product with the specified id not found
      console.error(`Product with id ${id} not found.`);
      return;
    }

    setBasketProducts((prev) => {
      const existedProduct = prev.find((product) => product.id === id);

      if (!existedProduct) return [...prev, { ...targetPrd, count: 1 }];
      else {
        return prev.map((product) => {
          if (product.id === existedProduct.id) product.count!++;

          return product;
        });
      }
    });
  };

  const removeFromCart = (id: string) => {
    const targetPrd = basketProducts.find((product) => product.id === id)!;

    setBasketProducts((prev) => {
      if (targetPrd.count! > 1) {
        return prev.map((product) => {
          if (product.id === id) {
            product.count!--;
          }
          return product;
        });
      } else {
        return prev.filter((product) => product.id !== id);
      }
    });
  };

  const clearCart = () => {
    setBasketProducts([]);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    let sum = 0;
    basketProducts.forEach((product) => {
      sum += product.price * product.count!;
    });

    setTotalPrice(sum);
  }, [basketProducts]);

  return (
    <ContextData.Provider
      value={{
        allProducts,
        basketProducts,
        addToCart,
        removeFromCart,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
