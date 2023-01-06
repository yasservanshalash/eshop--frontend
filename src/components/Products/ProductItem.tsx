import React, { useEffect, useState } from "react";
import { Product } from "../../types/types";
import "./ProductItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../redux/slices/favoriteSlice";
import { cartActions } from "../../redux/slices/cartSlice";
import IconButton from "@mui/material/IconButton";
import { Snackbar } from "@mui/material/";
import Alert from "@mui/material/Alert";
import { RootState } from "../../redux/store";
type PropType = {
  product: Product;
};
const ProductItem = ({ product }: PropType) => {

  //STATE
  const [favAdd, setFavAdd] = React.useState(false);
  const [favRem, setFavRem] = React.useState(false);
  const [cartAdd, setCartAdd] = React.useState(false);
  const [cartRem, setCartRem] = React.useState(false);

  const favProducts = useSelector(
    (state: RootState) => state.favProducts.favProducts
  );
  const cart = useSelector(
    (state: RootState) => state.cart.cart
  );
    // DISPATCH
  const dispatch = useDispatch();

  const [favClicked, setFavClicked] = useState<boolean>(favProducts.includes(product) ? true : false);
  const [cartClicked, setCartClicked] = useState<boolean>(cart.includes(product) ? true : false);

  // HANDLERS

  const favAddHandleClick = () => {
    setFavAdd(true);
  };

  const favRemHandleClick = () => {
    setFavRem(true);
  };

  const cartAddHandleClick = () => {
    setCartAdd(true);
}

const cartRemHandleClick = () => {
  setCartRem(true);
};

const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setFavAdd(false);
  setFavRem(false);
  setCartAdd(false);
  setCartRem(false);
};
    
  const heartClickHandler = () => {
    if (favClicked) {
      //remove handler
      dispatch(favActions.removeFavResolution(product.title));
      setFavClicked(false);
      favRemHandleClick();
    } else {
      dispatch(favActions.addFavResolution(product));
      setFavClicked(true);
      favAddHandleClick();
    }
  };

  const cartClickHandler = () => {
    if (cartClicked) {
      //remove handler
      dispatch(cartActions.removeFromCart(product.title));
      setCartClicked(false);
      cartRemHandleClick();
    } else {
      dispatch(cartActions.addToCart(product));
      setCartClicked(true);
      cartAddHandleClick();
    }
  };
  return (
    <div className="container">
      <div className="snackbars">
      <Snackbar open={favAdd} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product Added to wishlist!
        </Alert>
      </Snackbar>
      <Snackbar open={favRem} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Product removed from wishlist!
        </Alert>
      </Snackbar>
      <Snackbar open={cartAdd} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product Added to Cart!
        </Alert>
      </Snackbar>
      <Snackbar open={cartRem} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Product removed from Cart!
        </Alert>
      </Snackbar>
      </div>
    <div className="productItem">
      <div className="productItem__img">
      <img src={product.image} alt={product.title} />
      </div>
      <div className="productItem__info">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <div className="productItem__info__buttons">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            onClick={heartClickHandler}
            style={{ color: favClicked ? "red" : "" }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ShoppingCartIcon
            onClick={cartClickHandler}
            style={{ color: cartClicked ? "#1876D1" : "" }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" component={Link} to={`/products/${product.id}`}>
          <KeyboardArrowRightOutlined
          />
        </IconButton>
      </div>
      </div>

    </div>
    </div>

  );
};

export default ProductItem;
