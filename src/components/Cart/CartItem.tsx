import React, { useState } from 'react'
import { Product } from '../../types/types'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
type PropType = {
    cartItem: Product
}
const CartItem = ({cartItem}: PropType) => {
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
    const clickHandler = () => {
        setQuantity(quantity + 1);
        dispatch(cartActions.increment(cartItem))
    }
  return (
    <div>
        <h1>{cartItem.title}</h1>
        <p>{cartItem.description}</p>
        <button onClick={clickHandler}>Increment</button>
        <p>{cartItem.quantity}</p>
        <button onClick={clickHandler}>Decrement</button>
    </div>
  )
}

export default CartItem