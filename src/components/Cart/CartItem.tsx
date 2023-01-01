import React from 'react'
import { Product } from '../../types/types'

type PropType = {
    cartItem: Product
}
const CartItem = ({cartItem}: PropType) => {
  return (
    <div>
        <h1>{cartItem.title}</h1>
        <p>{cartItem.description}</p>
        <p>{cartItem.quantity}</p>
    </div>
  )
}

export default CartItem