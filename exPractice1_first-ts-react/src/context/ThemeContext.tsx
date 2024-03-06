import React, { createContext } from "react";
import themes from "./themes";

export const ThemeContext = createContext(themes);

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
