import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/types';

import "./Categories.css"
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductItem from '../components/Products/ProductItem';
import SortBar from '../components/SortBar/SortBar';
const Categories = () => {
    const [items, setItems]  = useState<Product[]>([]);
    let { name } = useParams();
    const products = useSelector((state: RootState) => state.products.products)

  return (
    <div className='productsPage'>
    <div>
    <SortBar />
    </div>
    <div>
    {   products.length === 0 ? <h1>Loading</h1> :
            products.filter((product) => product.category === name).map((product) => {
                return (
                    <ProductItem key={crypto.randomUUID()} product={product} />
                )
            })
        }
    </div>
    </div>
    )
}

export default Categories