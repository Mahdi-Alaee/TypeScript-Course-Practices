import React, { createContext, useState } from "react";
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
