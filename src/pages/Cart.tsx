import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CartItem from '../components/Cart/CartItem'

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  return (
    <div>
      {cart.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  )
}

export default Cart;