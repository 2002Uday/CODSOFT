import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, error } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();


  const options = {
    edit: false,
    color: "black",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.ratings,
    isHalf:true,
};


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <Fragment>
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input readOnly type="number" value="1" />
                    <button>+</button>
                  </div>
                  <button>
                    Add to Cart
                  </button>
                </div>
                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              
              <button className="submitReview">
                Submit Review
              </button>

            </div>
          </div>
    </Fragment>
  );
};

export default ProductDetails;