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
    const increment = () => {
        setQuantity(quantity + 1);
        dispatch(cartActions.increment(cartItem))
    }

    const decrement = () => {
        if(quantity < 2) {
            return
        } else {
            setQuantity(quantity - 1);
            dispatch(cartActions.decrement(cartItem))
        }
    }
  return (
    <div>
        <h1>{cartItem.title}</h1>
        <p>{cartItem.description}</p>
        <p>{cartItem.price}</p>
        <button onClick={increment}>Increment</button>
        <p>{cartItem.quantity}</p>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CartItem