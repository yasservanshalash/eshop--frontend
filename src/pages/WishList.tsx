import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const WishList = () => {
  const favProducts = useSelector((state: RootState) => state.favProducts.favProducts)
  console.log(favProducts, "from wishlist")
  return (
    <div>
      {favProducts.map((product) => <h1>{product.title}</h1>)}
    </div>
  )
}

export default WishList