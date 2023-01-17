import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CartItem from '../components/Cart/CartItem'
import "./Cart.css"
const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const products = useSelector((state: RootState) => state.products.products)
  const sum = cart.reduce((acc, product) => acc + (product.quantity! * product.price), 0)

  return (
    <div className='cart'>
        <div className='cartItems'>
      {cart.map((cartItem) => (
        <CartItem key={crypto.randomUUID()} cartItem={cartItem} />
      ))}
    </div>
    <div className='total'>
      {
        sum === 0 ? <h1>No Products in Cart Yet</h1> : <p>Total: ${Math.trunc(sum)}</p>
      }
    </div>
    </div>
  )
}

export default Cart;