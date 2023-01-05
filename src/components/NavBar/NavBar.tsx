import * as React from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./NavBar.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';


type PropType = {
  userInput: string;
  setUserInput: Function;
};
export default function NavBar({ userInput, setUserInput }: PropType) {
  
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = React.useState<string>("");

  const favProducts = useSelector(
    (state: RootState) => state.favProducts.favProducts
  );

  const cart = useSelector(
    (state: RootState) => state.cart.cart
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setUserInput(searchInput);
  };

  const keyPress = (e: any) => {
    if(e.keyCode === 13){
       setUserInput(e.target.value);
       console.log(e.target.value);
       // put the login here
      navigate("/products");
      }
 }

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" className="appbar">
        <Toolbar>
          <Link to="/">
            <div className="logo">
              <StorefrontIcon />
              <Typography variant="h6" component="div" sx={{ flexGrow: 0.02 }}>
                eShop
              </Typography>
            </div>
          </Link>
          
          <InputBase
            sx={{ ml: 1, flex: 0.88 }}
            placeholder="Search shop by name of product"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={changeHandler} onKeyDown={keyPress}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={clickHandler}
            disableRipple
            className="searchBtn"
          >
            <Link to="/products">
              <SearchIcon type="submit "className="searchIcon" />
            </Link>
          </IconButton>
          <div className="buttons">
            <div className="products__link">
            <Link to="/products">
                <Button color="inherit">
                  Products
                </Button>
              </Link>
            </div>
            <div className="wishlist__link">
              <Link to="/wishList">
                <Button color="inherit" startIcon={<FavoriteIcon style={{ color: favProducts.length > 0 ? "red" : "" }}/>}>
                  WishList
                </Button>
              </Link>
            </div>
            <div className="cart__link">
              <Link to="/cart">
              <Badge badgeContent={cart.length} color="primary">

                <Button color="inherit" startIcon={<ShoppingCartIcon />}>
                  Cart
                </Button>
                </Badge>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <ul className="lowernav">
      <Link to="/categories/electronics"><p>electronics</p></Link>
      <Link to="/categories/jewelery"><p>jewelery</p></Link>
      <Link to="/categories/men's clothing"><p>men's clothing</p></Link>
      <Link to="/categories/women's clothing"><p>women's clothing</p></Link>
      </ul>
      <Divider />

    </Box>
    </div>
  );
}
