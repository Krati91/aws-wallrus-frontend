import axios from "axios";

export const requestOtp = async (formData) => {
  let response;
  await axios
    .post("/api/verify-email-phone/", formData)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => console.log("OTP api issue", err));

  return response;
};
