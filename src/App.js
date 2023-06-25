import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Ordered";
import Information from "./components/Informations";
import Navnav from "./components/Navnav";
import React, { useState } from "react";
import { Product } from "./components/Products";

function App() {
  const [allproducts, useallproduct] = useState(Product);

  const filterbyCat = (cat) => {
    if (cat === "All") {
      useallproduct(Product);
      console.log(cat);
    } else {
      const newArr = Product.filter((i) => i.category === cat);
      useallproduct(newArr);
      console.log(newArr);
    }
  };

  const Photo = (e) => {
    return console.log(e);
  };
  return (
    <div>
      ';'
      <Navnav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="Home"
            element={
              <Home
                Photo={Photo}
                filterbyCat={filterbyCat}
                allproducts={allproducts}
              />
            }
          />
          <Route path="/Details" element={<Information Photo={Photo} />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
