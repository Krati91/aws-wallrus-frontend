import axios from "axios";

export const uploadDesign = async ({
  name,
  phoneNumber,
  application,
  product,
  width,
  height,
  unit,
  link,
  price,
  remark,
}) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone_number", phoneNumber);
  formData.append("application", application);
  formData.append("product", product);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("unit", unit);
  formData.append("link", link);
  formData.append("price", price);
  formData.append("remarks", remark);

  await axios.post("/api/upload-own-design", formData);
};

export const customizeDesign = async ({
  name,
  phone,
  application,
  product,
  width,
  height,
  remark,
  unit,
  uploadImages,
}) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone_number", phone);
  formData.append("application", application);
  formData.append("product", product);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("remarks", remark);
  formData.append("unit", unit);
  formData.append("image1", uploadImages[0]);
  if (uploadImages[1]) formData.append("image2", uploadImages[1]);
  if (uploadImages[2]) formData.append("image3", uploadImages[2]);
  if (uploadImages[3]) formData.append("image4", uploadImages[3]);

  await axios.post("/api/customize-design", formData);
};

export const requestMeasurement = async ({
  name,
  line1,
  line2,
  state,
  city,
  pincode,
  smartDate,
  timeFrame,
  remark,
  siteImages,
}) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("line1", line1);
  formData.append("line2", line2);
  formData.append("state", state);
  formData.append("city", city);
  formData.append("pincode", pincode);
  formData.append("date", smartDate);
  formData.append("timeframe_of_measurement", timeFrame);
  formData.append("remarks", remark);
  formData.append("site_image1", siteImages[0]);
  if (siteImages[1]) formData.append("site_image2", siteImages[1]);
  if (siteImages[2]) formData.append("site_image3", siteImages[2]);
  if (siteImages[3]) formData.append("site_image4", siteImages[3]);
  await axios.post("/api/request-measurement", formData);
};

export const getApplications = async () => {
  return await axios.get("/api/app-list");
};

export const getProducts = async (application) => {
  return await axios.get(`/api/product-list/${application}`);
};
