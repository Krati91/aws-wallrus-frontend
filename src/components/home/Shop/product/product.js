import Footer from "../../footer/footer";
import MainNav from "../../main-nav/main-nav";

import "./product.scss";
import { Grid } from "@material-ui/core";
import Product1 from "../../../../images/product1.jpg";
import Product2 from "../../../../images/product2.jpg";
import Product3 from "../../../../images/product3.jpg";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Close from "../../../../images/close.png";
import React, { useEffect } from "react";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import collectionImg from "../../../../images/Addfile.svg";
import Rating from "../../../../images/rating.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Arrow from "../../../../images/arrow-down.svg";
import BackArrow from "../../../../images/back-left-arrow.svg";
import Plus from "../../../../images/plus-btn.svg";
import Minus from "../../../../images/minus-btn.svg";
import Button from "@material-ui/core/Button";
import Pencil from "../../../../images/edit-profile-icon.svg";
import Model from "../../../../images/model.svg";
import PlusWhite from "../../../../images/plus-white.svg";
import ProductCard from "../../product-cards";
import Design from "../../../../images/design1.svg";
import {
  otherColorways,
  similarDesigns,
  productDetails,
} from "../../../../apis/apiCalls";
import { otherApplications } from "../../../../apis/apiCalls";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const InputTextField = withStyles({
  root: {
    "& input + fieldset": {
      borderWidth: 1,
      borderRadius: `2px`,
    },
    "& input:focus + fieldset": {
      borderColor: "black !important",
    },
    "& label.Mui-focused": {
      color: "black",
    },
  },
})(TextField);

const Product = (props) => {
  const mainRef = React.useRef(null);
  const heightRef = React.useRef(null);
  const widthRef = React.useRef(null);

  const [productStatus, setProductStatus] = useState({
    simDesign: false,
    otherApp: false,
    otherColor: false,
    productDet: false,
  });
  const [simDesign, setSimDesign] = useState([]);
  const [otherApp, setOtherApp] = useState([]);
  const [otherColor, setOtherColor] = useState([]);
  const [productDet, setProductDet] = useState({
    application: "",
    artist: "",
    base_cost: 0,
    colorway: "",
    design_name: "",
    material: "",
    number_of_ratings: 0,
    productimages_set: [],
    ratings: 0,
    reviews_set: [],
  });
  const history = useHistory();
  const { id } = useParams();

  const [selectedImage, setSelectedImage] = useState("");
  const [materialTypes, setMaterialTypes] = useState("");
  useEffect(() => {
    mainRef.current.scrollIntoView();
    setProductStatus({
      ...productStatus,
      simDesign: false,
      otherApp: false,
      otherColor: false,
      productDet: false,
    });

    similarDesigns(id).then((similarDesignList) => {
      setSimDesign(similarDesignList.data);
      setProductStatus({ ...productStatus, simDesign: true });
    });

    otherApplications(id).then((otherApplicationsList) => {
      setOtherApp(otherApplicationsList.data);
      setProductStatus({ ...productStatus, otherApp: true });
    });

    otherColorways(id).then((otherColorwaysList) => {
      setOtherColor(otherColorwaysList.data);
      setProductStatus({ ...productStatus, otherColor: true });
    });

    productDetails(id).then((productDetailsList) => {
      console.log(productDetailsList);
      setProductDet(productDetailsList);
      setSelectedImage(
        productDetailsList.productimages_set.length !== 0
          ? productDetailsList.productimages_set[0].image
          : ""
      );
      setMaterialTypes([productDetailsList.material]);
      setProductStatus({ ...productStatus, productDet: true });
    });
  }, []);

  const arrowClosed = (
    <img src={Arrow} alt="arrow-closed" className="arrow-closed" />
  );
  const arrowOpen = <img src={Arrow} alt="arrow-open" className="arrow-open" />;

  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const unit = ["ft.", "cm"];

  const moreByArtist = [
    {
      image: Design,
    },
    {
      image: Design,
    },
    {
      image: Design,
    },
    {
      image: Design,
    },
    {
      image: Design,
    },
    {
      image: Design,
    },
    {
      image: Design,
    },
    {
      image: Design,
    },
  ];

  const defaultUnit = unit[0];
  const [currentUnit, setCurrentUnit] = useState(defaultUnit);

  const HeartIcon = (props) => {
    return (
      <svg
        width={props.width}
        className={props.className}
        height={props.height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconly/Light/Heart">
          <g id="Heart">
            <path
              id="Stroke 1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
              stroke="#1B1918"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              d="M16 6.69995C17.07 7.04595 17.826 8.00095 17.917 9.12195"
              stroke="#1B1918"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  };

  const [liked, setLiked] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const handleRequestForm = () => {
    history.push("/requestForm");
  };

  const changeImage = (e) => {
    setSelectedImage(
      productDet.productimages_set.length !== 0
        ? productDet.productimages_set[e.target.id].image
        : ""
    );
  };

  const viewProductImage = () => {
    setChecked((prev) => !prev);
  };

  const like = () => {
    setLiked((prev) => !prev);
  };

  const handleMaterialType = (materialType) => {
    console.log(materialType.value);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleUnit = (unit) => {
    if (unit.value !== currentUnit) {
      if (unit.value === "cm") {
        setCurrentUnit(unit.value);
        heightRef.current.firstElementChild.firstElementChild.value =
          height * 30.48;
        widthRef.current.firstElementChild.firstElementChild.value =
          width * 30.48;
        setHeight(height * 30.48);
        setWidth(width * 30.48);
      } else if (unit.value === "ft.") {
        setCurrentUnit(unit.value);
        heightRef.current.firstElementChild.firstElementChild.value =
          height / 30.48;
        widthRef.current.firstElementChild.firstElementChild.value =
          width / 30.48;
        setHeight(height / 30.48);
        setWidth(width / 30.48);
      }
    }
  };

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const reduceItem = () => {
    setQuantity(quantity - 1);
  };

  const customizeDesignFormHandler = (input) => {
    history.push(`/shop/${id}/customizedesign`);
  };

  const goBack = () => {
    history.push(`/shop`);
  };
  // const handleApi = (e) =>
  // {
  //     if(productStatus.simDesign && productStatus.otherColor && productStatus.otherApp)
  //     {
  //         return true;
  //     }
  //     else
  //     {
  //         return false;
  //     }
  // }

  return (
    <React.Fragment>
      <div ref={mainRef}>
        <MainNav />
      </div>
      {
        // productStatus.simDesign === false || productStatus.otherColor === false) && (productStatus.otherApp === false ||
        productStatus.productDet === false ? (
          <div className="product-loader-container">
            <div>
              <CircularProgress size={80} className="product-loader" />
            </div>
          </div>
        ) : (
          <div className="product-main-container">
            <div className="product-container">
              <Grid container spacing={1}>
                <Grid item lg={7} xs={12}>
                  <Grid
                    container
                    spacing={6}
                    className="product-image-container"
                  >
                    <Grid item xs={2}>
                      <Grid direction="column" container spacing={1}>
                        {productDet.productimages_set
                          ? productDet.productimages_set.map(
                              (current, index) => (
                                <Grid item xs={4}>
                                  <img
                                    onClick={changeImage}
                                    id={index}
                                    src={`${process.env.REACT_APP_ROOT_URL}${current.image}`}
                                    alt="product"
                                    className="product-images"
                                  />
                                </Grid>
                              )
                            )
                          : null}
                      </Grid>
                    </Grid>
                    <Grid item xs={9}>
                      <FormControlLabel
                        control={
                          <img
                            checked={checked}
                            onClick={viewProductImage}
                            src={`${process.env.REACT_APP_ROOT_URL}${selectedImage}`}
                            alt="product"
                            className="selected-product-image"
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={1}
                    className="mobile-product-image-container"
                  >
                    <Grid item xs={12}>
                      <div className="mobile-back-arrow-container">
                        <img
                          src={BackArrow}
                          alt="back"
                          className="mobile-back-arrow"
                          onClick={goBack}
                        />
                      </div>

                      <section class="carousel" aria-label="Gallery">
                        <ol class="carousel__viewport">
                          {productDet.productimages_set
                            ? productDet.productimages_set.map(
                                (current, index) => (
                                  <li
                                    id={`carousel__slide-item${index}`}
                                    tabindex="0"
                                    class="carousel__slide"
                                  >
                                    <img
                                      id={index}
                                      src={`${process.env.REACT_APP_ROOT_URL}${current.image}`}
                                      alt="product"
                                      className="carousel-product-images"
                                    />
                                    <div class="carousel__snapper"></div>
                                  </li>
                                )
                              )
                            : null}
                        </ol>
                      </section>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={5} xs={12}>
                  <div className="product-details-container">
                    <div className="product-name-container">
                      <div className="product-name">
                        <p>
                          {productDet.design_name} . {productDet.colorway} .{" "}
                          {productDet.application}
                        </p>
                      </div>
                      <div className="product-collection-like">
                        <img
                          src={collectionImg}
                          alt="collection"
                          className="collection"
                        />
                        <div onClick={like}>
                          <HeartIcon
                            width={23}
                            height={24}
                            className={liked ? "heartImg-active" : "heartImg"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="artist-name">by {productDet.artist}</div>
                    <div className="product-rating-container">
                      <img src={Rating} alt="rating" />{" "}
                      <span className="product-rating">
                        {productDet.ratings} ({productDet.reviews_set.length})
                      </span>
                    </div>
                    <div className="material-type-container">
                      <p>MATERIAL TYPE</p>
                      <Dropdown
                        arrowClosed={arrowClosed}
                        arrowOpen={arrowOpen}
                        options={materialTypes}
                        onChange={handleMaterialType}
                        placeholder="Select"
                      />
                    </div>
                    <Grid
                      container
                      spacing={1}
                      className="material-dimensions-container"
                    >
                      <Grid item xs={6} md={5} className="material-width">
                        <p>WIDTH</p>
                        <InputTextField
                          ref={widthRef}
                          defaultValue={width}
                          onChange={handleWidth}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6} md={5} className="material-height">
                        <p>HEIGHT</p>
                        <InputTextField
                          ref={heightRef}
                          defaultValue={height}
                          onChange={handleHeight}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} md={2} className="material-unit">
                        <p>UNIT</p>
                        <Dropdown
                          arrowClosed={arrowClosed}
                          arrowOpen={arrowOpen}
                          options={unit}
                          onChange={handleUnit}
                          value={defaultUnit}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={5}
                      className="product-quantity-price-container"
                    >
                      <Grid
                        item
                        xs={12}
                        md={6}
                        className="material-quantity-container"
                      >
                        <p>QUANTITY</p>
                        <div className="material-quantity">
                          {quantity <= 1 ? (
                            <img src={Minus} alt="minus" className="add-item" />
                          ) : (
                            <img
                              src={Minus}
                              onClick={reduceItem}
                              alt="minus"
                              className="add-item"
                            />
                          )}
                          {quantity}
                          <img
                            src={Plus}
                            onClick={addItem}
                            alt="plus"
                            className="reduce-item"
                          />
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        className="material-price-container"
                      >
                        <p>PRICE</p>
                        <span className="material-price">
                          &#8377; {productDet.base_cost * quantity}{" "}
                          <span className="tax">inclusive all taxes</span>
                        </span>
                      </Grid>
                    </Grid>
                    <Button className="addToCartBtn">Add to cart</Button>
                    <Button
                      variant="outlined"
                      className="custBtn"
                      onClick={customizeDesignFormHandler}
                    >
                      Customize this design
                    </Button>
                    <hr className="breakline" />
                    <div className="request-measurement">
                      <h4>Request Measurement</h4>

                      <Button
                        onClick={handleRequestForm}
                        className="requestMeasurementBtn"
                      >
                        Request Measurement
                      </Button>
                      <p>
                        The Wallrus Company will send an agent to do on the
                        ground measurement. You will only able to purchase, once
                        the ground measurement is done.
                      </p>
                    </div>
                    <hr className="breakline" />
                    <div className="reviews-ratings-container">
                      <div className="reviews-ratings">
                        <h4 className="reviews-ratings-heading">
                          Review & Ratings ({productDet.reviews_set.length})
                        </h4>
                        <div className="write-review">
                          <Button className="writeReviewBtn">
                            <div>
                              <img
                                className="write-review-icon"
                                src={Pencil}
                                alt="pencil"
                              />{" "}
                              Write a review
                            </div>
                          </Button>
                        </div>
                      </div>
                      {productDet.reviews_set.length === 0 ? (
                        <div>No reviews and ratings</div>
                      ) : (
                        <>
                          {productDet.reviews_set.map((current) => (
                            <>
                              <div className="reviews-ratings-list">
                                <div className="rating-date">
                                  <div className="rated-user">
                                    <img
                                      src={current.profilePic}
                                      alt="Profile Pic"
                                    />
                                    <div className="ratings-name">
                                      <span className="rated-username">
                                        {current.name}
                                      </span>
                                      <span>
                                        <img
                                          src={Rating}
                                          alt="rating"
                                          className="rating-icon"
                                        />{" "}
                                        <span className="rating">
                                          {" "}
                                          {current.rating}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="rated-date">
                                    {current.date}
                                  </div>
                                </div>
                                <div className="review">{current.review}</div>
                                <hr className="breakline" />
                              </div>
                              <span class="view-more-reviews">View more</span>
                            </>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="other-colorway-container">
              <h4>Other colorway</h4>
              {otherColor !== [] ? (
                <p>No other colorways to show</p>
              ) : (
                <Grid
                  container
                  spacing={2}
                  justifyContent="flex-end"
                  direction="row"
                  style={{ marginTop: "2.6%" }}
                >
                  {/* <> */}
                  {otherColor.map((current, index) => (
                    <ProductCard
                      key={index}
                      id={index}
                      image={current.productimages_set[0].image}
                      userimg=""
                      artistname={current.artist}
                      generaldata
                    />
                  ))}
                  {/* </> */}
                </Grid>
              )}
            </div>
            <div className="other-applications-container">
              <h4>Other applications</h4>
              {otherApp !== [] ? (
                <p>No other applications to show</p>
              ) : (
                <Grid
                  container
                  spacing={2}
                  justifyContent="flex-end"
                  direction="row"
                  style={{ marginTop: "2.6%" }}
                >
                  {otherApp.map((current, index) => (
                    <ProductCard
                      key={index}
                      id={index}
                      image={current.productimages_set[0].image}
                      userimg=""
                      artistname={current.artist}
                      generaldata
                    />
                  ))}
                </Grid>
              )}
            </div>
            <div className="more-artist-designs-container">
              <h4>More by Devon Lane</h4>
              <Grid
                container
                spacing={2}
                justifyContent="flex-end"
                direction="row"
                style={{ marginTop: "2.6%" }}
              >
                {moreByArtist.map((current, index) => (
                  <ProductCard
                    key={index}
                    id={index}
                    image={current.image}
                    userimg=""
                    artistname=""
                    generaldata
                  />
                ))}
              </Grid>
            </div>
            <div className="artist-profile-info-container">
              <hr className="breakline breakline2" />
              <div className="artist-profile-pic-container">
                <img className="artist-profile-pic" src={Model} alt="Artist" />
              </div>
              <div className="artist-profile-name">Devon Lane</div>
              <div className="artist-profile-info">
                230 designs | 2.5k followers
              </div>
              <Button className="followArtistBtn">
                <img
                  className="follow-artist-icon"
                  src={PlusWhite}
                  alt="follow"
                />{" "}
                Follow
              </Button>
            </div>
            <div className="similar-designs-container">
              <h4>Similar designs</h4>
              <Grid
                container
                spacing={2}
                justifyContent="flex-end"
                direction="row"
                style={{ marginTop: "2.6%" }}
              >
                {simDesign.map((current, index) => (
                  <ProductCard
                    key={index}
                    id={index}
                    image={current.productimages_set[0].image}
                    userimg={Model}
                    artistname={current.artist}
                    generaldata
                  />
                ))}
              </Grid>
            </div>
            <Footer />
          </div>
        )
      }
    </React.Fragment>
  );
};

export default Product;
