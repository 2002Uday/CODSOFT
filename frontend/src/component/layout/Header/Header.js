import React, { Fragment, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import UserOptions from "./UserOptions";
import { logout } from "../../../actions/userAction";
import { useAlert } from "react-alert";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const iconsize = "2rem";
  const [isopen, setisopen] = useState(false);
  const togglemenu = () => setisopen(!isopen);
  const dispatch = useDispatch();
  const alert = useAlert();
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <>
      <div className="Header">
        <div className="logo">
          <p>E-COMMERCE</p>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              {" "}
              <a href="/products">PRODUCTS</a>
            </li>
            <li>
              {" "}
              <a href="/contact">CONTACT</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/about">ABOUT</a>{" "}
            </li>
          </ul>
        </div>
        <div className="icons">
          {isAuthenticated ? (
            <UserOptions user={user} />
          ) : (
            <a href="/login">
              <button className="login-btn">LOGIN</button>
            </a>
          )}
        </div>
      </div>

      {/* ------------Mobile Header---------- */}

      <div className="Header-mobile">
        <div className="logo">
          <p>E-COMMERCE</p>
        </div>
        <div className="mob-icons">
          <div className="icons">
            {!isopen ? (
              <GiHamburgerMenu
                size={iconsize}
                cursor={"pointer"}
                onClick={togglemenu}
              />
            ) : (
              <Fragment>
                <GrClose
                  size={iconsize}
                  cursor={"pointer"}
                  onClick={togglemenu}
                />
                <div className="menu">
                  <div className="mob-list">
                    <ul>
                      {isAuthenticated && user.role === "admin" ? (
                        <li>
                          <a href="/dashboard">Dashboard</a>
                        </li>
                      ) : (
                        <></>
                      )}
                      <li>
                        <a href="/">HOME</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/products">PRODUCTS</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/contact">CONTACT</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="/about">ABOUT</a>{" "}
                      </li>
                      <li className="cart-li">
                        <a href="/cart">
                          <button className="cart-btn">Go to Cart</button>
                        </a>
                      </li>
                      
                      {isAuthenticated ? (
                        <li>
                          <button className="logout-btn" onClick={logoutUser}>
                            Logout
                          </button>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className="mob-icons">
            {isAuthenticated ? (
              <img src={user.avatar.url} alt="User Profile" />
            ) : (
              <a href="/login">
                <button className="login-btn">LOGIN</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
