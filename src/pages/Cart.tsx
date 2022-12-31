import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ProductItem from '../components/Products/ProductItem'
const Cart = () => {
  const cart = useSelector((state: RootState) => state.favProducts.favProducts)
  console.log(cart, "from cart")
  return (
    <div>
      {cart.map((cartItem) => <ProductItem product={cartItem}/>)}
    </div>
  )
}

export default Cart;