import React from "react"
import { Container, Grid, Fab, Paper, Tabs, Tab, makeStyles, withStyles, Button } from "@material-ui/core";
import Designs from "../designs/designs"
import PropTypes from 'prop-types';
import "./MobileDashboard.scss"
import PlusButton from '../../images/Plus.svg';
import ModelBig from '../../images/Model-big.svg';
import Edit from '../../images/Edit.svg';
import Navheader from "../Nav-Header/Nav-Header"
import Gallery from '../../images/gallery.svg';
import Earning from '../../images/Earning.svg';
import Buy from '../../images/Buy.svg';
import Show from '../../images/Show.svg';
import Heart from '../../images/Heart.svg';
import Followers from '../../images/3 User.svg';
import DesignFAQ from '../design-faq/design-faq';
import UnderReview from '../under-review/under-review';
import Analytics from "../analytics/analytics";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style = {{padding: "25px 0px 0px 4px"}}
      >

        {value === index && (children)}
        
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const StyledTabs = withStyles({
    indicator: {
      display: "flex",
      justifyContent: "start",
      position: "absolute",
      bottom: "0%",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: "90%",

        width: "80%",
        borderBottom: "1.5px solid #1B1918"
      },
    },
    root:{
        width: "95vw",
        borderBottom: "2px solid #F6F6F6",
    }
  })((props) => <Tabs {...props}  TabIndicatorProps=
    {{ children: <span /> }}/>);


    const useStyles = makeStyles((theme) => ({
    
        root: {
            maxWidth: "35%",
            fontSize: "14px !important", 
            position: "relative",
            left: "0px",
            paddingLeft: "0px !important",
            position:"relative"
        },
        mobileTabsContainer:
        {
            boxShadow: "none",
        },
        mobileTabs:{
            
        }
        
        
        
    }));

    
const MobileDashboard = (props) =>
{

    const [value, setValue] = React.useState(0)
    const handleClick = () =>
    {
        console.log("mobile-edit-btn-clicked")
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
    return(
        <div className = "mobile-dashboardWrapper">
            <Navheader mobile = {true} className = "mobileNav" mobileImg = "mobileImg"/>
            <Container>
                <Grid container spacing = {3} direction = "column">
                    <Grid item xs>
                        <div className = "user-description-mobile">
                            <div className = "user-img-container-mobile">
                                <img src = {ModelBig} alt = "user-picture" className = "user-img-mobile"/>

                            </div>
                            <div className = "user-details-container-mobile">
                                <h2 className = "user-name">
                                   Leslie Alexander 
                                </h2>
                                <p className = "user-experience">
                                    Entry Level
                                </p>
                            </div>
                            <div className = "mobile-edit-profile-container">
                                <Fab size = "small" variant = "round" color = "secondary" className = "edit-profile-fab-icon" onClick = {handleClick}>
                                    <img src = {Edit} alt = "edit-profile" className = "edit-button-mobile"/>
                                </Fab>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs style = {{paddingTop: "0px"}}>
                        <div className = "user-dashboard-mobile-bio">
                            <p className="mobile-bio">
                                Hey! I'm Leslie, an artist. I have a background in coding and love gaming, sports (mainly getting injured), and spending too much money on tattoos.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Paper square className = {classes.mobileTabsContainer}>
                            <StyledTabs variant = "scrollable" value = {value} onChange = {handleChange} TabIndicatorProps = {{style: {backgroundColor: "#000"}}}>
                                <Tab label="Stats" className="Stats-Mobile-Tab" disableRipple className = {classes.root}/>
                                <Tab label="Designs" className="Designs-Mobile-Tab" disableRipple className = {classes.root}/>
                                <Tab label="Analytics" className="Settings-Mobile-Tab" disableRipple className = {classes.root}/>
                                <Tab label="Under review" className="Settings-Mobile-Tab" disableRipple className = {classes.root}/>
                                <Tab label="Design FAQ" className="Settings-Mobile-Tab" disableRipple className = {classes.root}/>
                            </StyledTabs>
                        </Paper>
                        <Grid item xs>
                            <TabPanel value = {value} index = {0}>
                                <div className = "mobile-stats-container">
                                    <div className="mobile-stats-flex">
                                        <div>
                                            <img src={Gallery} className="mobile-left-image" alt=""></img>
                                            <span><p className='mobile-stats-left-attributes'>Total designs</p></span>
                                        </div>
                                        <div>
                                            <p className="mobile-stats-right-attributes"> 0 </p>
                                        </div>
                                    </div>
                                    <div className="mobile-stats-flex">
                                        <div>
                                            <img src={Earning} className="mobile-left-image" alt=""></img>
                                            <span><p className='mobile-stats-left-attributes'>Earning</p></span>
                                        </div>
                                        <div>
                                            <p className="mobile-stats-right-attributes"> 0 </p>
                                        </div>
                                    </div>
                                    <div className="mobile-stats-flex">
                                        <div>
                                            <img src={Buy} className="mobile-left-image" alt=""></img>
                                            <span><p className='mobile-stats-left-attributes'>Sales</p></span>
                                        </div>
                                        <div>
                                            <p className="mobile-stats-right-attributes"> 0 </p>
                                        </div>
                                    </div>
                                    <div className="mobile-stats-flex">
                                        <div>
                                            <img src={Show} className="mobile-left-image" alt=""></img>
                                            <span><p className='mobile-stats-left-attributes'>Followers</p></span>
                                        </div>
                                        <div>
                                            <p className="mobile-stats-right-attributes"> 0 </p>
                                        </div>
                                    </div>
                                    <div className="mobile-stats-flex">
                                        <div>
                                            <img src={Heart} className="mobile-left-image" alt=""></img>
                                            <span><p className='mobile-stats-left-attributes'>Favourite</p></span>
                                        </div>
                                        <div>
                                            <p className="mobile-stats-right-attributes"> 0 </p>
                                        </div>
                                    </div>
                                    <div className="mobile-stats-flex">
                                        <div>
                                            <img src={Followers} className="mobile-left-image" alt=""></img>
                                            <span><p className='mobile-stats-left-attributes'>Views</p></span>
                                        </div>
                                        <div>
                                            <p className="mobile-stats-right-attributes"> 0 </p>
                                        </div>
                                    </div>
                                    <p className="mobile-stats-footer">MEMBER SINCE: APRIL 26,2021</p>
                                    <Button variant = "contained" className = "mobile-upload-button">
                                        <div className = "upload-button-wrapper">
                                            <div>
                                                <img src = {PlusButton} alt = "upload-design-button" className = "mobile-upload-image"/>
                                            </div>
                                            <div>
                                                <span>Upload new design</span>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </TabPanel>
                            <TabPanel value = {value} index = {1}>
                                <div>
                                    <Designs mobile = {true}/>
                                </div>
                            </TabPanel>
                            <TabPanel value = {value} index = {2}>
                                <div>
                                    <Analytics mobile = {true}/>
                                </div>
                            </TabPanel>
                            <TabPanel value = {value} index = {3}>
                                <div>
                                    <UnderReview mobile = {true} />
                                </div>
                            </TabPanel>
                            <TabPanel value = {value} index = {4}>
                                <div>
                                    <DesignFAQ mobile = {true}/>
                                </div>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid> 
            </Container>
        </div>
    )
}


export default MobileDashboard;