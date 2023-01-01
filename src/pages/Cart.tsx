import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CartItem from '../components/Cart/CartItem'

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
    <div>
      {cart.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
      <h1>Total: {sum}</h1>
    </div>
  )
}

export default Cart;