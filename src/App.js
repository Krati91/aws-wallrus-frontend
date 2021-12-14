import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./apis/AuthContext";
import Hidden from "@material-ui/core/Hidden";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Confirmation from "./components/confirmation/confirmation";
import PhoneNumberVerification from "./components/verification/phone-number";
import EmailVerification from "./components/verification/email";
import Dashboard from "./components/dashboard/dashboard";
import Editprofile from "./components/EditProfile/EditProfile";
import UploadDesign from "./components/upload-design/upload-design";
import CustomizeDesignForm from "./components/home/Forms/Customize-design-form/Customize-design-form";
import EditDesign from "./components/edit-design/edit-design";
import UploadDesignForm from "./components/home/Forms/Upload-design-form/upload-design-form";
import "./App.scss";
import MobileDashboard from "./components/dashboard/MobileDashboard";
import LandingPage from "./components/home/landing-page/landing-page";
import ArtistList from "./components/home/artist/artistList";
import ViewArtist from "./components/home/artist/viewArtist";
import HomeDiscover from "./components/home/home-discover/home-discover";
import HomeFAQ from "./components/home/home-faq/home-faq";
import Shop from "./components/home/Shop/Shop";
import Product from "./components/home/Shop/product/product";
import UserProfile from "./components/home/userprofile/userprofile";
import Collection from "./components/home/userprofile/user-profile-tabs-components/user-collections/collection/collection";
import OrderStatus from "./components/home/order-status/order-status";
import Cart from "./components/home/cart/cart";
import Payment from "./components/home/payment/payment";
import RequestForm from "./components/home/Forms/Request-Management-Form/request-form";
import AboutUs from "./components/home/landing-page/about-us/about-us";
import DesignToSell from "./components/home/landing-page/design-to-sell/design-to-sell";
import ForgotPassword from "./components/forgot-password/forgot-password";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isArtist, setIsArtist] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("Access_Key")) {
      setIsAuth(true);
      if (window.localStorage.getItem("User_Type") === "Artist") {
        setIsArtist(true);
      }
    }
  }, []);

  let routes;

  axios.defaults.baseURL = `${process.env.REACT_APP_ROOT_URL}`;

  if (isAuth) {
    const token = window.localStorage.getItem("Access_Key");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    routes = (
      <>
        <Route exact path="/home">
          <Shop />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/uploaddesignform">
          <UploadDesignForm />
        </Route>
        <Route exact path="/shop/:id">
          <Product />
        </Route>
        <Route exact path="/shop/:id/:customizedesign">
          <CustomizeDesignForm />
        </Route>
        <Route exact path="/collection/:id">
          <Collection />
        </Route>
        <Route exact path="/requestForm">
          <RequestForm />
        </Route>
        <Route exact path="/orderstatus">
          <OrderStatus />
        </Route>
        <Route exact path="/userprofile">
          <UserProfile />
        </Route>
        <Route exact path="/artist">
          <ArtistList />
        </Route>
        <Route exact path="/artist/:name">
          <ViewArtist />
        </Route>
        <Route exact path="/discover">
          <HomeDiscover />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/faq">
          <HomeFAQ />
        </Route>
        <Route exact path="/dashboard">
          <Hidden only={["xs", "sm"]}>
            <Dashboard />
          </Hidden>
          <Hidden mdUp>
            <MobileDashboard />
          </Hidden>
        </Route>
        <Route exact path="/editprofile">
          <Editprofile />
        </Route>
        <Route exact path="/upload-design">
          <UploadDesign />
        </Route>
        <Route exact path="/edit-design">
          <EditDesign />
        </Route>
        {isArtist ? (
          <Redirect to="/dashboard" />
        ) : (
            <Redirect to="/home" />
          )}
      </>
    );
  } else {
    routes = (
      <>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/verifyPhone">
          <PhoneNumberVerification />
        </Route>
        <Route exact path="/verifyEmail">
          <EmailVerification />
        </Route>
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/design-to-sell" component={DesignToSell} />
        <Route exact path="/forgot-password/:email" component={ForgotPassword} />
        {/* <Redirect to="/" /> */}
      </>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isArtist, setIsArtist }}>
      <div className="App">
        <Router>
          <Switch>{routes}</Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
