import React from 'react'
import { Product } from '../../types/types'
import './ProductItem.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { favActions } from '../../redux/slices/favoriteSlice';
import IconButton from '@mui/material/IconButton';

type PropType = {
    product: Product
}
const ProductItem = ({product}: PropType) => {
  const dispatch = useDispatch();
  return (
    <div className='product'>
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <img src={product.image} alt={product.title} />
        <div>
        <IconButton aria-label="add to favorites" onClick={() => dispatch(favActions.addFavResolution(product))}>
          <FavoriteIcon />
        </IconButton>
            <Link to={`/products/${product.id}`}>
                <button>Hello</button>
            </Link>
        </div>

    </div>
  )
}

export default ProductItem