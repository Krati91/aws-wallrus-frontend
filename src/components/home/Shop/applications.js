import "./applications.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button, Box } from "@material-ui/core";
import filterArrow from "../../../images/arrow-down.svg";
import design1 from "../../../images/design1.svg";
import design2 from "../../../images/design2.svg";
import ProductCard from "../../product-card/product-card";
import Filters from "./filters/filters";
import Dropdown from "react-dropdown";
import { productList, filterList } from "../../../apis/apiCalls";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "../../pagination/pagination";

const Applications = (props) => {
  const [application, setApplication] = useState([]);
  const [apiStatus, setApiStatus] = useState({
    productList: false,
    filters: false,
  });
  const [listLoader, setListLoader] = useState(false);
  const [filtersList, setFiltersList] = useState([]);

  //   useEffect(async() => {
  //     if (props.application === "wallpaper" && props.tabvalue === 0) {
  //       const application = await productList("wallpaper");
  //       setApplication(application.data);
  //       setApiStatus({ ...apiStatus, productList: true });
  //       console.log(application);
  //     }
  //   }, [props.tabvalue]);
  const dummyData = [
    {
      productimages_set: [
        {
          image: design1,
        },
      ],
      artist: "Sant Johns",
      userImage: design1,
    },
    {
      productimages_set: [
        {
          image: design1,
        },
      ],
      artist: "Sant Johns",
      userImage: design1,
    },
    {
      productimages_set: [
        {
          image: design1,
        },
      ],
      artist: "Sant Johns",
      userImage: design1,
    },
    {
      productimages_set: [
        {
          image: design1,
        },
      ],
      artist: "Sant Johns",
      userImage: design1,
    },
  ];
  useEffect(() => {
    setApiStatus({ ...apiStatus, productList: false, filters: false });
    setListLoader(true);
    
    if (props.application === "wallpaper" && props.tabvalue === 0) {
      productList("wallpaper").then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
          // console.log(application);
        }
      });

      filterList("wallpaper").then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }

    if (props.application === "curtains" && props.tabvalue === 1) {
      productList(props.application).then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
        }
      });

      filterList(props.application).then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }

    if (props.application === "curtain-blinds" && props.tabvalue === 2) {
      productList(props.application).then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
        }
      });

      filterList(props.application).then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }

    if (props.application === "cushion-covers" && props.tabvalue === 3) {
      productList(props.application).then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
        }
      });

      filterList(props.application).then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }

    if (props.application === "table-runners" && props.tabvalue === 4) {
      productList(props.application).then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
        }
      });

      filterList(props.application).then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }

    if (props.application === "tablecloth" && props.tabvalue === 5) {
      productList(props.application).then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
        }
      });

      filterList(props.application).then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }

    if (props.application === "table-placemats" && props.tabvalue === 6) {
      productList(props.application).then((productsList) => {
        if (productsList) {
          setApplication(productsList);
          setApiStatus({ ...apiStatus, productList: true });
          setListLoader(false);
        }
      });

      filterList(props.application).then((filtersList) => {
        setFiltersList(filtersList);
        setApiStatus({ ...apiStatus, filters: true });
      });
    }
  }, [props.tabvalues]);

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

  const ArrowLeft = () => (
    <svg
      className="previous"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.9165 12.8337L1.08317 7.00033L6.9165 1.16699"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const ArrowRight = () => (
    <svg
      className="next"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.08325 1.16732L6.91659 7.00065L1.08325 12.834"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const designContents = [
    {
      designName: "Art Decon1",
      applications: "Wallpaper",
      name: "Jassie Mario",
      image: design1,
    },
  ];

  const sortOptions = [
    "Best Selling",
    "Recommended",
    "Customer ratings",
    "What's new",
  ];

  const history = useHistory();

  const [selectedFilter, setFilter] = useState("Best Selling");

  const [gridItem, setGridItem] = useState(false);

  const [filterCount, setFilterCount] = useState(0);

  const onClick = (e) => {
    setGridItem(!gridItem);
  };

  const handleFilters = (filter) => {
    setFilter(filter);
  };

  const handleFilterCount = (e) => {
    setFilterCount(filterCount + 1);
  };

  const viewProduct = (e) => {
    history.push(`/shop/${e.target.id}`);
  };

  const PER_PAGE = 12;

  const [currentPage, setCurrentPage] = useState(0);

  // function handlePageClick({ selected: selectedPage }) {
  //   props.refer.current.scrollIntoView();
  //   setCurrentPage(selectedPage);
  // }

  const offset = currentPage * PER_PAGE;

  let pages = [];
  const length = application.length || 0;
  for (let i = 1; i <= Math.ceil(length / PER_PAGE); i++) {
    pages.push(i);
  }

  return (
    <div>
      {apiStatus.productList === true && (
        <div className="filter-nav">
          <Grid item lg={3}>
            <div
              className="filters-header"
              style={gridItem ? { borderRight: "1px solid #DCDCDC" } : null}
            >
              <div className="filter-count">
                <div className="arrows" onClick={onClick}>
                  {gridItem ? <ArrowLeft /> : <ArrowRight />}
                </div>

                <p>
                  <span>{filterCount}</span>Filters
                </p>
              </div>
              {gridItem ? (
                <p onClick={() => setFilterCount(0)} className="clear-all">
                  Clear all
                </p>
              ) : null}
            </div>
          </Grid>
          <div className="filter-container">
            <div>
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
        </div>
      )}
      <Grid container style={{ paddingRight: "10px" }}>
        {gridItem ? (
          <Grid item lg={3}>
            <div>
              <Filters filtersList={filtersList} />
            </div>
          </Grid>
        ) : null}

        <Grid item xs>
          {listLoader ? (
            <div className="application-loader-container">
              <div>
                <CircularProgress size={80} className="application-loader" />
              </div>
            </div>
          ) : (
              <>
                <Grid
                  container
                  spacing={4}
                  justifyContent="flex-end"
                  direction="row"
                  style={{ marginTop: "2.6%", paddingLeft: "40px" }}
                >
                  {application
                    .slice(offset, offset + PER_PAGE)
                    .map((item, index) => (
                      <Grid item xs={6} md={4} lg={3} xl={3} style={{ maxWidth: '322px' }}>
                        <ProductCard
                          general={true}
                          key={index}
                          id={item.slug}
                          sku={item.sku}
                          onClick={viewProduct}
                          designImage={
                            item.productimages_set.length !== 0
                              ? `${process.env.REACT_APP_ROOT_URL}${item.productimages_set[0].image}`
                              : design1
                          }
                          designerName={item.artist}
                        />
                      </Grid>
                    ))}
                </Grid>
                {length > 0 ? (
                  <Pagination
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                ) : (
                    <p style={{ textAlign: "center" }}>No data found</p>
                  )}
              </>
            )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Applications;
