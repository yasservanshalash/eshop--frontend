import React, { useState } from "react";
import { Product } from "../../types/types";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";
type PropType = {
  cartItem: Product;
};
const CartItem = ({ cartItem }: PropType) => {
  const [quantity, setQuantity] = useState<any>(cartItem.quantity);
  const dispatch = useDispatch();

  const increment = () => {
    setQuantity(quantity + 1);
    dispatch(cartActions.increment(cartItem));
  };

  const decrement = () => {
    if (quantity < 2) {
      return;
    } else {
      setQuantity(quantity - 1);
      dispatch(cartActions.decrement(cartItem));
    }
  };

  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart(cartItem.title));

  }
  return (
    <div className="cartItem">
      <div className="cartImg">
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="cartInfo">
        <Link to={`/products/${cartItem.id}`}>
        <h1>{cartItem.title}</h1>
        </Link>
        <p>{cartItem.category}</p>
        <p>{cartItem.price}</p>
        <div className="cartButtons">
          <div className="quantityButtons"></div>
          <button onClick={increment}>+</button>
          <p>{cartItem.quantity}</p>
          <button onClick={decrement}>-</button>
          <div className="removeButton">
          <button onClick={removeFromCart} className="remove">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
