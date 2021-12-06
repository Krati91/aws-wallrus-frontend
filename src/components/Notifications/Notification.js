import React from "react";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Notification from "../../images/Notification.svg";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import User from "../../images/user.svg";
import Badge from "@material-ui/core/Badge";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    borderRadius: "12px",
    marginTop: "10px",
    marginRight: "35px",
  },
  list: {
    padding: "8px 0px 0px 0px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "23vw",
    backgroundColor: theme.palette.background.paper,
    height: "10vh",
    paddingLeft: "18px !important",
    borderBottom: "2.2px solid #F6F6F6",
    alignItems: "center",
  },
  inline: {
    display: "inline",
  },
  ListItemAvatar: {
    paddingLeft: "6px",
  },
  Avatar: {
    width: 38,
    height: 38,
  },
  MainAvatar: {
    border: "7px solid #F6F6F6",
    width: 38,
    height: 38,
  },
  ListItemText: {
    paddingLeft: "12px",
    fontSize: "14px !important",
  },
  badgeStyles: {
    backgroundColor: "#F47A32",
    position: "absolute",
    top: "25px",
    left: "-12px",
  },
  btnRoot: {
    backgroundColor: "#F6F7F7",
    marginTop: "12px",
    fontWeight: "500 !important",
    letterSpacing: "1px !important",
    borderRadius: "0 !important",
  },
  BellIcon: {
    borderRadius: "50% !important",
    padding: "10px !important",
  },
}));

export default function Notifications(props) {
  const { mobile } = props;
  const classes = useStyles();

  return (
    <div>
      <StyledMenu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <ListItem alignItems="flex-start" className={classes.root}>
          <ListItemAvatar className={classes.ListItemAvatar}>
            <Avatar
              alt="Remy Sharp"
              src={Notification}
              className={classes.MainAvatar}
            />
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.ListItemText }}
            primary="You’ve received a payment of 
                $2000 from The Wallrus Company"
          />
        </ListItem>

        <ListItem alignItems="flex-start" className={classes.root}>
          <ListItemAvatar className={classes.ListItemAvatar}>
            <Badge
              variant="dot"
              overlap="circle"
              classes={{ badge: classes.badgeStyles }}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Avatar alt="User-Icon" src={User} className={classes.Avatar} />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.ListItemText }}
            primary="Saurabh Singh started following you."
          />
        </ListItem>

        <ListItem alignItems="flex-start" className={classes.root}>
          <ListItemAvatar className={classes.ListItemAvatar}>
            <Badge
              variant="dot"
              overlap="circle"
              classes={{ badge: classes.badgeStyles }}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Avatar alt="User-Icon" src={User} className={classes.Avatar} />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.ListItemText }}
            primary="Saurabh Singh viewed your design."
          />
        </ListItem>

        <ListItem alignItems="flex-start" className={classes.root}>
          <ListItemAvatar className={classes.ListItemAvatar}>
            <Badge
              variant="dot"
              overlap="circle"
              classes={{ badge: classes.badgeStyles }}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Avatar alt="User-Icon" src={User} className={classes.Avatar} />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.ListItemText }}
            primary="Saurabh Singh favourites your design."
          />
        </ListItem>
        <Button variant="contained" className={classes.btnRoot}>
          Mark all as read
        </Button>
      </StyledMenu>
    </div>
  );
}
