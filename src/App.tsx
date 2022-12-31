import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <div className="App">
      <NavBar userInput={userInput} setUserInput={setUserInput} />
      <Routes>
        <Route path="/" element={<Home userInput={userInput} />} />
        <Route path="/products" element={<Products userInput={userInput} />} />
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
