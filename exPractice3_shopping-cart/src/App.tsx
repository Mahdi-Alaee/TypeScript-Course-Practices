import "./App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ContextData, ContextDataProvider } from "./context/ContextData";
import { Link, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
function App() {
  const router = useRoutes(routes);
  const context = useContext(ContextData);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);

  useEffect(() => {
    setIsProductsLoaded(context?.allProducts.length! > 0);
  }, [context?.allProducts]);

  return (
    <>
      {isProductsLoaded ? (
        <div className="app">
          <header>
            <Link className="logo" to="/">
              Sabzlearn Shop
            </Link>
            <Link to="/cart">
              <AiOutlineShoppingCart className="shop-icon" />
              <span>2</span>
            </Link>
          </header>

          {/* Start Content */}

          {router}

          {/* Finish Content */}

          <footer>
            <a target={"_blank"} href="https://sabzlearn.ir">
              Sabzlearn.ir
            </a>
          </footer>
        </div>
      ) : (
        <div
          style={{
            width: "90vw",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ColorRing height="120" width="120" ariaLabel="loading" />
        </div>
      )}
    </>
  );
}

export default App;
