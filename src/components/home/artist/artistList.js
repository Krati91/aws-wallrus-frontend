import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MainNav from "../main-nav/main-nav";
import Footer from "../footer/footer";
import { Grid, Button } from "@material-ui/core";
import ProductCard from "../product-cards";
import filterArrow from "../../../images/arrow-down.svg";
import plusIcon from "../../../images/plus1.svg";
import design5 from "../../../images/design1.svg";
import design6 from "../../../images/design2.svg";
import design7 from "../../../images/design3.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./artistList.scss";
import { ArtistListStatus } from "../../../apis/apiCalls";
import { ArtistListStatusPost } from "../../../apis/apiCalls";
import CircularProgress from "@material-ui/core/CircularProgress";

const ArtistList = (props) => {
  const [selectedFilter, setFilter] = useState("");
  const [artist, setArtist] = useState([]);
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const accessToken = localStorage.getItem("Access_Key");
  const refreshToken = localStorage.getItem("Refresh_Key");

  useEffect(() => {
    setLoader(false);

    if (accessToken && refreshToken) {
      ArtistListStatus(accessToken, refreshToken)
        .then((artist_data_status) => {
          setArtist(artist_data_status);
          setLoader(true);
        })
        .catch((refreshed_data_status) => {
          setArtist(refreshed_data_status);
          setLoader(true);
        });
    }
  }, []);

  const handleFollow = (e) => {
    let formData = new FormData();
    formData.append("id", e.target.id);

    ArtistListStatusPost(accessToken, refreshToken, formData)
      .then((data) => {
        console.log(data);
        // window.location.reload();
      })
      .catch((messed) => {
        console.log("All the best");
      });
  };

  const arrowClosed = (
    <img
      src={filterArrow}
      alt="arrow-closed"
      className="shop-filter-arrow-closed"
    />
  );

  const arrowOpen = (
    <img
      src={filterArrow}
      alt="arrow-open"
      className="shop-filter-arrow-open"
    />
  );

  const sortOptions = ["Most followed", "Recommended", "New artists"];

  const handleFilters = (filter) => {
    setFilter(filter);
  };

  const handleArtistClick = (artist) => {
    history.push(`/artist/${artist}`);
  };

  return (
    <div>
      <MainNav />
      {!loader ? (
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <CircularProgress size={80} className="application-loader" />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "32px",
              padding: "0 40px",
            }}
          >
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: "600" }}>Artist</h2>
            </div>
            <div className="filter-container-artistList">
              <Dropdown
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
                options={sortOptions}
                onChange={handleFilters}
                placeholder="Sort by"
                value={selectedFilter}
                className="filter-holder"
              />
            </div>
          </div>

          <div style={{ padding: "0 40px" }}>
            {artist.map(
              (item, index) =>
                item.status === false && (
                  <div
                    className="artist-page-container"
                    name={item.full_name}
                    key={item.Unique_id}
                  >
                    <Grid
                      container
                      justify="space-between"
                      direction="row"
                      onClick={() => handleArtistClick(item.full_name)}
                    >
                      <Grid item xs>
                        <div className="artist-container">
                          <div className="artist-img-container">
                            <img
                              src={item.user.profile_picture}
                              className="artist-list-img"
                              alt=""
                            />
                          </div>
                          <div className="artistList-details-container">
                            <h2 className="artistList-name">
                              {item.full_name}
                            </h2>
                            <p className="artistList-details">
                              {item.Designs > 1
                                ? `${item.Designs} designs`
                                : `${item.Designs} design`}{" "}
                              |{" "}
                              {item.followers > 1
                                ? `${item.followers} followers`
                                : `${item.followers} follower`}
                            </p>
                            {/* <div className="artistList-btn-container"> */}
                            <Button
                              variant="contained"
                              id={item.Unique_id}
                              onClick={handleFollow}
                              style={{
                                width: "120px",
                                height: "40px",
                                background: "#1b1918",
                                padding: "8px 16px",
                                borderRadius: "8px",
                                color: "#FFFFFF",
                              }}
                            >
                              <img
                                id={item.Unique_id}
                                src={plusIcon}
                                style={{ width: "24px", height: "24px" }}
                                alt=""
                              />
                              <span
                                id={item.Unique_id}
                                style={{
                                  padding: "0px 10px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#1B1918 !important",
                                }}
                              >
                                Follow
                              </span>
                            </Button>
                            {/* </div> */}
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs>
                        <div style={{ padding: "0px 10px" }}>
                          <Grid container spacing={2}>
                            {item.design_images.map((img) => (
                              // <ProductCard
                              //   key={index}
                              //   id={index}
                              //   image={`${process.env.REACT_APP_ROOT_URL}/media/${img}`}
                              //   width={236}
                              //   height={140}
                              // />
                              <img
                                src={`${process.env.REACT_APP_ROOT_URL}/media/${img}`}
                                style={{
                                  width: 236,
                                  height: 140,
                                  borderRadius: 12,
                                  objectFit: "cover",
                                }}
                                alt="design img"
                              />
                            ))}
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                    {index < artist.length - 1 ? (
                      <> </>
                    ) : (
                      <div className="load-more-artists-container">
                        <Button
                          variant="outlined"
                          className="load-more-artists-btn"
                        >
                          Load more artists
                        </Button>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ArtistList;
