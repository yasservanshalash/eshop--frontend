import React from 'react'
import { useDispatch } from 'react-redux'
import { productActions } from '../../redux/slices/productSlice';
import "./SortBar.css"

const SortBar = () => {
    const dispatch = useDispatch();
    const sortAZ = () => {
        dispatch(productActions.sortByNameAscending());
    }
    const sortZA = () => {
        dispatch(productActions.sortByNameDescending());
        console.log("clicked")
    }

    const sortPriceLowtoHigh = () => {
        dispatch(productActions.sortByPriceAscending())
    }
    const sortByPriceDescending = () => {
        dispatch(productActions.sortByPriceDescending())
    }
  return (
    <div className='sort'>
        <h3>Sort</h3>
        <p onClick={sortAZ}>Name: A-Z</p>
        <p onClick={sortZA}>Name: Z-A</p>
        <p onClick={sortPriceLowtoHigh}>Price: Low to High</p>
        <p onClick={sortByPriceDescending}>Price: High to Low</p>
    </div>
  )
}

export default SortBar