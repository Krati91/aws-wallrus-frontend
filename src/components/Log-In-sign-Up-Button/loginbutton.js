import "./button.scss";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../../apis/AuthContext";
import { loginErrorActions } from "../../redux/Slices/loginErrorSlice/loginErrorSlice";

const LogInButton = (props) => {
  const [loading, isLoading] = useState(false);
  const history = useHistory();
  const { setIsAuth } = useContext(AuthContext);

  const validation = useSelector((state) => state.loginError);
  const dispatch = useDispatch();

  const validator = () => {
    const emailError = `${props.credentials.emailNumber}`.length > 0;
    const passwordError = `${props.credentials.password}`.length > 0;

    dispatch(loginErrorActions.setEmail(emailError));
    dispatch(loginErrorActions.setPassword(passwordError));

    return emailError && passwordError;
  };

  const handleLogIn = (e) => {
    const shouldLogin = validator();
    if (shouldLogin) {
      e.preventDefault();
      isLoading(true);
      const requestOptions = {
        client_id: `${process.env.REACT_APP_login_client_id}`,
        client_secret: `${process.env.REACT_APP_login_client_secret}`,
        grant_type: "password",
        username: `${props.credentials.emailNumber}`,
        password: `${props.credentials.password}`,
      };
      axios
        .post(`${process.env.REACT_APP_ROOT_URL}/auth/token`, requestOptions)
        .then((response) => response)
        .then((data) => {
          window.localStorage.setItem("Access_Key", data.data.access_token);
          window.localStorage.setItem("Expire_Time", data.data.expires_in);
          window.localStorage.setItem("Refresh_Key", data.data.refresh_token);

          axios
            .get(`${process.env.REACT_APP_ROOT_URL}/api/user-type/`, {
              headers: {
                Authorization: `Bearer ${data.data.access_token}`,
              },
            })
            .then((response) => response)
            .then((data) => {
              window.localStorage.setItem("User_Type", data.data.type);
              setIsAuth(true);
              history.push("/home");
            })
            .catch((error) => {
              alert(
                "Something went wrong in fetching user type, please login again"
              );
              isLoading(false);
            });
        })
        .catch((error) => {
          alert("Invalid Credentials!");
          isLoading(false);
        });
    }
  };

  return (
    <Button onClick={handleLogIn} variant="contained" className="LogIn-Btn">
      {!loading ? (
        <span>Log In</span>
      ) : (
        <CircularProgress size={30} className="button-loader" />
      )}
    </Button>
  );
};

export default LogInButton;
