import React, { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import "./Home.css";
import { Product } from "../types/types";
import img from "../Ecommerce-Banner-1.jpg";
import backbag from "../backbag.png"
import shirt from "../shirt1.png"
import jacket from "../jacket1.png"
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type PropType = {
  userInput: string;
  productList: Product[];
};

const Home = ({ userInput, productList }: PropType) => {
  const [products, setProdcuts] = useState<Product[]>([]);
  const productsState = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    setProdcuts(productsState);
  }, [productsState]);

  console.log(products, "products");
  return products.length > 0 ? (
    <Carousel autoplay autoplaySpeed={2000}>
      <div>
        <div className="page1">
          <h3>Welcome to eShop</h3>
        </div>
      </div>
      <div>
        <div className="page2">
          <h3>Find the latest, trendiest products at eShop</h3>
        </div>
      </div>
      <div>
        <div className="page3">
          <div className="images">
          <img src={backbag} alt={"product"}/>
          <img src={shirt} alt={"product"}/>
          <img src={jacket} alt={"product"}/>

          </div>
          <h1>Latest Collection at eShop</h1>
        </div>
      </div>
      <div>
        <div className="page4">
          <div className="productImgHome">
          <img src={backbag} alt="img" />
          </div>
          <div className="productDetails">
            <h1>{products[0].title}</h1>
            <p>{products[0].description}</p>
            <h3>Only: ${products[0].price}</h3>
          </div>
        </div>
      </div>
    </Carousel>
  ) : (
    <Box sx={{ display: "flex" }} className="progress">
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Home;
