import "./under-review.scss";
import Stars from "../../images/underReviewStars.svg";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import design from "../../images/design4.svg";
import { useEffect, useState } from "react";
import { getUnderReviews } from "../../apis/apiCalls";
import { color } from "@mui/system";

const useStyles = makeStyles({
  Grid: {
    flexGrow: 1,
  },
  mobileUnderReviewContainer: {
    display: "flex",
    justifyContent: "center",
  },

  mobileUnderReviewEmpty: {
    // display: "flex",
    // justifyContent: "center",
    position: "relative",
    left: "-25vw",
    height: "37vh",
  },
  mobileText: {
    whiteSpace: "nowrap",
  },
  mobileUnderReviewEmptyText: {
    fontWeight: "600",
    color: "#1B1918",
    position: "absolute",
    left: "0%",
    bottom: "15%",
    // left: "50%"
  },
  mobileUnderReviewEmptyImg: {
    position: "absolute",
    left: "0%",
    top: "0%",
    height: 200,
    width: 200,
  },
});

const underReviewCard = (props) => {
  const {image, application, name, color} = props;
  let generalString = [name];

  if (application) generalString.push(application);
  if (color) generalString.push(color);

  return (
    <Grid item xs={12} md={6} lg={4} xl={4}>
      <div className="under-review-card">
        <img
          className="under-review-image"
          src={props.image}
          alt="img"
        />
        <div className="under-review-labels">
          <h3 className="under-review-primary-text">
            {generalString.join(" . ")}
          </h3>
          <p className="under-review-secondary-text">
            Waiting for approval
          </p>
        </div>
      </div>
    </Grid>
  )
}
const UnderReview = (props) => {
  const { mobile } = props;
  const classes = useStyles();
  const [underReviews, setUnderReviews] = useState([]);
  const [loader, setloader] = useState([]);

  useEffect(() => {
    const init = async () => {
      setloader(true);
      try {
        const response = await getUnderReviews();
        setUnderReviews(response);
        setloader(false);
      } catch (err) {
        setloader(false);
      }
    };
    init();
  }, []);

  console.log(underReviews);

  return (
    <div className="under-review-main">
      {loader ? (
        <div style={{ margin: "30vh auto", textAlign: "center" }}>
          <CircularProgress size={80} style={{ color: "#000" }} />
        </div>
      ) : (
        <Grid container className={classes.Grid} spacing={6}>
          {underReviews.length <= 0 ? (
            <Grid
              item
              xs
              className={mobile ? classes.mobileUnderReviewContainer : ""}
            >
              <div
                className={
                  mobile ? classes.mobileUnderReviewEmpty : "under-review-empty"
                }
              >
                <div>
                  <img
                    src={Stars}
                    alt=""
                    className={mobile ? classes.mobileUnderReviewEmptyImg : ""}
                  />
                </div>
                <div className={mobile ? classes.mobileText : ""}>
                  <p
                    className={
                      mobile
                        ? classes.mobileUnderReviewEmptyText
                        : "under-review-empty-text"
                    }
                  >
                    No design under Review
                  </p>
                </div>
              </div>
            </Grid>
          ) : (
            underReviews.map((review) => {
              if (review.applications.length > 0) {
                review.applications.map(app => {
                  if (review.colorway_set.length > 0) {
                    review.colorway_set.map(colorway => {
                      if (colorway.color_tags.length > 0) {
                        colorway.color_tags.map(color => {
                          // returning color_tags
                          return <underReviewCard name={review.name} application={app.name} color={color.name} image={colorway.image_url} />
                        })
                      }
                      // returning colorway
                      return <underReviewCard name={review.name} application={app.name} image={colorway.image_url} />
                    })
                  }
                  // returning applications
                  return <underReviewCard name={review.name} application={app.name} />
                })
              }
              // returning reviews
              return <underReviewCard name={review.name} />
            })
          )}
        </Grid>
      )}
    </div>
  );
};

export default UnderReview;
