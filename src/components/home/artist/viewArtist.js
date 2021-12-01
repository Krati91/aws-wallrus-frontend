import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Footer from "../footer/footer";
import MainNav from "../main-nav/main-nav";
import ProductCard from "../product-cards";
import design1 from "../../../images/design1.svg";
import design2 from "../../../images/design2.svg";
import design3 from "../../../images/design3.svg";
import design4 from "../../../images/design4.svg";
import userimg1 from "../../../images/Ellipse68.svg";
import plusIcon from "../../../images/plus1.svg";
import "./viewArtist.scss";

const ViewArtist = (props) => {
  const { name } = useParams();
  const artistImages = [
    {
      image: design1,
    },
    {
      image: design2,
    },
    {
      image: design3,
    },
    {
      image: design4,
    },
    {
      image: design1,
    },
    {
      image: design2,
    },
    {
      image: design3,
    },
    {
      image: design4,
    },
    {
      image: design1,
    },
    {
      image: design2,
    },
    {
      image: design3,
    },
    {
      image: design4,
    },
    {
      image: design1,
    },
    {
      image: design2,
    },
    {
      image: design3,
    },
    {
      image: design4,
    },
    {
      image: design1,
    },
    {
      image: design2,
    },
    {
      image: design3,
    },
    {
      image: design4,
    },
    {
      image: design1,
    },
    {
      image: design2,
    },
    {
      image: design3,
    },
    {
      image: design4,
    },
    {
      image: design1,
    },
    {
      image: design2,
    },
  ];
  return (
    <div>
      <MainNav />
      <Grid container style={{ padding: "2rem 2.5rem" }}>
        <Grid item md={3}>
          <div className="artist-details-snippet-container">
            <div className="artist-snippet-img-container">
              <img src={userimg1} className="artist-snippet-img" alt="" />
            </div>
            <div className="artist-snippet-details">
              <div className="artist-snippet-name">
                <h2>{name}</h2>
              </div>
              <div className="artist-snippet-stats">
                <p>230 designs | 2.5k followers</p>
              </div>
              <div className="artist-snippet-bio">
                <p>
                  Hey! I'm Leslie, an artist. I have a background in coding and
                  love gaming, sports (mainly getting injured), and spending too
                  much money on tattoos.
                </p>
              </div>
            </div>

            <div className="artist-snippet-btn-container">
              <Button variant="contained" className="artist-snippet-btn">
                <img src={plusIcon} style={{ width: "24px", height: "24px" }} />
                <span
                  style={{
                    padding: "0px 10px",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#1B1918 !important",
                    position: "relative",
                    top: "2px",
                  }}
                >
                  Follow
                </span>
              </Button>
            </div>
            <div className="artist-snippet-date-container">
              <span className="artist-snippet-date">
                MEMBER SINCE: APRIL 26, 2021
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div style={{ padding: "0" }}>
            <Grid container spacing={2}>
              {artistImages.map((item, index) => (
                <>
                  <ProductCard
                    key={index}
                    id={index}
                    image={item.image}
                    userimg=""
                    artistname=""
                    generaldata
                  />
                </>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default ViewArtist;
