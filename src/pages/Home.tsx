import React from 'react'
import ProductList from "../components/Products/ProductList"
import "./Home.css"
import img from '../Ecommerce-Banner-1.jpg'

type PropType = {
    userInput: string;
}
const Home = ({userInput}: PropType) => {
  return (
    <div>
        <div className='banner'>
          <h1>Welcome to eShop</h1>
        </div>
        {/* <h1>Product List</h1>
        <ProductList userInput={userInput}/> */}
    </div>
  )
}

export default Home