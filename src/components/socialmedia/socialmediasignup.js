import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import './socialmediasignup.scss';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';
import {
  setGoogleEmail,
  setGoogleFullName,
} from '../../redux/Slices/userSignUpSlice/userSignUpSlice';


const SocialMediaSignUp = (props) => {

  const dispatch = useDispatch();

  const fbResponse = (user) => {
    console.log(user)
  }

  const responseGoogle = (response) => {
    // console.log('GOOGLE', response);
    googleLogin(response.accessToken)
      .then((res) => {
        if (res) {
          setIsAuth(true);
          history.push('/home');
        } else {
          alert('Error Logging In');
        }
      })
  }

  // const responseGoogle = (response) => {

  //   dispatch(
  //     setGoogleEmail({
  //       email_aboutyou: response.profileObj.email
  //     }
  //     )
  //   )
  //   dispatch(
  //     setGoogleFullName(
  //       {
  //         fullName: response.profileObj.name
  //       }
  //     )
  //   )
  // }

  const responseGoogleError = (err) => {
    console.log(err);
  }

  const responseFacebook = (response) => {
    // console.log("FACEBOOK", response);
    facebookLogin(response.accessToken)
      .then((res) => {
        if (res) {
          setIsAuth(true);
          history.push('/home');
        } else {
          alert('Error Logging In');
        }
      })
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogleError}
            render={renderProps => (
              <Button onClick={renderProps.onClick} variant="contained" className="googleBtn" >
                <img src={google} alt="google" className="googleImg" /><span className='span-left'>Signup with Google</span>
              </Button>
            )}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
            fields="name,email,picture"
            callback={responseFacebook}
            render={renderProps => (
              <Button onClick={renderProps.onClick} variant="contained" className="facebookBtn">
                <img src={facebook} alt="facebook" className="facebookImg" /><span className='span-left'>Signup with Facebook</span>
              </Button>
            )}
          />
        </Grid>
      </Grid>
      <div className="orContainer">
        <p className="or"><span>OR</span></p>
      </div>
    </>
  )
}

export default SocialMediaSignUp;