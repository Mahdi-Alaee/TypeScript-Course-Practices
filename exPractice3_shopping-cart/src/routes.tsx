import { RouteObject } from "react-router-dom";
import Cart from "./Pages/Cart";
import Index from "./Pages/Index";

export const routes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/cart", element: <Cart /> },
];
