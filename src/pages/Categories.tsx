import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/types';

import "./Categories.css"
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductItem from '../components/Products/ProductItem';
const Categories = () => {
    const [items, setItems]  = useState<Product[]>([]);
    let { name } = useParams();
    const products = useSelector((state: RootState) => state.products.products)
    // const url: string = "https://fakestoreapi.com/products/category/" + name;

    // useEffect(() => { 
    //     function fetchItem() {
    //       fetch(url)
    //         .then((response) => response.json())
    //         .then((items) => setItems(items))
    //         .catch((error) => console.error(error));
    //     }
    //     fetchItem();
    //   }, [items]);

      console.log(products);
  return (
    <>
        {   products.length === 0 ? <h1>Loading</h1> :
            products.filter((product) => product.category === name).map((product) => {
                return (
                    // <div  className='product'>
                    //     <div className='image'>
                    //     <img src={product.image} alt={product.title} className="productImg"/>
                    //     </div>
                    // <div className='productinfo'>
                    // <h1>{product.title}</h1>
                    // <p>${product.price}</p>
                    // <p>{product.category}</p>
                    // </div>
                    // </div>
                    <ProductItem key={crypto.randomUUID()} product={product} />
                )
            })
        }
    </>
    )
}

export default Categories