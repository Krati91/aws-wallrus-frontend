import { useState, useEffect } from "react";
import "./userprofile.scss";
import MainNav from "../main-nav/main-nav";
import Footer from "../footer/footer";
import {
  Grid,
  Button,
  Paper,
  Tabs,
  withStyles,
  Tab,
  makeStyles,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import userImg from "../../../images/model.svg";
import Edit from "../../../images/Edit.svg";
import ProductCard from "../product-cards";
import UserFollowing from "./user-profile-tabs-components/user-following/user-followings";
import UserOrders from "./user-profile-tabs-components/user-orders/user-orders";
import UserAnalytics from "./user-profile-tabs-components/user-analytics/user-analytics";
import UserWallrusCoins from "./user-profile-tabs-components/user-wallrus-coins/user-wallrus-coins";
import InviteFriends from "./user-profile-tabs-components/invite-friends/invite-friends";
import { Link } from "react-router-dom";
import UserCollections from "./user-profile-tabs-components/user-collections/user-collections";
import {
  getDecoratorSnippet,
  getDecoratorFavourites,
} from "../../../apis/apiCalls";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ padding: "25px 0px 0px 4px", minHeight: `${props.style}` }}
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
  UserProfileTabs: {
    backgroundColor: "#fff",
    flexGrow: 1,
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    boxShadow: "none",
    borderBottom: "1px solid #DCDCDC",
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

const UserProfile = (props) => {
  const classes = useStyles();
  const [loader, setloader] = useState(true);
  const [value, setValue] = useState(0);
  const [userDetails, setuserDetails] = useState({
    first_name: "",
    last_name: "",
    level: "",
    profile_picture: "",
  });
  const [designContents, setdesignContents] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const designContents = [
  //   {
  //     designName: "Art Decon1",
  //     applications: "Wallpaper",
  //     name: "Jassie Mario",
  //     image: design1
  //   },
  //   {
  //     designName: "Art Decon2",
  //     applications: "Curtains",
  //     name: "Ronald Richards",
  //     image: design2
  //   },
  //   {
  //     designName: "Art Decon3",
  //     applications: "Table cloth",
  //     name: "Leslie Alexander",
  //     image: design3
  //   },
  //   {
  //     designName: "Art Decon4",
  //     applications: "Curtain blinds",
  //     name: "Savannah Nguyen",
  //     image: design4
  //   },
  //   {
  //     designName: "Art Decon2",
  //     applications: "Curtains",
  //     name: "Ronald Richards",
  //     image: design2
  //   },
  //   {
  //     designName: "Art Decon3",
  //     applications: "Table cloth",
  //     name: "Leslie Alexander",
  //     image: design3
  //   },

  //   {
  //     designName: "Art Decon1",
  //     applications: "Wallpaper",
  //     name: "Jassie Mario",
  //     image: design1
  //   },
  //   {
  //     designName: "Art Decon4",
  //     applications: "Curtain blinds",
  //     name: "Savannah Nguyen",
  //     image: design4
  //   },
  // ]

  useEffect(() => {
    getDecoratorSnippet().then((res) => {
      console.log(res);
      setuserDetails({
        first_name: res.first_name,
        last_name: res.last_name,
        level: res.level,
        profile_picture: "",
      });
    });
    getDecoratorFavourites().then((res) => {
      let list = [];
      res.forEach((value) => {
        const design = {
          name: value.artist,
          image: value.image,
        };
        list.push(design);
      });
      setloader(false);
      setdesignContents(list);
    });
  }, []);

  return (
    <div className="user-profile-page-container">
      <MainNav />
      <Grid container style={{ margin: "32px 0px" }}>
        <Grid item xs>
          <div className="user-profile-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div className="user-profile-img-container">
                <img
                  src={
                    userDetails.profile_picture
                      ? userDetails.profile_picture
                      : userImg
                  }
                  className="user-profile-img"
                  alt=""
                />
              </div>

              <div className="user-profile-details-container">
                <h2 className="user-profile-name">
                  {userDetails.first_name + " " + userDetails.last_name}
                </h2>
                <p className="user-profile-experience">{userDetails.level}</p>
              </div>
            </div>
            <div className="user-profile-editBtn-container">
              <Link to="/editprofile">
                <Button
                  variant="contained"
                  size="large"
                  className="user-profile-editBtn"
                >
                  <img src={Edit} className="edit-btn-logo" alt="" />
                  <span style={{ paddingLeft: "10px" }}>Edit profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>

      <div>
        <Grid container direction="column" spacing={0}>
          <Grid item xs style={{ padding: "0px 40px" }}>
            <Paper square className={classes.UserProfileTabs}>
              <StyledTabs
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="edit-profile-tabs"
                TabIndicatorProps={{ style: { backgroundColor: "#000" } }}
                centered={false}
              >
                <Tab label="Favourites" className="tab" disableRipple />
                <Tab label="Collections" className="tab" disableRipple />
                <Tab label="Analytics" className="tab" disableRipple />
                <Tab label={`Following`} className="tab" disableRipple />
                <Tab label="My order" className="tab" disableRipple />
                <Tab label="Wallrus coins" className="tab" disableRipple />
                <Tab label="Invite friends" className="tab" disableRipple />
              </StyledTabs>
            </Paper>
          </Grid>

          <Grid item xs>
            <TabPanel value={value} index={0}>
              <Grid container style={{ padding: "40px", minHeight: "250px" }}>
                {loader ? (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress
                      size={50}
                      style={{ color: "#000", margin: "40px 0 60px" }}
                    />
                  </div>
                ) : designContents && designContents.length === 0 ? (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    No data to show
                  </div>
                ) : (
                  designContents.map((item, index) => (
                    <>
                      <ProductCard
                        key={index}
                        id={index}
                        image={item.image}
                        userimg={userImg}
                        artistname={item.name}
                        generaldata
                      />
                    </>
                  ))
                )}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <UserCollections />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div>
                <UserAnalytics />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div>
                <UserFollowing />
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div>
                <UserOrders />
              </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <div>
                <UserWallrusCoins />
              </div>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <div>
                <InviteFriends />
              </div>
            </TabPanel>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
