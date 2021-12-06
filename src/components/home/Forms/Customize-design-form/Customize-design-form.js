import React from "react";
import MainNav from "../../main-nav/main-nav";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Grid,
  Button,
  TextField,
  createMuiTheme,
  ThemeProvider,
  Select,
  MenuItem,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./Customize-design-form.scss";
import filterArrow from "../../../../images/arrow-down.svg";
import alertCircle from "../../../../images/alert-circle.svg";
import galleryimg from "../../../../images/Image.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import validator from "validator";
import { customizeDesign } from "../formApiCalls";
import { getApplications, getProducts } from "../formApiCalls";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#000",
  },
  skeleton: {
    borderRadius: "12px 12px 0 0",
  },
}));

const CustomizeDesignForm = (props) => {
  const [appLoader, setAppLoader] = useState(true);
  const [prodLoader, setProdLoader] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [remark, setRemark] = useState("");
  const [application, setApplication] = useState();
  const [product, setProduct] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [unit, setUnit] = useState();
  const [uploadImages, setUploadImages] = useState([]);
  const [validate, setValidate] = useState({
    name: true,
    phone: true,
    images: true,
    remark: true,
  });

  // select list
  const [appList, setAppList] = useState([]);
  const [products, setProducts] = useState([]);
  const [widths, setWidths] = useState(["110", "210", "310", "410"]);
  const [heights, setHeights] = useState(["110", "210", "310", "410"]);
  const [units, setUnits] = useState(["CM", "M", "FT"]);
  const classes = useStyles();
  let upload;

  useEffect(() => {
    const init = async () => {
      try {
        const appsResponse = await getApplications();
        setAppList(appsResponse.data);
        setApplication(appsResponse.data[0].slug);
        const prodsResponse = await getProducts(appsResponse.data[0].slug);
        setProducts(prodsResponse.data);
        setProduct(prodsResponse.data[0].slug);
        setWidth(widths[0]);
        setHeight(heights[0]);
        setUnit(units[0]);
        setProdLoader(false);
        setAppLoader(false);
      } catch (err) {
        setProdLoader(false);
        setAppLoader(false);
        console.log(err);
        alert("Something went wrong!");
      }
    };
    init();
  }, []);

  console.log(appList, product);

  const reset = () => {
    setName("");
    setPhone("");
    setRemark("");
    setUploadImages([]);
  };

  const validation = () => {
    const isName = name.trim().length > 0;
    const isPhone = validator.isMobilePhone(phone);
    const isRemark = name.trim().length > 0;
    const areImages = uploadImages.length > 0;

    setValidate({
      name: isName,
      phone: isPhone,
      remark: isRemark,
      images: areImages,
    });

    return isName && isPhone && isRemark && areImages;
  };
  const onSubmitHandler = async () => {
    if (validation()) {
      setSubmitLoader(true);
      try {
        await customizeDesign({
          name,
          phone,
          remark,
          uploadImages,
          width,
          height,
          unit,
          application,
          product,
        });
        setSubmitLoader(false);
        alert("Design customized successfully");
        reset();
      } catch (err) {
        setSubmitLoader(false);
        console.log(err);
        alert("Couldn't customize design");
      }
    }
  };

  const onImageChange = (e) => {
    setUploadImages(e.target.files);
  };

  const goBack = () => {
    window.history.back();
  };
  const arrowClosed = (
    <img
      src={filterArrow}
      alt="arrow-closed"
      className="shop-filter-arrow-closed"
    />
  );
  const arrowOpen = (
    <img
      src={filterArrow}
      alt="arrow-open"
      className="shop-filter-arrow-open"
    />
  );

  const onApplicationChange = (e) => {
    setProdLoader(true);
    setApplication(e.target.value);
    getProducts(e.target.value).then((res) => {
      setProducts(res.data);
      setProdLoader(false);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <MainNav />(
        <>
          <Button
            onClick={goBack}
            className="back-button-custom-design"
            variant="outlined"
          >
            Back
          </Button>
          <div className="customize-design-form-container">
            <div className="form-name">
              <h2>Customize this design</h2>
            </div>

            <div>
              <TextField
                style={{ marginBottom: "30px" }}
                variant="outlined"
                InputLabelProps={{ classes: { root: classes.label } }}
                fullWidth
                label="Name"
                error={!validate.name}
                helperText={!validate.name ? "The Field is required" : null}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <TextField
                style={{ marginBottom: "20px" }}
                variant="outlined"
                InputLabelProps={{ classes: { root: classes.label } }}
                fullWidth
                type="number"
                label="Phone number"
                error={!validate.phone}
                helperText={!validate.phone ? "Invalid Phone Number" : null}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {appLoader ? (
                <Skeleton
                  animation="wave"
                  height={100}
                  className={classes.skeleton}
                />
              ) : (
                <div>
                  <p>Select applications</p>
                  <Select
                    fullWidth
                    value={application}
                    variant="outlined"
                    onChange={(e) => onApplicationChange(e)}
                  >
                    {appList.map((app) => (
                      <MenuItem value={app.slug}>{app.name}</MenuItem>
                    ))}
                  </Select>
                </div>
              )}
              {prodLoader ? (
                <Skeleton
                  animation="wave"
                  height={100}
                  className={classes.skeleton}
                />
              ) : (
                <div style={{ marginTop: "30px" }}>
                  <p>Select products</p>
                  <Select
                    fullWidth
                    value={product}
                    variant="outlined"
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    {products.map((app) => (
                      <MenuItem value={app.slug}>{app.design_name}</MenuItem>
                    ))}
                  </Select>
                </div>
              )}
              <div>
                <p>Dimensions</p>
                <div className="customize-design-dimensions-container">
                  <Dropdown
                    className="design-dimension-field"
                    arrowClosed={arrowClosed}
                    arrowOpen={arrowOpen}
                    options={widths}
                    placeholder="Select"
                    value={widths[0]}
                    onChange={(e) => setWidth(e.value)}
                  />
                  <Dropdown
                    className="design-dimension-field"
                    arrowClosed={arrowClosed}
                    arrowOpen={arrowOpen}
                    options={heights}
                    placeholder="Select"
                    value={heights[0]}
                    onChange={(e) => setHeight(e.value)}
                  />
                  <Dropdown
                    className="design-dimension-field"
                    arrowClosed={arrowClosed}
                    arrowOpen={arrowOpen}
                    options={units}
                    value={units[0]}
                    onChange={(e) => setUnit(e.value)}
                  />
                </div>
              </div>

              <TextField
                style={{ marginTop: "30px" }}
                variant="outlined"
                fullWidth
                multiline={true}
                rows={5}
                label="Remarks"
                onChange={(e) => setRemark(e.target.value)}
                error={!validate.remark}
                helperText={!validate.remark ? "This field is required" : null}
                value={remark}
              />
              <p>
                If you’ve a pictorial representation of the changes you require
                or have a reference image, please upload the image.
              </p>
              <div>
                <div className="drag-drop-designs-container">
                  <img
                    src={galleryimg}
                    style={{
                      width: "56px",
                      height: "56px",
                      marginTop: "10px",
                    }}
                    alt="img"
                  />
                  <p>
                    Drag and drop an image, or{" "}
                    {
                      <input
                        multiple
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => onImageChange(e)}
                        ref={(ref) => (upload = ref)}
                        accept="image/*"
                      />
                    }
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => upload.click()}
                    >
                      Browser
                    </span>
                  </p>
                  <span>Maximum 4 images can be uploaded</span>
                  <Grid
                    container
                    className="design-upload-container"
                    xs={8}
                    spacing={2}
                    justify="space-between"
                    alignItems="space-between"
                  >
                    <Grid item className="design-upload" xs={2}>
                      {uploadImages.length >= 1 && (
                        <img
                          src={URL.createObjectURL(uploadImages[0])}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="upload-img"
                        />
                      )}
                    </Grid>
                    <Grid item className="design-upload" xs={2}>
                      {uploadImages.length >= 2 && (
                        <img
                          src={URL.createObjectURL(uploadImages[1])}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="upload-img"
                        />
                      )}
                    </Grid>
                    <Grid item className="design-upload" xs={2}>
                      {uploadImages.length >= 3 && (
                        <img
                          src={URL.createObjectURL(uploadImages[2])}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="upload-img"
                        />
                      )}
                    </Grid>
                    <Grid item className="design-upload" xs={2}>
                      {uploadImages.length >= 4 && (
                        <img
                          src={URL.createObjectURL(uploadImages[3])}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="upload-img"
                        />
                      )}
                    </Grid>
                  </Grid>
                </div>
                {!validate.images && (
                  <Typography color="error">
                    Upload at least 1 design image.
                  </Typography>
                )}
              </div>
              <Button
                className="submit-custom-design-btn"
                variant="outlined"
                onClick={onSubmitHandler}
                disabled={submitLoader}
              >
                {submitLoader ? (
                  <CircularProgress size={30} style={{ color: "#fff" }} />
                ) : (
                  "Submit"
                )}
              </Button>
              <span className="helper-text-custom-design-form">
                {
                  <img
                    src={alertCircle}
                    className="alert-circle"
                    alt="alert-circle"
                  />
                }
                Wallrus Team will contact you for confirmation.
              </span>
            </div>
          </div>
        </>
      </div>
    </ThemeProvider>
  );
};

export default CustomizeDesignForm;
