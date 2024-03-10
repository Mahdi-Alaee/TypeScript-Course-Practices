import { useContext } from "react";
import Product from "../components/Product";
import "./Index.css";
import { ContextData } from "../context/ContextData";

function Index() {
  const contextData = useContext(ContextData);



  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" />
      <main className="main-index">
        {contextData?.allProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </main>
    </>
  );
}

export default Index;
