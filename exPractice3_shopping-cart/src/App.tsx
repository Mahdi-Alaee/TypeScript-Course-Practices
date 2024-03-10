import React from "react";
import "./App.css";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "./components/Product";
import { ContextDataProvider } from "./context/ContextData";
function App() {
  return (
    <ContextDataProvider>
      <div className="app">
        <header>
          <a className="logo" href="#">
            Sabzlearn Shop
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="shop-icon" />
            <span>2</span>
          </a>
        </header>

        {/* Start Content */}

        <section>
          <p className="title">All Products:</p>
        </section>
        <img className="index-first-bg" src="/hero-gradient.svg" />
        <main className="main-index">
          <Product
            title="Test Title ..."
            img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            price={120}
            rate={4}
          />
          <Product
            title="Test Title ..."
            img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            price={120}
            rate={4}
          />
        </main>

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
