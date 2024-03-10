import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductType } from "../types";
import { useContext } from "react";
import { ContextData } from "../context/ContextData";
import { FaMinus, FaTrash } from "react-icons/fa";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

interface ProductProps extends ProductType {
  isShowCount: boolean;
  isShowRemoveFromBasket: boolean;
}

function Product({
  id,
  image,
  title,
  rating,
  price,
  count,
  isShowCount = false,
  isShowRemoveFromBasket = false,
}: ProductProps) {
  const unFilledStars = 5 - rating.rate;
  const contextData = useContext(ContextData);
  const navigator = useNavigate();

  const addToBasketClickHandler = () => {
    contextData?.addToCart(id);
    swal({
      title: "محصول با موفقیت به سبد خرید افزوده شد",
      buttons: ["حله", "برو به سبد خرید"],
      icon: "success",
    }).then((res) => {
      if (res) {
        navigator("/cart");
      }
    });
  };

  return (
    <div className="card">
      <img src={image} />
      <main>
        <p>{title.length > 20 ? title.slice(0, 20) + " . . ." : title}</p>
        <div className="card-details">
          <div>
            {Array(Math.round(rating.rate))
              .fill("")
              .map((star, index) => (
                <AiFillStar key={index} style={{ color: "orange" }} />
              ))}
            {Array(Math.round(unFilledStars))
              .fill("")
              .map((star, index) => (
                <AiOutlineStar key={index} style={{ color: "orange" }} />
              ))}
          </div>
          <p>{price}$</p>
        </div>
        {isShowCount && (
          <div className="product-count">
            <p>Count: {count}</p>
          </div>
        )}
        <button onClick={addToBasketClickHandler}>Add to Basket</button>
        {isShowRemoveFromBasket && (
          <button onClick={contextData?.removeFromCart.bind(null, id)}>
            {count! > 1 ? <FaMinus color="red" /> : <FaTrash />}
          </button>
        )}
      </main>
    </div>
  );
}

export default Product;
