import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ProductItem from '../components/Products/ProductItem'
const WishList = () => {
  const favProducts = useSelector((state: RootState) => state.favProducts.favProducts)
  return (
    <div>
      {favProducts.map((product) => <ProductItem product={product}/>)}
    </div>
  )
}

export default WishList