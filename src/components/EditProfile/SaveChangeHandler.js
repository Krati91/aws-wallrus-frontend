import axios from "axios";

export const savePasswordChange = async (
  oldPassword,
  newPassword,
  newConfirmPassword
) => {
  const formData = new FormData();
  formData.append("password", oldPassword);
  formData.append("password1", newPassword);
  formData.append("password2", newConfirmPassword);
  await axios.get("/api/change-password", formData);
};
