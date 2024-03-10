import Product from "../components/Product";
import "./Index.css";

function Index() {
  return (
    <>
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
    </>
  );
}

export default Index;
