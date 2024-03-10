import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductType } from "../types";
import { useContext } from "react";
import { ContextData } from "../context/ContextData";

function Product({ id,image, title, rating, price }: ProductType) {
  const unFilledStars = 5 - rating.rate;

  const contextData = useContext(ContextData);

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
        <button onClick={contextData?.addToCart.bind(null, id)}>Add to Basket</button>
      </main>
    </div>
  );
}

export default Product;
