import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./Shop.scss";
import Banner from "../banner";
import { Grid } from "@material-ui/core";
import MainNav from "../main-nav/main-nav";
import Footer from "../footer/footer";
import "react-dropdown/style.css";
import {
  Button,
  Paper,
  Tabs,
  withStyles,
  Tab,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Applications from "./applications";
import ButtonFloat from "../../button-float/button-float";
import axios from "axios";

const DotMenu = () => (
  <svg
    width="4"
    height="14"
    viewBox="0 0 4 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.333496 12.0001C0.333496 12.9167 1.0835 13.6667 2.00016 13.6667C2.91683 13.6667 3.66683 12.9167 3.66683 12.0001C3.66683 11.0834 2.91683 10.3334 2.00016 10.3334C1.0835 10.3334 0.333496 11.0834 0.333496 12.0001ZM0.333496 2.00008C0.333496 2.91675 1.0835 3.66675 2.00016 3.66675C2.91683 3.66675 3.66683 2.91675 3.66683 2.00008C3.66683 1.08342 2.91683 0.333416 2.00016 0.333416C1.0835 0.333416 0.333496 1.08342 0.333496 2.00008ZM2.00016 8.66675C1.0835 8.66675 0.333496 7.91675 0.333496 7.00008C0.333496 6.08341 1.0835 5.33341 2.00016 5.33341C2.91683 5.33341 3.66683 6.08341 3.66683 7.00008C3.66683 7.91675 2.91683 8.66675 2.00016 8.66675Z"
      fill="#6F6F6F"
    />
  </svg>
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ padding: "0px 0px 0px 4px", minHeight: `${props.style}` }}
    >
      {value === index && children}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  ApplicationTabs: {
    backgroundColor: "#fff",
    flexGrow: 1,
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    boxShadow: "none",
    borderBottom: "1px solid #e9e9e9",
    maxWidth: "100vw !important",
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "start",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 160,
      width: "100%",
      borderBottom: "1px solid #1B1918",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const ShopContainer = (props) => {

  const history = useHistory();

  const mainRef = React.useRef(null);

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [applications, setApplications] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.localStorage.getItem("Access_Key") ? history.push('/home') : history.push('/');

    const init = async () => {
      const response = await axios.get("/api/app-list");
      setApplications(response.data);
    };
    init();
    setLoader(false);
  }, [history]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div ref={mainRef}>
        <MainNav />
      </div>
      <div className="shop-container">
        <div>
          <Banner shopPage>
            You can upload your own design file and select an application of
            your choice.
          </Banner>
        </div>

        <div className="shop-application-tabs">
          <Grid container direction="column" spacing={0}>
            <Grid item xs style={{ padding: "0px 0px" }}>
              <Paper square className={classes.ApplicationTabs}>
                <StyledTabs
                  variant="scrollable"
                  value={value}
                  onChange={handleTabChange}
                  aria-label="application-tabs"
                  TabIndicatorProps={{ style: { backgroundColor: "#000" } }}
                  centered={false}
                >
                  {!loader &&
                    applications.map((tab) => (
                      <Tab label={tab.name} className="tab" disableRipple />
                    ))
                  }

                  {/* <Tab
                    label={
                      <span className="tab-dotmenu-container">
                        <DotMenu /> <span className="tab-dotmenu">More</span>
                      </span>
                    }
                    className="tab"
                    disableRipple
                  /> */}
                </StyledTabs>
              </Paper>
            </Grid>

            <Grid item xs style={{ padding: "0px 0px" }}>
              <TabPanel value={value} index={0}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="wallpaper"
                />
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="curtains"
                />
              </TabPanel>

              <TabPanel value={value} index={2}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="curtain-blinds"
                />
              </TabPanel>

              <TabPanel value={value} index={3}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="cushion-covers"
                />
              </TabPanel>

              <TabPanel value={value} index={4}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="table-runners"
                />
              </TabPanel>

              <TabPanel value={value} index={5}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="tablecloth"
                />
              </TabPanel>

              <TabPanel value={value} index={6}>
                <Applications
                  tabvalue={value}
                  refer={mainRef}
                  application="table-placemats"
                />
              </TabPanel>

              <TabPanel value={value} index={7}></TabPanel>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
      {/* <ButtonFloat /> */}
    </>
  );
};

export default ShopContainer;
