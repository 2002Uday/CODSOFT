import { Fragment, useEffect } from "react";
import "./Home.css";
import { BsCaretDown } from "react-icons/bs";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error ,alert]);

  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />
      <div className="hero-section">
        <div className="blurbg"></div>
        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>Find Amazing Products Below</h1>
        </div>
        <a href="#scroll-to">
          <button id="scroll-button" className="scroll-down">
            SCROLL DOWN <BsCaretDown size={"2.2vmax"} />
          </button>
        </a>
      </div>
      <div className="scroll-to" id="scroll-to">
        <h2 className="homeHeading">Featured Products</h2>
        {loading ? <Loader/> : (
          <div className="container" id="container">
          {products &&
            products.map((product) => <ProductCard product={product} />)}
        </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
