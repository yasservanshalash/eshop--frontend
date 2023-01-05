import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../types/types';
import "./ProductDetails.css"
import { RootState } from '../redux/store';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
const ProductDetails = () => {
    const [item, setItem] = useState<any>({});
    let { id } = useParams();
    const products  = useSelector((state: RootState) => state.products.products)
    const product = products.filter((product: Product) => Number(product.id) === Number(id))[0]

      useEffect(() => { 
        setItem(product);
      }, [products]);
      console.log(item)
  return (
    <div>
      {
        item ?     <div className='itemDetail'>
        <img src={item?.image} alt={item?.title} className="productImgDetail"/>
        <div className='productInfo'>
        <h1>{item?.title}</h1>
        <p>${item?.price}</p>
        <p>{item?.category}</p>
        <Link to="/products">
        <IconButton aria-label="add to favorites">
          <KeyboardArrowLeft
          />
        </IconButton>
        </Link>
        </div>
    </div> : <h1>Loading</h1>
      }
    </div>
  )
}

export default ProductDetails
