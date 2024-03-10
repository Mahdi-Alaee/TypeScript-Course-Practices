import "./App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ContextDataProvider } from "./context/ContextData";
import { Link, useRoutes } from "react-router-dom";
import { routes } from "./routes";
function App() {
  const router = useRoutes(routes);

  return (
    <ContextDataProvider>
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
    </ContextDataProvider>
  );
}

export default App;
