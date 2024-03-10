import React, { createContext, useEffect, useState } from "react";
import { CartProductType, ProductType } from "../types";

interface ContextType {
  allProducts: ProductType[];
  setAllProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  basketProducts: ProductType[];
  setBasketProducts: React.Dispatch<React.SetStateAction<CartProductType[]>>;
  addToCart: (id: string) => void;
}

export const ContextData = createContext<ContextType | null>(null);

export const ContextDataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [basketProducts, setBasketProducts] = useState<CartProductType[]>([]);

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
          if (product.id === existedProduct.id) product.count++;

          return product;
        });
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    console.log(basketProducts);
  }, [basketProducts]);

  return (
    <ContextData.Provider
      value={{
        allProducts,
        setAllProducts,
        basketProducts,
        setBasketProducts,
        addToCart,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
