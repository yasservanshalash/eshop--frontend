import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

      const navigate = useNavigate();
  return (
    <div>
      {
        item ?     <div className='itemDetail'>
        <img src={item?.image} alt={item?.title} className="productImgDetail"/>
        <div className='productInfo'>
        <h1>{item?.title}</h1>
        <p>${item?.price}</p>
        <p>{item?.category}</p>
        <IconButton aria-label="add to favorites" onClick={() => navigate(-1)}>
          <KeyboardArrowLeft
          />
        </IconButton>
        </div>
    </div> : <h1>Loading</h1>
      }
    </div>
  )
}

export default ProductDetails
