import React, { useState } from "react"
import Logo from '../../images/logo.svg';
import Notification from '../../images/Notification.svg';
import Model from '../../images/model.svg';
import "./Nav-Header.scss"
import { Link } from "react-router-dom"
import Notifications from "../Notifications/Notification";
import UserSettings from '../user-settings/user-settings';

const Navheader = (props) => {
    const { mobile, className, mobileImg } = props
    const [notificationList, setNotificationList] = useState(false);

    return (
        <div className={className ? className : "nav"}>
            <div className="nav-logo">
                <Link to="/dashboard">
                    <img src={Logo} alt="logo" className={mobileImg ? mobileImg : 'logo'} />
                </Link>
            </div>
            {
                mobile ? (
                    <>
                        <div className="mobile-nav-right-side">
                            <Notifications mobile={mobile} />
                            <img src={Model} alt="model" className='model' />
                        </div>

                    </>
                ) :
                    <div className="nav-right-side">
                        <div className="nav-right-content">
                            <Notifications />
                            {/* <img src={Notification} alt="notification" className='notification' /> */}
                            {/* {notificationList ? <Notifications/> : null} */}
                            <UserSettings />
                        </div>
                    </div>
            }
        </div>
    )

}


export default Navheader