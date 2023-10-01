// import React, { Fragment } from "react";
import { Fragment } from "react";
import "./Home.css";
import {BsCaretDown} from "react-icons/bs"
import Product from "./Product";

const product = {
  name: "Blue T-shirt",
  image: [{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalbN9taFlP0m7-aj0TlCKFX8Ifm2_p9QV3w&usqp=CAU"}],
  price: "₹3000",
  _id:"Uday",
}

const Home = () => {
  return (
    <Fragment>
      <div class="hero-section">
        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>Find Amazing Products Below</h1>
        </div>
        <a href="#scroll-to">
          <button className="scroll-down">SCROLL DOWN <BsCaretDown size={"2.5rem"}/></button>
        </a>
      </div>
      <div className="scroll-to" id="scroll-to">
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>

        </div> 
      </div>
    </Fragment>
  );
};

export default Home;
