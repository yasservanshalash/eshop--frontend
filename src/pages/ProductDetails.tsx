import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../types/types';
import "./ProductDetails.css"
import { RootState } from '../redux/store';
const ProductDetails = () => {
    const [item, setItem] = useState<any>({});
    let { id } = useParams();
    const products  = useSelector((state: RootState) => state.products.products)
    const product = products.filter((product: Product) => Number(product.id) === Number(id))[0]
    // setItem(products.filter((product: Product) =>  Number(product.id) === Number(id)))
    
    // const url = `https://fakestoreapi.com/products/${id}`;

    
      useEffect(() => { 
        // function fetchItem() {
        //   fetch(url)
        //     .then((response) => response.json())
        //     .then((items) => setItem(items))
        //     .catch((error) => console.error(error));
        // }
        // fetchItem();
        setItem(product);
      }, [products]);
      console.log(item)
  return (
    <div>
      {
        item ?     <div className='itemDetail'>
        <img src={item?.image} alt={item?.title} className="productImg"/>
        <div className='productInfo'>
        <h1>{item?.title}</h1>
        <p>${item?.price}</p>
        <p>{item?.category}</p>
        </div>
    </div> : <h1>Loading</h1>
      }
    </div>
  )
}

export default ProductDetails
