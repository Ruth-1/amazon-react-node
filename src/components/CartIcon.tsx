import React from "react";
import { useCart } from "../context/cartContext";
import "../styles/pages/amazon.css";
import "../styles/shared/amazon-header.css";
import "../styles/shared/general.css";

const CartIcon: React.FC = () => {
  const { calculateCartQuantity } = useCart();
  const cartQuantity = calculateCartQuantity();
  console.log("cart quanitity", cartQuantity);

  return (
    <div>
      <img
        className="cart-icon"
        src="src/assets/images/icons/cart-icon.png"
        alt="Cart"
      />
      {cartQuantity > 0 && (
        <span className="cart-quantity">{cartQuantity}</span>
      )}
    </div>
  );
};

export default CartIcon;
