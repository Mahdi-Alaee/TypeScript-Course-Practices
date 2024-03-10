import React, { useContext } from "react";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { ContextData } from "../context/ContextData";
import Product from "../components/Product";
export default function Cart() {
  const contextData = useContext(ContextData);

  return (
    <>
      {contextData?.basketProducts.length! > 0 ? (
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {contextData?.basketProducts.map((product) => (
              <Product {...product} isShowCount key={product.id} />
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
