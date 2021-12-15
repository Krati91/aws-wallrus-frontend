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
  addToFavourite,
  removeFavourite
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
  // const [loader , setLoader] = useState(true);
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
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const { id } = useParams();


  const [selectedImage, setSelectedImage] = useState("");
  const [materialTypes, setMaterialTypes] = useState("");
  const [like, setLike] = React.useState(false);

  const onFavClick = like ? removeFavourite : addToFavourite;

  const likeHandler = () => {
    onFavClick(productDet.sku).then(() => {
      setLike((like) => !like);
    }).catch(err => alert("Couldn't add to favourite"));
  };

  const heartOutlineColor = like ? "#FA0707" : "#000";
  const heartFillColor = like ? "#FA0707" : "none";
  const heartMarkColor = like ? "#fff" : "#000";
  useEffect(() => {
    mainRef.current.scrollIntoView();
    // setProductStatus({
    //   ...productStatus,
    //   simDesign: false,
    //   otherApp: false,
    //   otherColor: false,
    //   productDet: false,
    // });

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
      setLoader(false);
      // Like handling functionality
      if (productDetailsList.is_favourite) {
        setLike(true);
      }
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

  const HeartIcon = (
    <svg
      onClick={likeHandler}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill={heartFillColor}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
        stroke={heartOutlineColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
        stroke={heartMarkColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

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
        // (productStatus.simDesign === false || productStatus.otherColor === false) && (productStatus.otherApp === false ||
        loader ? (
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
                                    src={`${process.env.REACT_APP_ROOT_URL}${current.images}`}
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
                        <div>
                          {HeartIcon}
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
