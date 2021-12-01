import axios from 'axios';

const RefreshToken = async (refreshToken) => {
    const requestOptions = { client_id: `${process.env.REACT_APP_login_client_id}`, client_secret: `${process.env.REACT_APP_login_client_secret}`, grant_type: 'refresh_token', refresh_token: `${refreshToken}` };
    let token;
    await axios.post(`${process.env.REACT_APP_ROOT_URL}/auth/token`, requestOptions)
        .then(response => response)
        .then((data) => {
            token = data;
        })
        .catch((err) => {
            alert('Error in fetching data, please log in again.');
            window.localStorage.clear();
            window.location.reload();
        })
    return token;
}

export default RefreshToken;