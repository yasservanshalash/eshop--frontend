import React, { useState } from "react";
import { Product } from "../../types/types";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import "./CartItem.css";
type PropType = {
  cartItem: Product;
};
const CartItem = ({ cartItem }: PropType) => {
  const [quantity, setQuantity] = useState<any>(cartItem.quantity);
  const dispatch = useDispatch();
  // const addHandler = () => {
  //     setQuantity(quantity + 1)
  //     cartItem.quantity = quantity
  //    }

  //    const decrementHandler = () => {
  //     if(quantity < 2) {
  //         return
  //     } else {
  //         setQuantity(quantity - 1)
  //         cartItem.quantity = quantity

  //     }
  //    }
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
  return (
    <div className="cartItem">
      <div className="cartImg">
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="cartInfo">
        <h1>{cartItem.title}</h1>
        <p>{cartItem.description}</p>
        <p>{cartItem.price}</p>
        <div className="cartButtons">
          <button onClick={increment}>Increment</button>
          <p>{cartItem.quantity}</p>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
