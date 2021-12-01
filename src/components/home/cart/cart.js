
import { useState } from 'react';
import Footer from '../footer/footer';
import MainNav from '../main-nav/main-nav';
import './cart.scss';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyCart from './mycart/mycart';
import ClientCart from './client-cart/client-cart';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Cart = (props) => {

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTabs = withStyles({
    indicator: {
      display: "flex",
      justifyContent: "start",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: 0,

        width: "0%",
        borderBottom: "1px solid #1B1918"
      },
    },
    root: {
      maxWidth: "100% !important",
    }

  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);



  return (

    <div>
      <MainNav />
      <div className="cart-container">
        <StyledTabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className="tab" label="My Cart (1)" {...a11yProps(0)} />
          <Tab className="tab" label="Client Cart" {...a11yProps(1)} />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <MyCart />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ClientCart />
        </TabPanel>
      </div>
      <Footer />
    </div>

  )
};

export default Cart;