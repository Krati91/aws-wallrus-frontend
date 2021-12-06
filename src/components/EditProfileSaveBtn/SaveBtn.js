import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Button, CircularProgress } from "@material-ui/core"
import "./SaveBtn.scss"
import { Check } from "@material-ui/icons"
import { selectPurchaseFrequency, selectFollowersFrequency, selectFavouriteFrequency, selectDesignView, selectPaymentsFrequency } from "../../redux/Slices/NotificationSettingSlice/NotificationSettingSlice"
import { NotificationsettingsPut } from "../../apis/apiCalls";
import { changePasswordPut } from "../../apis/apiCalls";
import { PutEdit } from '../../apis/apiCalls';
import {
    selectProfilePic,
    selectFullName,
    selectUserName,
    selectPhoneNumber_AboutYou,
    selectAddress_Street_AboutYou,
    selectAddress_Apartment_AboutYou,
    selectState_AboutYou,
    selectCity_AboutYou,
    selectPincode_AboutYou,
    selectBio,
    selectOrganization,
    selectPan,
    selectGst,
    selectEmail_Business,
    selectPhoneNumber_Business,
    selectAddress_Street_Business,
    selectAddress_Apartment_Business,
    selectState_Business,
    selectCity_Business,
    selectPincode,
    selectAccountNumber,
    selectIFSCCode,
    selectBankName,
    selectBankBranch,
    selectSwiftCode,
} from '../../redux/Slices/userSignUpSlice/userSignUpSlice';

import {
    selectOldPassword,
    selectNewPassword,
    selectConfirmNewPassword
} from "../../redux/Slices/changePasswordSlice/changePasswordSlice";



const CustomButton = (props) => {

    let formDataNotifications = new FormData();
    const { currentTab, editProfileValidity, changePassValidity, notificationValidity } = props
    const purchaseFrequency = useSelector(selectPurchaseFrequency)
    const followerFrequency = useSelector(selectFollowersFrequency)
    const designViewFrequency = useSelector(selectDesignView)
    const favouriteFrequency = useSelector(selectFavouriteFrequency)
    const paymentFrequency = useSelector(selectPaymentsFrequency)
    const accessToken = localStorage.getItem("Access_Key");
    const refreshToken = localStorage.getItem("Refresh_Key");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    let formDataEditProfile = new FormData();
    const profilePic = useSelector(selectProfilePic);
    const fullName = useSelector(selectFullName);
    const userName = useSelector(selectUserName);
    const phoneNumber = useSelector(selectPhoneNumber_AboutYou);
    const addressStreetAboutyou = useSelector(selectAddress_Street_AboutYou);
    const addressApartmentAboutyou = useSelector(selectAddress_Apartment_AboutYou);
    const stateAboutyou = useSelector(selectState_AboutYou);
    const addressCityAboutyou = useSelector(selectCity_AboutYou);
    const addressPincodeAboutyou = useSelector(selectPincode_AboutYou);
    const bio = useSelector(selectBio);
    const organization = useSelector(selectOrganization);
    const pan = useSelector(selectPan);
    const gst = useSelector(selectGst);
    const emailBusiness = useSelector(selectEmail_Business);
    const phoneNumberBusiness = useSelector(selectPhoneNumber_Business);
    const addressStreetBusiness = useSelector(selectAddress_Street_Business);
    const addressApartmentBusiness = useSelector(selectAddress_Apartment_Business);
    const stateBusiness = useSelector(selectState_Business);
    const cityBusiness = useSelector(selectCity_Business);
    const pincodeBusiness = useSelector(selectPincode);
    const accountNumber = useSelector(selectAccountNumber);
    const ifscCode = useSelector(selectIFSCCode);
    const bankName = useSelector(selectBankName);
    const bankBranch = useSelector(selectBankBranch);
    const swiftCode = useSelector(selectSwiftCode);

    let ProfilePicture
    if (typeof (profilePic) === 'string') {
        ProfilePicture = ''
    }
    else {
        ProfilePicture = profilePic
    }


    const changedValuesEditProfile = {
        profilePic: ProfilePicture,
        fullName,
        userName,
        phoneNumber,
        addressStreetAboutyou,
        addressApartmentAboutyou,
        stateAboutyou,
        addressCityAboutyou,
        addressPincodeAboutyou,
        bio,
        organization,
        pan,
        gst,
        emailBusiness,
        phoneNumberBusiness,
        addressStreetBusiness,
        addressApartmentBusiness,
        stateBusiness,
        cityBusiness,
        pincodeBusiness,
        accountNumber,
        ifscCode,
        bankName,
        bankBranch,
        swiftCode
    }



    useEffect(() => {

        setSuccess(false)
        setLoading(false)

    }, [currentTab])




    const changedValuesNotification =
    {
        design_purchase_frequency: purchaseFrequency, follower_frequency: followerFrequency, design_view_frequency: designViewFrequency, design_favorite_frequency: favouriteFrequency, payment_frequency: paymentFrequency
    }


    //formData for notifications
    for (var key in changedValuesNotification) {
        formDataNotifications.append(key, changedValuesNotification[key]);
    }

    //formData for editprofile
    for (var key in changedValuesEditProfile) {
        formDataEditProfile.append(key, changedValuesEditProfile[key]);
    }


    // formData for changePassword
    const oldPasswordValue = useSelector(selectOldPassword);
    const newPasswordValue = useSelector(selectNewPassword);
    const confirmPasswordValue = useSelector(selectConfirmNewPassword);


    let formDataPassword = new FormData();

    const changedPassword =
    {
        password: oldPasswordValue, password1: newPasswordValue, password2: confirmPasswordValue
    }

    for (var key in changedPassword) {
        formDataPassword.append(key, changedPassword[key]);
    }



    const handleSubmit = () => {

        if (currentTab === 0) {
            setLoading(true)
            PutEdit(accessToken, refreshToken, formDataEditProfile)
                .then((res) => {
                    setLoading(false)
                    setSuccess(true)
                    alert("Profile updated successfully");
                })
                .catch((err) => {
                    setLoading(false)
                    setSuccess('')
                })
        }
        if (currentTab === 1) {
            setLoading(true)

            changePasswordPut(accessToken, refreshToken, formDataPassword)
                .then((res) => {
                    setLoading(false)
                    setSuccess(true)
                    alert("Password updated successfully");
                })
                .catch((err) => {
                    setLoading(false)
                    setSuccess('')
                })
        }
        if (currentTab === 2) {
            setLoading(true)
            NotificationsettingsPut(accessToken, refreshToken, formDataNotifications)
                .then((res) => {
                    setLoading(false)
                    setSuccess(true)
                    alert("Notification settings updated successfully");
                })
                .catch((err) => {
                    setLoading(false)
                    setSuccess('')
                })
        }
    }
    return (
        <Button onClick={handleSubmit} variant="contained" className={(currentTab === 0 && editProfileValidity) ? 'save-button-disabled' : (currentTab === 1 && changePassValidity) ? 'save-button-disabled' : 'save-button'} disableElevation >
            {loading ? <CircularProgress size={25} className="button-loader" /> : success ? props.children : props.children}
        </Button>
    )
}


export default CustomButton