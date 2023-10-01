import React from 'react'
import "./Header.css"
import {HiSearch,HiShoppingCart} from "react-icons/hi";
import {CgProfile} from "react-icons/cg"

const Header = () => {
  const iconsize = "2rem";
  return (
    <div className='Header'>
      <div className='logo'>
        <p>E-COMMERCE</p>
      </div>
      <div className='list'>
        <ul>
          <li><a href='/'>HOME</a></li>
          <li> <a href='/product'>PRODUCT</a></li>
          <li> <a href='/contact'>CONTACT</a> </li>
          <li> <a href='/about'>ABOUT</a> </li>
        </ul>
      </div>
      <div className='icons'>
        <HiSearch size={iconsize} cursor={"pointer"}/>
        <HiShoppingCart size={iconsize} cursor={"pointer"}/>
        <CgProfile size={iconsize} cursor={"pointer"}/>
      </div>
    </div>
  );
};

export default Header