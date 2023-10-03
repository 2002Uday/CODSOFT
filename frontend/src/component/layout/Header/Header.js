import React, { Fragment, useState } from 'react'
import "./Header.css"
import {HiShoppingCart} from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr"

const Header = () => {

  const iconsize = "2rem";
  const [isopen , setisopen] = useState(false); 
  const togglemenu = () => (
    setisopen(!isopen)
  );
  return (
    <><div className='Header'>
      <div className='logo'>
        <p>E-COMMERCE</p>
      </div>
      <div className='list'>
        <ul>
          <li><a href='/'>HOME</a></li>
          <li> <a href='/products'>PRODUCTS</a></li>
          <li> <a href='/contact'>CONTACT</a> </li>
          <li> <a href='/about'>ABOUT</a> </li>
        </ul>
      </div>
      <div className='icons'>
        <HiShoppingCart size={iconsize} cursor={"pointer"} />
        <CgProfile size={iconsize} cursor={"pointer"} />
      </div>
    </div>
    
    <div className='Header-mobile'>
      <div className='logo'>
        <p>E-COMMERCE</p>
      </div>
      <div className='icons'>

        {!isopen ? <GiHamburgerMenu  size={iconsize} cursor={"pointer"} onClick={togglemenu}/> : (
          <Fragment>
            <GrClose  size={iconsize} cursor={"pointer"} onClick={togglemenu}/>
            <div className='menu'>
              <div className='mob-icons'>
                <CgProfile size={iconsize} cursor={"pointer"} />
              </div>
              <div className='mob-list'>
                <ul>
                  <li><a href='/'>HOME</a></li>
                  <li> <a href='/products'>PRODUCTS</a></li>
                  <li> <a href='/contact'>CONTACT</a> </li>
                  <li> <a href='/about'>ABOUT</a> </li>
                </ul>
              </div>
            </div>
          </Fragment>
        )}
        <HiShoppingCart size={iconsize} cursor={"pointer"} />
      </div>
      {/* <div className='list'>
        <ul>
          <li><a href='/'>HOME</a></li>
          <li> <a href='/product'>PRODUCT</a></li>
          <li> <a href='/contact'>CONTACT</a> </li>
          <li> <a href='/about'>ABOUT</a> </li>
        </ul>
      </div>
      <div className='icons'>
        <HiSearch size={iconsize} cursor={"pointer"} />
        <HiShoppingCart size={iconsize} cursor={"pointer"} />
        <CgProfile size={iconsize} cursor={"pointer"} />
      </div> */}
    </div>
    
    </>
  );
};

export default Header