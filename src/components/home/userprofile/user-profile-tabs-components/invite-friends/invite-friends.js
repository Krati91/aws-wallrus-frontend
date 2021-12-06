import "./invite-friends.scss";
import BgImage from "../../../../../images/invite-friends-image.svg";
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import CopyToClipboard from '../../../../../images/copy-to-clipboard.svg';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from "react";
import Whatsapp from "../../../../../images/whatsapp-sharing.svg";
import Telegram from "../../../../../images/telegram-sharing.svg";
import Email from "../../../../../images/email-sharing.svg";

const useStyles = makeStyles(theme => ({
    label: {
        color: 'rgb(0, 0, 0)'
    }
}));

const InputTextField = withStyles({
    root: {
        '& input + fieldset': {
            borderWidth: 1,
            borderRadius: `12px 12px 0 0 !important`
        },
        '& input:focus + fieldset': {
            borderColor: 'black !important'
        },
        '& label.Mui-focused': {
            color: 'black',
        }
    },
})(TextField);


const InviteFriends = (props) => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);


    const copyLink = () => {
        navigator.clipboard.writeText('https://skl.sh/2V4WTd1');
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="invite-friends-main-container">
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Copied to Clipboard"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <div className="invite-friends-container">
                <img src={BgImage} alt="image" className="invite-friends-bgimage" />
                <div className="invite-friends-contents">
                    <h4 className="invite-friends-title">Invite friends and earn 2500 coins</h4>
                    <span className="invite-friends-subtitle">Share you invite link with friends. When they join The Wallrus Company,<br></br> you’ll get 2500 coins.</span>
                    <div className="sharing-link">
                        <img onClick={copyLink} style={{ cursor: 'pointer', zIndex: '2', position: 'absolute', right: '15px', top: '15px', height: '23px', width: '23px' }} src={CopyToClipboard} alt="copy-to-clipboard" />
                        <InputTextField id="sharing-link" value="https://skl.sh/2V4WTd1" variant="outlined" fullWidth InputLabelProps={{
                            classes: {
                                root: classes.label,
                            }
                        }} />
                        <div className="sharing-link-message">
                            <span>Copy this link and share with your friends</span>
                        </div>
                        <div className="sharing-method-division-container">
                            <p className="sharing-method-division"><span>OR</span></p>
                        </div>
                        <div className="sharing-other-methods">
                            <div className="sharing-whatsapp">
                                <img src={Whatsapp} alt="whatsapp" />
                                <span>Whatsapp</span>
                            </div>
                            <div className="sharing-telegram">
                                <img src={Telegram} alt="whatsapp" />
                                <span>Telegram</span>
                            </div>
                            <div className="sharing-email">
                                <img src={Email} alt="whatsapp" />
                                <span>Email</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InviteFriends;