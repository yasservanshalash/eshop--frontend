import React, { useState } from "react";
import { Product } from "../../types/types";
import "./ProductItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../redux/slices/favoriteSlice";
import IconButton from "@mui/material/IconButton";
import { RootState } from "../../redux/store";
type PropType = {
  product: Product;
};
const ProductItem = ({ product }: PropType) => {
  const favProducts = useSelector(
    (state: RootState) => state.favProducts.favProducts
  );
  const dispatch = useDispatch();
  const pressed = favProducts.includes(product) ? true : false;
  const [clicked, setClicked] = useState<boolean>(pressed);

  const heartClickHandler = () => {
    if (clicked) {
      //remove handler
      dispatch(favActions.removeFavResolution(product.title));
      setClicked(false);
    } else {
      dispatch(favActions.addFavResolution(product));
      setClicked(true);
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
            style={{ color: favProducts.includes(product) ? "red" : "" }}
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
