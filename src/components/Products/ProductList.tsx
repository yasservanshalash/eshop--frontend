import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import { productActions } from "../../redux/slices/productSlice";
import ProductItem from "./ProductItem";
import { Product } from "../../types/types";
import "./ProductList.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


type PropType = {
  userInput: string;
};
const ProductList = ({ userInput }: PropType) => {
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  return (
    <div className="products">
    {
        productList.length === 0 ? (    <Box sx={{ display: 'flex' }} className="progress">
        <CircularProgress />
      </Box>) :
      productList.filter((product: Product) => product.title.toLowerCase().includes(userInput.toLowerCase())).map((product: Product) => (
        <ProductItem key={crypto.randomUUID()} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
