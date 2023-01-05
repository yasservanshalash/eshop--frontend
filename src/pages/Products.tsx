import React from 'react'
import ProductList from "../components/Products/ProductList"
import "./Products.css"
import img from '../Ecommerce-Banner-1.jpg'
import SortBar from '../components/SortBar/SortBar'

type PropType = {
    userInput: string;
}
const Products = ({userInput}: PropType) => {
  return (
    <div>
        <img src={img} className="homebanner" alt='banner'/>
        <div className='productsPage'>
          <SortBar />
        <ProductList userInput={userInput}/>

        </div>
    </div>
  )
}

export default Products