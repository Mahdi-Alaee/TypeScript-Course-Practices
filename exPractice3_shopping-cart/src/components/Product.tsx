import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductProps {
  img: string;
  title: string;
  rate: 1 | 2 | 3 | 4 | 5;
  price: number;
}

function Product({ img, title, rate, price }: ProductProps) {
  const unFilledStars = 5 - rate;

  return (
    <div className="card">
      <img src={img} />
      <main>
        <p>{title}</p>
        <div className="card-details">
          <div>
            {Array(rate)
              .fill("")
              .map((star, index) => (
                <AiFillStar key={index} style={{ color: "orange" }} />
              ))}
            {Array(unFilledStars)
              .fill("")
              .map((star, index) => (
                <AiOutlineStar key={index} style={{ color: "orange" }} />
              ))}
          </div>
          <p>{price}$</p>
        </div>
        <button>Add to Basket</button>
      </main>
    </div>
  );
}

export default Product;
