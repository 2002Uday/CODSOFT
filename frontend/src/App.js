import './App.css';
import Header from './component/layout/Header/Header';
import {BrowserRouter as Router, Route , Routes ,Navigate } from "react-router-dom"
import WebFont from "webfontloader"
import React, { useState } from "react";
import Footer from './component/layout/Footer/Footer';
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping.js"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from 'axios';
import Payment from "./component/Cart/Payment";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from "./component/Cart/OrderSuccess.js"


function App() {

  const { isAuthenticated } = useSelector(
    (state) => state.user
  );
  

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    if (isAuthenticated) {
      setStripeApiKey(data.stripeApiKey); 
    }
  }

  React.useEffect(() => {
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans", "Chilanka"]
      }
    });

    store.dispatch(loadUser());

    if (isAuthenticated) {
      getStripeApiKey();
    }
    
  }, [])
  

  const user = isAuthenticated;

  return (
    <Router>
      <Header/>
        <Routes>
          <Route extact path="/" Component={Home} />
          <Route extact path="/product/:id" Component={ProductDetails}  />
          <Route extact path="/products" Component={Products}  />
          <Route extact path="/login" element={!user ? <LoginSignUp /> : <Navigate to="/" />} />
          <Route extact path="/cart" Component={Cart}  />
          <Route extact path="/shipping" element={!user ? <LoginSignUp /> : <Shipping/>}/>
          <Route extact path="/order/confirm" element={!user ? <LoginSignUp /> : <ConfirmOrder/>}/>
        </Routes>
        {stripeApiKey &&(
          <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route extact path="/process/payment" element={!user ? <LoginSignUp /> : <Payment/>} />
          </Routes>
        </Elements>
        )}
        <Routes>
          <Route extact path="/success" Component={OrderSuccess}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
