import React from "react";
import "./user-settings.scss";
import ArrowDown from "../../images/arrow-down.svg";
import ArrowRight from "../../images/arrow-right.svg";
import EditProfile from "../../images/edit-profile-icon.svg";
import ChangePassword from "../../images/change-password-icon.svg";
import NotificationSettings from "../../images/notification-settings-icon.svg";
import LogOut from "../../images/logout-icon.svg";
import Model from "../../images/model.svg";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { Link, useHistory } from "react-router-dom";
import { setTab } from "../../redux/Slices/userSignUpSlice/userSignUpSlice";
import { useDispatch } from "react-redux";
import collectionImg from "../../images/Addfile-light.svg";
import heartImg from "../../images/Heart-light.svg";
import cartIcon from "../../images/Bag-light.svg";
import InviteFriendsIcon from "../../images/invite-friends.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "12px",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserSettings = (props) => {
  const userType = window.localStorage.getItem("User_Type");
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const LogoutHandler = () => {
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  const handleTabs = (event) => {
    let id = event.target.parentNode.id;
    id = parseInt(id);
    dispatch(
      setTab({
        tab: id,
      })
    );
  };

  const handleTabs0 = (event) => {
    dispatch(
      setTab({
        tab: 0,
      })
    );
  };

  return (
    <React.Fragment>
      <div
        className="user-settings"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <img src={Model} alt="model" className="model" />
        <img src={ArrowDown} alt="arrow-down" className="arrow-down" />
      </div>
      <Popover
        onClose={handleClose}
        id={id}
        open={open}
        anchorEl={anchorEl}
        className="user-setting-popper"
      >
        <div className={classes.paper}>
          <img src={Model} alt="model" />
          <h4 className="user-name">Leslie Alexander</h4>
          {userType !== "Artist" && (
            <Link
              to="/userprofile"
              style={{ textDecoration: "none", color: "#6F6F6F" }}
            >
              <div className="view-page-container">
                <p>View my page</p>
                <img
                  src={ArrowRight}
                  alt="arrow-right"
                  className="arrow-right"
                />
              </div>
            </Link>
          )}
          <hr className="divider" />
          {userType !== "Artist" && (
            <React.Fragment>
              <ul className="user-settings-list">
                <Link to="/myorder" style={{ textDecoration: "none" }}>
                  <li id="3" onClick={handleTabs}>
                    <img
                      src={cartIcon}
                      alt="orders"
                      className="settings-icon"
                    />{" "}
                    <span>My order</span>
                  </li>
                </Link>
                <Link to="/favourites" style={{ textDecoration: "none" }}>
                  <li id="4" onClick={handleTabs}>
                    <img
                      src={heartImg}
                      alt="favourites"
                      className="settings-icon"
                    />
                    <span>Favourites</span>
                  </li>
                </Link>
                <Link to="/collection" style={{ textDecoration: "none" }}>
                  <li id="5" onClick={handleTabs}>
                    <img
                      src={collectionImg}
                      alt="collection"
                      className="settings-icon"
                    />
                    <span>Collection</span>
                  </li>
                </Link>
              </ul>
              <hr className="divider" />
            </React.Fragment>
          )}
          <ul className="user-settings-list">
            <Link to="/editprofile" style={{ textDecoration: "none" }}>
              <li id="0" onClick={handleTabs0}>
                <img
                  src={EditProfile}
                  alt="edit-profile"
                  className="settings-icon"
                />{" "}
                <span>Edit profile</span>
              </li>
            </Link>
            <Link to="/editprofile" style={{ textDecoration: "none" }}>
              <li id="1" onClick={handleTabs}>
                <img
                  src={ChangePassword}
                  alt="change-password"
                  className="settings-icon"
                />
                <span>Change password</span>
              </li>
            </Link>
            <Link to="/editprofile" style={{ textDecoration: "none" }}>
              <li id="2" onClick={handleTabs}>
                <img
                  src={NotificationSettings}
                  alt="notifications"
                  className="settings-icon"
                />
                <span>Notification settings</span>
              </li>
            </Link>
          </ul>
          {userType !== "Artist" && (
            <React.Fragment>
              <hr className="divider" />
              <ul className="user-settings-list">
                <Link to="/invitefriends" style={{ textDecoration: "none" }}>
                  <li id="6" onClick={handleTabs}>
                    <img
                      src={InviteFriendsIcon}
                      alt="invite-friends"
                      className="settings-icon"
                    />{" "}
                    <span>Invite Friends</span>
                  </li>
                </Link>
              </ul>
            </React.Fragment>
          )}
          <hr className="divider" />
          <ul className="user-settings-list">
            <li onClick={LogoutHandler}>
              <img src={LogOut} alt="logout" className="settings-icon" />
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </Popover>
    </React.Fragment>
  );
};

export default UserSettings;
