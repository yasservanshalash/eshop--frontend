import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/types';
import "./ProductDetails.css"
const ProductDetails = () => {
    const [item, setItem] = useState<any>({});
    let { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;

    
      useEffect(() => { 
        function fetchItem() {
          fetch(url)
            .then((response) => response.json())
            .then((items) => setItem(items))
            .catch((error) => console.log(error));
        }
        fetchItem();
      }, []);
      
      console.log(item);

  return (
    <div>
    <div className='itemDetail'>
        <img src={item.image} alt={item.title} className="productImg"/>
        <div className='productInfo'>
        <h1>{item.title}</h1>
        <p>${item.price}</p>
        <p>{item.category}</p>
        </div>
    </div>
    </div>
  )
}

export default ProductDetails
