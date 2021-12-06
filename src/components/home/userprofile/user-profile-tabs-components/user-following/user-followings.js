import { useEffect, useState } from "react"
import "./user-following.scss"
import { Grid, Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import { getDecoratorFollowing } from '../../../../../apis/apiCalls';
import ProductCard from "../../../product-cards"
import design1 from "../../../../../images/design1.svg"
import design2 from "../../../../../images/design2.svg"
import design3 from "../../../../../images/design3.svg"
// import userimg1 from "../../../../../images/Ellipse68.svg"
// import userimg2 from "../../../../../images/Ellipse69.svg"
// import userimg3 from "../../../../../images/Ellipse70.svg"
// import userimg4 from "../../../../../images/Ellipse71.svg"

const UserFollowing = (props) => {

  const [loader, setloader] = useState(true);
  const [followingArtists, setfollowingArtists] = useState([])

  // const followingArtists = [
  //   {
  //     name: "Jacob Jones",
  //     artistimg: userimg1,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Jane Cooper",
  //     artistimg: userimg2,
  //     data: [design2, design3, design1],
  //   },
  //   {
  //     name: "Darlene Robertson",
  //     artistimg: userimg3,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Marvin McKinney",
  //     artistimg: userimg4,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Jacob Jones",
  //     artistimg: userimg1,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Jane Cooper",
  //     artistimg: userimg2,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Darlene Robertson",
  //     artistimg: userimg3,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Marvin McKinney",
  //     artistimg: userimg4,
  //     data: [design1, design2, design3],
  //   },
  //   {
  //     name: "Jane Cooper",
  //     artistimg: userimg2,
  //     data: [design1, design2, design3],
  //   },

  // ]


  useEffect(() => {
    getDecoratorFollowing()
      .then((res) => {
        let list = [];
        res.forEach((value) => {
          if (value.status) {
            const followingList = {
              name: value.full_name,
              artistimg: value.user.profile_picture,
              followers: value.followers,
              Designs: value.Designs,
              data: [design1, design2, design3],
            }
            list.push(followingList);
          }
        })
        setloader(false);
        setfollowingArtists(list);
      })
  }, []);


  return (
    <div className="following-page-container">
      {
        loader
          ? (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              <CircularProgress size={50} style={{ color: '#000', margin: '40px 0 60px' }} />
            </div>
          ) : (
            followingArtists && followingArtists.length === 0
              ? (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                  No data to show
                </div>
              ) : (
                followingArtists.map((item, index) =>
                (
                  <>
                    <Grid container justify="space-between" direction="row" key={item.Unique_id}>
                      <Grid item xs>
                        <div className="following-artist-container">
                          <div className="following-artist-img-container">
                            <img src={item.artistimg} className="following-artist-img" alt='' />
                          </div>

                          <div className="following-artist-details-container">
                            <h2 className="following-artist-name">
                              {
                                item.name
                              }
                            </h2>
                            <p className="following-artist-details">
                              {item.Designs > 1 ? `${item.Designs} designs` : `${item.Designs} design`} &nbsp;|&nbsp; {item.followers > 1 ? `${item.followers} followers` : `${item.followers} follower`}
                            </p>
                            <div className="following-artist-btn-container">
                              <Button variant="outlined" className="following-artist-btn">
                                <span style={{ padding: "0px 10px", fontSize: "14px", fontWeight: "500", color: "#1B1918 !important" }}>Following</span>
                              </Button>
                            </div>
                          </div>

                        </div>
                      </Grid>

                      <Grid item xs>
                        {
                          <div style={{ padding: "0px 20px" }}>
                            <Grid container spacing={2}>
                              {
                                item.data.map((item, index) => (
                                  <ProductCard
                                    key={index}
                                    id={index}
                                    image={item}
                                    width={236}
                                    height={140}
                                    followingartistdata
                                  />
                                ))
                              }
                            </Grid>

                          </div>
                        }
                      </Grid>



                    </Grid>
                    {
                      index < (followingArtists.length - 1) ? (
                        <div className="horizontal-break-container">
                          <div>
                            <hr className="horizontal-break" />
                          </div>
                        </div>
                      )
                        : (
                          <div style={{ marginBottom: "80px" }}></div>
                        )
                    }
                  </>
                ))
              )
          )
      }
    </div>
  )
}


export default UserFollowing