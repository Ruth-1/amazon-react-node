import React, { useState } from "react";
import { ProductType } from "../types/amazonTypes";
import { formatCurrency } from "../utils/money";
import { useCart } from "../context/cartContext";

const Product: React.FC<ProductType> = ({
  id,
  name,
  image,
  rating,
  priceCents,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(id, quantity);
    setAddedToCart(true);

    // Reset the added to cart state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={`src/${image}`} alt={name} />
      </div>

      <div className="product-name limit-text-to-2-lines">{name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`src/images/ratings/rating-${rating.stars * 10}.png`}
          alt={`${rating.stars} stars`}
        />
        <div className="product-rating-count link-primary">{rating.count}</div>
      </div>

      <div className="product-price">${formatCurrency(priceCents)}</div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="product-spacer"></div>

      {addedToCart && (
        <div className={`added-to-cart js-added-to-cart-${id}`}>
          <img
            src="src/assets/images/icons/checkmark.png"
            alt="Added to cart"
          />
          Added
        </div>
      )}

      <button
        className="add-to-cart-button button-primary js-add-to-cart"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
