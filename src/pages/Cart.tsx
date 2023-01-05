import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CartItem from '../components/Cart/CartItem'
import "./Cart.css"
const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const products = useSelector((state: RootState) => state.products.products)
// const [total, setTotal] = useState<number>(0);
  const sum = cart.reduce((acc, product) => acc + (product.quantity! * product.price), 0)
  // setTotal(sum);
useEffect(() => {
    console.log(cart)
    console.log(sum, "total")
  }, [])
  console.log(cart, "cart")
  return (
    <div className='cart'>
        <div className='cartItems'>
      {cart.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
    <div className='total'>
      Total: ${Math.trunc(sum)}
    </div>
    </div>
  )
}

export default Cart;