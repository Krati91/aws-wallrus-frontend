import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import "./user-orders.scss";
import { Grid } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import { getDecoratorOrders } from '../../../../../apis/apiCalls';
import Design1 from "../../../../../images/design1.svg";
import Design2 from "../../../../../images/design2.svg";
import Tick from "../../../../../images/shipped-green-tick.svg";
import ArrowRight from "../../../../../images/arrow-right2.svg";
import { Button } from "@material-ui/core";
import Popper from '@material-ui/core/Popper';
import DotMenu from "../../../../../images/dot-menu.svg";


const UserOrders = (props) => {

  const history = useHistory();
  const [loader, setloader] = useState(true);
  const [orders, setorders] = useState([
    // {
    //   productName: 'Art Decon . Green . Wallpaper',
    //   artistName: 'Devon Lane',
    //   materialType: 'Canvas Wallcovering',
    //   dimensions: '100 x 120 CM',
    //   Quantity: 2,
    //   price: 1800,
    //   orderStatus: 'Pre-order',
    //   design: Design1
    // },
  ]);

  // const orders = [
  //   {
  //     productName: 'Art Decon . Green . Wallpaper',
  //     artistName: 'Devon Lane',
  //     materialType: 'Canvas Wallcovering',
  //     dimensions: '100 x 120 CM',
  //     Quantity: 2,
  //     price: 1800,
  //     orderStatus: 'Pre-order',
  //     design: Design1
  //   },
  //   {
  //     productName: 'Art Decon . Green . Wallpaper',
  //     artistName: 'Leslie Alexander',
  //     materialType: 'Paper Backed',
  //     dimensions: '200 x 150 CM',
  //     Quantity: 1,
  //     price: 500,
  //     orderStatus: 'Order delivered',
  //     design: Design2
  //   },
  //   {
  //     productName: 'Art Decon . Green . Wallpaper',
  //     artistName: 'Kathryn Murphy',
  //     materialType: 'Canvas Wallcovering',
  //     dimensions: '1 x 1 FT',
  //     Quantity: 3,
  //     price: 3000,
  //     orderStatus: 'Shipped',
  //     deliveryDate: '20 Aug 2021',
  //     design: Design1
  //   },
  //   {
  //     productName: 'Art Decon . Green . Wallpaper',
  //     artistName: 'Steve Smith',
  //     materialType: 'Paper Backed',
  //     dimensions: '2 x 2 FT',
  //     Quantity: 1,
  //     price: 1200,
  //     orderStatus: 'Shipped',
  //     deliveryDate: '15 Aug 2021',
  //     design: Design2
  //   }
  // ]

  const useStyles = makeStyles((theme) => ({
    paper: {
      borderRadius: '12px',
      padding: '14px 30px',
      marginRight: '40px',
      marginTop: '10px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: ' 0px 0px 2px rgba(147, 156, 163, 0.36), 0px 8px 12px rgba(147, 156, 163, 0.12)'
    },
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    getDecoratorOrders()
      .then((res) => {
        let list = [];
        res.forEach((value) => {
          if (value.items && value.items.length !== 0) {
            value.items.forEach((item) => {
              const orderList = {
                productName: item.name,
                artistName: item.artist,
                materialType: '',
                dimensions: `${item.width} x ${item.height} CM`,
                Quantity: item.quantity,
                price: item.cost,
                orderStatus: value.order_status,
                deliveryDate: '15 Aug 2021',
                design: item.image ? item.image : Design1,
              }
              list.push(orderList);
            })
          }
        })
        setloader(false);
        setorders(list);
      })
  }, []);

  const handleCancelOrderMenu = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const trackOrder = () => {
    history.push('/orderstatus');
  }

  return (
    <div className="user-orders-container">
      <Grid direction="column" container spacing={1}>
        {
          loader
            ? (
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <CircularProgress size={50} style={{ color: '#000', margin: '40px 0 60px' }} />
              </div>
            ) : (
              orders && orders.length === 0
                ? (
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    No data to show
                  </div>
                ) : (
                  orders.map((current, index) => (
                    <Grid xs={12} className="user-order-item-container">
                      {
                        (current.orderStatus === "pending") && (
                          <>
                            <img className="mobile-dot-menu-icon" aria-describedby={id} src={DotMenu} alt="dot-menu" onClick={handleCancelOrderMenu} />
                            <Popper id={id} open={open} anchorEl={anchorEl}>
                              <div style={{ cursor: 'pointer' }} className={classes.paper}>Cancel order</div>
                            </Popper>
                          </>
                        )
                      }
                      <Grid direction="row" container spacing={1}>
                        <Grid xs={9}>
                          <div className="user-order-product-container">
                            <div className="user-order-product-image">
                              <img src={current.design} alt="product" />
                            </div>
                            <div className="user-order-product-details">
                              {
                                current.orderStatus === "pending" ?
                                  (<div className="user-order-product-status pre-order">
                                    <span>Pre-order</span>
                                    {/* <span>{current.orderStatus.charAt(0).toUpperCase() + current.orderStatus.slice(1)}</span> */}
                                  </div>)
                                  :
                                  current.orderStatus === "delivered" ?
                                    (<div className="user-order-product-status order-delivered">
                                      <span>Order Delivered</span>
                                      {/* <span>{current.orderStatus.charAt(0).toUpperCase() + current.orderStatus.slice(1)}</span> */}
                                    </div>)
                                    :
                                    ( // For Confirmed Orders
                                      <div className="user-order-product-status-deliveryDate-container">
                                        <div className="user-order-product-status shipped">
                                          <span>{current.orderStatus.charAt(0).toUpperCase() + current.orderStatus.slice(1).toLowerCase()}</span>
                                        </div>
                                        <div className="delivery-date-container">
                                          <img src={Tick} alt="tick" className="green-tick" />
                                          <span className="delivery-date-1">Delivery by: &nbsp;<span className="delivery-date-2">{current.deliveryDate}</span></span>
                                        </div>
                                      </div>
                                    )
                              }
                              <div className="user-order-product-name">
                                {current.productName}
                              </div>
                              <div className="user-order-product-artist-name">
                                by {current.artistName}
                              </div>
                              <div className="user-order-product-specifications">
                                <div className="user-order-product-specifications-title specifications-1">
                                  <h4>MATERIAL TYPE</h4>
                                  <span>{current.materialType}</span>
                                </div>
                                <div className="user-order-product-specifications-title specifications-2">
                                  <h4>DIMENSIONS</h4>
                                  <span>{current.dimensions}</span>
                                </div>
                                <div className="user-order-product-specifications-title specifications-3">
                                  <h4>QUANTITY</h4>
                                  <span>{current.Quantity}</span>
                                </div>
                                <div className="user-order-product-specifications-title specifications-4">
                                  <h4>PRICE</h4>
                                  <span>&#x20B9; {current.price}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Grid>
                        <Grid xs={3}>
                          <div className="user-order-product-options">
                            {
                              (current.orderStatus === "pending") ?
                                (
                                  <>
                                    <img className="dot-menu-icon" style={{ cursor: 'pointer', position: 'absolute' }} aria-describedby={id} src={DotMenu} alt="dot-menu" onClick={handleCancelOrderMenu} />
                                    <Popper id={id} open={open} anchorEl={anchorEl}>
                                      <div style={{ cursor: 'pointer' }} className={classes.paper}>Cancel order</div>
                                    </Popper>
                                    <Button variant="contained" className="confirmOrderBtn">
                                      Confirm order
                            </Button>
                                  </>
                                )
                                :
                                (current.orderStatus === "delivered") ?
                                  (
                                    <Button variant="contained" className="rateAndReviewProductBtn">
                                      Rate &amp; Review Product
                                    </Button>
                                  ) :
                                  (
                                    <span className="track-order" onClick={trackOrder}>Track order<img src={ArrowRight} alt="arror-right" className="track-order-icon"></img></span>
                                  )
                            }
                          </div>
                        </Grid>
                      </Grid>

                      <div className="mobile-user-order-product-specifications">
                        <div>
                          <div className="user-order-product-specifications-title specifications-1">
                            <h4>MATERIAL TYPE</h4>
                            <span>{current.materialType}</span>
                          </div>
                          <div className="user-order-product-specifications-title specifications-3">
                            <h4>QUANTITY</h4>
                            <span>{current.Quantity}</span>
                          </div>
                        </div>
                        <div>
                          <div className="user-order-product-specifications-title specifications-2">
                            <h4>DIMENSIONS</h4>
                            <span>{current.dimensions}</span>
                          </div>
                          <div className="user-order-product-specifications-title specifications-4">
                            <h4>PRICE</h4>
                            <span>{current.price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mobile-user-order-product-options">
                        {
                          (current.orderStatus === "pending") ?
                            (
                              <>
                                <Button className="mobileConfirmOrderBtn">
                                  Confirm order
                        </Button>
                              </>
                            )
                            :
                            (current.orderStatus === "delivered") ?
                              (
                                <Button className="mobileRateAndReviewProductBtn">
                                  Rate &amp; Review Product
                                </Button>
                              ) :
                              (
                                <Button className="mobileTrackOrderBtn" onClick={trackOrder}>Track order<img src={ArrowRight} alt="arror-right" className="track-order-icon"></img></Button>
                              )
                        }
                      </div>

                      {
                        (index !== orders.length - 1) && <hr className="user-orders-breakline" />
                      }
                    </Grid>
                  ))
                )
            )
        }
      </Grid>
    </div>
  )
}

export default UserOrders;