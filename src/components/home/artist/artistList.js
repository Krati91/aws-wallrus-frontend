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
import { followArtist } from "../../../apis/apiCalls";
import CircularProgress from "@material-ui/core/CircularProgress";
import Artistitem from "./artistItem";

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
          console.log(artist_data_status);
          setArtist(artist_data_status);
          setLoader(true);
        })
        .catch((refreshed_data_status) => {
          setArtist(refreshed_data_status);
          setLoader(true);
        });
    }
  }, []);

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
              (item, index) => (
                <Artistitem item={item} handleArtistClick={handleArtistClick} />
              )
            )}
          </div>
          <div className="load-more-artists-container">
            <Button variant="outlined" className="load-more-artists-btn">
              Load more artists
            </Button>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ArtistList;
