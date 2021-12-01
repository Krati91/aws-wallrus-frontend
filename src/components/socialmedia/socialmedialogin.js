import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../apis/AuthContext';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { googleLogin, facebookLogin } from '../../apis/socialLoginCall';
import './socialmedialogin.scss';


const SocialMediaLogIn = (props) => {

  const { setIsAuth } = useContext(AuthContext);
  const history = useHistory();

  const responseGoogleError = (err) => {
    console.log(err);
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
                <img src={google} alt="google" className="googleImg" /><span className='span-left'>Log in with Google</span>
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
                <img src={facebook} alt="facebook" className="facebookImg" /><span className='span-left'>Log in with Facebook</span>
              </Button>
            )}
          />
          {/* <Button variant="contained" className="facebookBtn">
            <img src={facebook} alt="facebook" className="facebookImg" /><span className='span-left'>Log in with Facebook</span>
          </Button> */}
        </Grid>
      </Grid>
      <div className="orContainer">
        <p className="or"><span>OR</span></p>
      </div>
    </>
  )
}

export default SocialMediaLogIn;