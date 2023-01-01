import React, { useEffect, useState } from "react";
import { Product } from "../../types/types";
import "./ProductItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../redux/slices/favoriteSlice";
import { cartActions } from "../../redux/slices/cartSlice";
import IconButton from "@mui/material/IconButton";
import { RootState } from "../../redux/store";
type PropType = {
  product: Product;
};
const ProductItem = ({ product }: PropType) => {
  const favProducts = useSelector(
    (state: RootState) => state.favProducts.favProducts
  );
  console.log(favProducts);
  const cart = useSelector(
    (state: RootState) => state.cart.cart
  );
  console.log(cart)

  const dispatch = useDispatch();
  // const favPressed = favProducts.includes(product) ? true : false;

  const [favClicked, setFavClicked] = useState<boolean>(favProducts.includes(product) ? true : false);
  const [cartClicked, setCartClicked] = useState<boolean>(cart.includes(product) ? true : false);


  const heartClickHandler = () => {
    if (favClicked) {
      //remove handler
      dispatch(favActions.removeFavResolution(product.title));
      setFavClicked(false);
    } else {
      dispatch(favActions.addFavResolution(product));
      setFavClicked(true);
    }
  };

  const cartClickHandler = () => {
    if (cartClicked) {
      //remove handler
      dispatch(cartActions.removeFromCart(product.title));
      setCartClicked(false);
    } else {
      dispatch(cartActions.addToCart(product));
      setCartClicked(true);
    }
  };
  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} />
      <div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            onClick={heartClickHandler}
            style={{ color: favClicked ? "red" : "" }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ShoppingCartIcon
            onClick={cartClickHandler}
            style={{ color: cartClicked ? "blue" : "" }}
          />
        </IconButton>
        <Link to={`/products/${product.id}`}>
          <button>details...</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
