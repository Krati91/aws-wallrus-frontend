import './mycart.scss';
import {React} from 'react';
import { Grid, Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import userimg from "../../../../images/model.svg";
import add from "../../../../images/add.svg";
import tick from "../../../../images/shipped-green-tick.svg";
import design1  from '../../../../images/design1.svg';
import design2  from '../../../../images/design2.svg';
import design3  from '../../../../images/design3.svg';
import design4  from '../../../../images/design4.svg';
import Product1 from "../../../../images/product1.jpg";
import Product2 from "../../../../images/product2.jpg";
import Product3 from "../../../../images/product3.jpg";
import Close from "../../../../images/close.png";
import Fade from '@material-ui/core/Fade';

import collectionImg from "../../../../images/Addfile.svg";
import Rating from "../../../../images/rating.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Arrow from "../../../../images/arrow-down.svg";
import Plus from "../../../../images/plus-btn.svg";
import Minus from "../../../../images/minus-btn.svg";
import Pencil from "../../../../images/edit-profile-icon.svg";
import Model from "../../../../images/model.svg";
import PlusWhite from "../../../../images/plus-white.svg";
import ProductCard from "../../product-cards";
import Design from "../../../../images/design1.svg";
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles(theme => ({
  label: {
      color: 'rgb(0, 0, 0)'
  }
}));

const InputTextField = withStyles({
  root: {
      '& input + fieldset': {
          borderWidth: 1,
          borderRadius: `12px 12px 12px 12px !important`,
      },
      '& input:focus + fieldset': {
          borderColor: 'black !important'
      },
      '& label.Mui-focused': {
          color: 'black',
      }
  },
})(TextField);

const MyCart = (props) =>{

  const classes = useStyles();



  const favourites =[
    {
      designName: "Art Decon1",
      applications: "Wallpaper",
      name: "Jassie Mario",
      image: design1,

  },
  {
      designName: "Art Decon2",
      applications: "Curtains",
      name: "Ronald Richards",
      image: design2,

  },
  {
      designName: "Art Decon3",
      applications: "Table cloth",
      name: "Leslie Alexander",
      image: design3,

  },
  {
      designName: "Art Decon4",
      applications: "Curtain blinds",
      name: "Savannah Nguyen",
      image: design4,

  },
  {
      designName: "Art Decon2",
      applications: "Curtains",
      name: "Ronald Richards",
      image: design2,

  },
  {
      designName: "Art Decon3",
      applications: "Table cloth",
      name: "Leslie Alexander",
      image: design3,

  },

  {
      designName: "Art Decon1",
      applications: "Wallpaper",
      name: "Jassie Mario",
      image: design1,

  },
  {
      designName: "Art Decon4",
      applications: "Curtain blinds",
      name: "Savannah Nguyen",
      image: design4,

  },
  ];

  const productImages = [
    {
        image: Product1
    },
    {
        image: Product2
    },
    {
        image: Product3
    }
]

const reviewsAndRatings = [
    {
        profilePic: Model,
        name: 'Savannah Nguyen',
        date: '23rd Jun 2021',
        rating: 4,
        review: 'Charming & Brightening. I LOVE this shower curtain in my daughters’ bathroom. It’s a cheerful and sweet addition to the room.'
    },
    {
        profilePic: Model,
        name: 'Dianne Russell',
        date: '15th Jun 2021',
        rating: 5,
        review: 'Charming & Brightening. I LOVE this shower curtain in my daughters’ bathroom. It’s a cheerful and sweet addition to the room.'
    },
    {
        profilePic: Model,
        name: 'Eleanor Pena',
        date: '28th May 2021',
        rating: 3,
        review: 'Charming & Brightening. I LOVE this shower curtain in my daughters’ bathroom. It’s a cheerful and sweet addition to the room.'
    }
]

const arrowClosed = (
    <img src={Arrow} alt="arrow-closed" className="arrow-closed" />
)
const arrowOpen = (
    <img src={Arrow} alt="arrow-open" className="arrow-open" />
)

const materialTypes = [
    'Paper Backed', 'Canvas Wallcovering'
];
const width = [
    '40', '50'
];
const height = [
    '60', '70'
];
const unit = [
    'CM', 'FT.'
];

const otherColorway = [{
    image: Design,
    name: 'Blue'
},
{
    image: Design,
    name: 'Red'
},
{
    image: Design,
    name: 'Orange'
},
{
    image: Design,
    name: 'Black'
},
];

const otherApplications = [{
    image: Design,
    name: 'Curtain'
},
{
    image: Design,
    name: 'Blinds'
},
{
    image: Design,
    name: 'Cover'
},
{
    image: Design,
    name: 'Wallpaper'
},
];
const moreByArtist = [{
    image: Design
},
{
    image: Design
},
{
    image: Design
},
{
    image: Design
},
{
    image: Design
},
{
    image: Design
},
{
    image: Design
},
{
    image: Design
},
];
const similarDesigns = [{
    image: Design,
    name: 'Leslie Alexander',
    profilePic: Model
},
{
    image: Design,
    name: 'Devon Lane',
    profilePic: Model
},
{
    image: Design,
    name: 'Karthryn Murphy',
    profilePic: Model
},
{
    image: Design,
    name: 'Leslie Alexander',
    profilePic: Model
},
{
    image: Design,
    name: 'Karthryn Murphy',
    profilePic: Model
},
{
    image: Design,
    name: 'Devon Lane',
    profilePic: Model
},
{
    image: Design,
    name: 'Karthryn Murphy',
    profilePic: Model
},
{
    image: Design,
    name: 'Devon Lane',
    profilePic: Model
}
];

const defaultMaterialType = materialTypes[0];
const defaultWidth = width[0];
const defaultHeight = height[0];
const defaultUnit = unit[0];
const history= useHistory()

const [quantity, setQuantity] = useState(1);

const handlePayment = (e) =>{
    history.push('/payment')
}

const handleMaterialType = (materialType) => {
    console.log(materialType.value)
}


const addItem = () => {
    setQuantity(quantity + 1);
}

const reduceItem = () => {
    setQuantity(quantity - 1);
}

  return (
    <div className="mycart">
      <Grid className="mycart-container" container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Grid className='my-cart-left-container-address'>
            <div className="address-header">
                <p>Deliver to:</p>
                <span><img src={add} /> Add new address</span> 
            </div>
            <div>
                <p>Flat 304, Om Pragan, Bada Bazzar, Kolkata, West Bengal - 733201</p>
            </div>
          </Grid>  
          {/* <Grid className="mycart-left-container-products" container>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <img style={{maxWidth:"200px", maxHeight:"200px", display:"flex", justifyContent:"center", alignItems:"center", margin:"10px auto"}} src={favourites[0].image}/>
            </Grid>
            <Grid lg={8} md={12} sm={12} xs={12}>
 

            <div className="mycart-details-container">
                <div className="mycart-name-container">
                    <div className="mycart_name">
                        <p>Art Decon . Green . Wallpaper</p>
                    </div>
                </div>
                <div className="my-cart-artist-name">
                    by Devon Lane
                </div>
                <div className="my-cart-rating-container">
                    <img src={Rating} alt="rating" /> <span className="product-rating"> 4.5 (12)</span>
                </div>
                <div className="my-cart-material-type-container">
                    <p>MATERIAL TYPE</p>
                    <Dropdown arrowClosed={arrowClosed} arrowOpen={arrowOpen} options={materialTypes} onChange={handleMaterialType} value={defaultMaterialType} placeholder="Select a material type" />
                </div>
                <Grid container spacing={1} className="my-cart-material-dimensions-container">
                    <Grid item xs={5} className="my-cart-material-width">
                        <p>WIDTH</p>
                        <Dropdown arrowClosed={arrowClosed} arrowOpen={arrowOpen} options={width} onChange={handleMaterialType} value={defaultWidth} />
                    </Grid>
                    <Grid item xs={5} className="my-cart-material-height">
                        <p>HEIGHT</p>
                        <Dropdown arrowClosed={arrowClosed} arrowOpen={arrowOpen} options={height} onChange={handleMaterialType} value={defaultHeight} />
                    </Grid>
                    <Grid item xs={12} className="my-cart-material-unit">
                        <p>UNIT</p>
                        <Dropdown arrowClosed={arrowClosed} arrowOpen={arrowOpen} options={unit} onChange={handleMaterialType} value={defaultUnit} />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className="my-cart-quantity-price-container">
                    <Grid item xs={6} className="my-cart-material-quantity-container">
                        <p>QUANTITY</p>
                        <div className="my-cart-material-quantity">
                            {
                                quantity <= 1 ? (
                                    <img src={Minus} alt="minus" className="add-item" />
                                )
                                    :
                                    (
                                        <img src={Minus} onClick={reduceItem} alt="minus" className="add-item" />
                                    )
                            }
                            {quantity}
                            <img src={Plus} onClick={addItem} alt="plus" className="reduce-item" />
                        </div>
                    </Grid>
                    <Grid item xs={6} className="my-cart-material-price-container">
                        <p>PRICE</p>
                        <span className="my-cart-material-price">&#8377; {900 * quantity} <span className="tax">inclusive all taxes</span></span>
                    </Grid>
                </Grid>
                <Grid item className="my-cart-delivery">
                    <img src={tick} />
                    <p>Delivery by <span>7 Jul 2021</span></p>
                </Grid>

              </div>

            </Grid>
          </Grid> */}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="mycart-left-container">
            <div className="mycart-coupon">
              <p>Coupon</p>
                <div className="mycart-coupon-content">
                  <InputTextField id="coupon" className="input" placeholder="Enter Coupon code" variant="outlined" fullWidth InputLabelProps={{
                    classes: {
                        root: classes.label,
                    }
                  }} />
                  <Button variant="outlined">Apply</Button>
                </div>

            </div>
            <div className="mycart-wallrus">
              <p>Use Wallrus coins</p>
              <FormControl component="fieldset" className="checkbox-container">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="coins"
                    control={<Checkbox color="black" />}
                    label={<span className='checkbox-coins'>You’ve 256 wallrus coins. </span>}
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div className="mycart-price-details">
              <p>Price Details (3)</p>
              <div className="mycart-price-details-content">
                  <div>
                    <p>Total MRP</p>
                    <p>Wallrus Coins</p>
                  </div>
                  <div>
                    <p>&#8377;2,777</p>
                    <p className="wallrus-coins-green">- &#8377;256</p>
                  </div>
              </div>
            </div>
            <div className="mycart-total">
              <div className="mycart-total-content">
                  <div>
                    <p>Total amount</p>
                  </div>
                  <div>
                    <p>&#8377;2,777</p>
                  </div>
              </div>
              <FormControl component="fieldset" className="checkbox-container">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="coins"
                    control={<Checkbox color="black" />}
                    label={<span className='checkbox-coins'>Request installation support. </span>}
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
              <Button onClick={handlePayment}>Place Order</Button>
            </div>
            <div className="mycart-purchasing-client">
              <p>Purchasing for client</p>
              <p className="sub">A link will be shared with client where he can make the payment and place order.</p>
              <Button variant='outlined'>Share with client</Button>
            </div>  
          </div>
        </Grid>
      </Grid>
      <h3 className="favourites-header">Add more from your favourites</h3>
      <Grid container spacing={2} justifyContent="flex-end" direction="row" style={{ marginTop: "2.6%", paddingLeft: "0px" }}>
        
      {
        favourites.map((curr,index)=>{
          return( 
            
            <ProductCard key={index}  id={index} image={curr.image} userimg={userimg} generaldata artistname={curr.name} />
            
            )
        })
      }
      </Grid>
    </div>
  )
};

export default MyCart;