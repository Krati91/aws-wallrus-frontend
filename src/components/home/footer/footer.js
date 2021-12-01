import "./footer.scss";
import Logo from "../../../images/logo.svg";
import Youtube from "../../../images/youtube.svg";
import Twitter from "../../../images/twitter.svg";
import Facebook from "../../../images/facebook-black.png";
import LinkedIn from "../../../images/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {


    return (
        <div className="footer-container">
            <div className="footer-section-1">
                <div className="logo-motto">
                    <img src={Logo} alt="logo" className="company-logo" />
                    <p className="motto">Motto line</p>
                </div>
                <div className="sharebuttons-social-media">
                    <img src={Youtube} alt="youtube" className="sharebutton-logo" />
                    <img src={Twitter} alt="twitter" className="sharebutton-logo" />
                    <img src={Facebook} alt="facebook" className="sharebutton-logo" />
                    <img src={LinkedIn} alt="linkedin" className="sharebutton-logo" />
                </div>
            </div>
            <hr className="footer-breakline" />
            <div className="footer-section-2">
                <div className="footer-nav-links">
                    <Link to="/shop" className="footer-nav-link">Shop</Link>
                    <Link to="/artist" className="footer-nav-link">Artist</Link>
                    <Link to="/discover" className="footer-nav-link">Discover</Link>
                    <Link to="/faq" className="footer-nav-link">FAQ</Link>
                </div>
                <div className="company-links">
                    <Link to="/" className="company-link">About The Wallrus Company</Link>
                    <Link to="/" className="company-link">Tour our facility</Link>
                    <Link to="/" className="company-link">Work with us</Link>
                </div>
            </div>
            <div className="footer-section-3">
                <div className="copyright">
                    <p>Copyright 2021 - The Wallrus Company</p>
                </div>
                <div className="terms-and-conditions">
                    <Link to="/" className="terms-and-conditions-link">Seller agreement</Link>
                    <Link to="/" className="terms-and-conditions-link">Return and exchange</Link>
                    <Link to="/" className="terms-and-conditions-link">Privacy policy</Link>
                    <Link to="/" className="terms-and-conditions-link">Contact us</Link>
                    <Link to="/" className="terms-and-conditions-link">Terms of use</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;

