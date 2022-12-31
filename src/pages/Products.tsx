import React from 'react'
import ProductList from "../components/Products/ProductList"
import "./Products.css"
// import img from '../Ecommerce-Banner-1.jpg'

type PropType = {
    userInput: string;
}
const Products = ({userInput}: PropType) => {
  return (
    <div>
        {/* <img src={img} className="homebanner" alt='banner'/> */}
        <h1>Product List</h1>
        <ProductList userInput={userInput}/>
    </div>
  )
}

export default Products