import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ProductItem from '../components/Products/ProductItem'
import "./WishList.css"

const WishList = () => {
  const favProducts = useSelector((state: RootState) => state.favProducts.favProducts)
  return (
    <div>
      { favProducts.length === 0 ? <h1 className='noFav'>No Products Added Yet</h1> :
      favProducts.map((product) => <ProductItem key={crypto.randomUUID()} product={product}/>)}
    </div>
  )
}

export default WishList