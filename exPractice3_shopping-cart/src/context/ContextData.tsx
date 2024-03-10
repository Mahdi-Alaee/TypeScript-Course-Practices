import React, { createContext, useEffect, useState } from "react";
import { ProductType } from "../types";

interface ContextType {
  allProducts: ProductType[];
  setAllProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  basketProducts: ProductType[];
  setBasketProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

export const ContextData = createContext<ContextType | null>(null);

export const ContextDataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [basketProducts, setBasketProducts] = useState<ProductType[]>([]);

  const loadProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setAllProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ContextData.Provider
      value={{
        allProducts,
        setAllProducts,
        basketProducts,
        setBasketProducts,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
