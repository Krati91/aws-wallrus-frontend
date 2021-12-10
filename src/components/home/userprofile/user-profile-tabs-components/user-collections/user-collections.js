import { useEffect, useState } from 'react';
import './user-collection.scss';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collection1 from '../../../../../images/design1.svg';
import Collection2 from '../../../../../images/design2.svg';
import Collection3 from '../../../../../images/design3.svg';
import { getDecoratorCollection } from '../../../../../apis/apiCalls';

const UserCollections = (props) => {

  const [loader, setloader] = useState(true);
  const [collections, setcollections] = useState([]);

  // const collections = [
  //   {
  //     id: 1,
  //     img: [Collection1, Collection2, Collection3],
  //     title: "Flower Print",
  //     design: "23 Designs",
  //     artist: "5 Artists",
  //   },
  //   {
  //     id: 2,
  //     img: [Collection1, Collection2, Collection3],
  //     title: "Butterfly Print",
  //     design: "13 Designs",
  //     artist: "5 Artists",

  //   },
  //   {
  //     id: 3,
  //     img: [Collection1, Collection2, Collection3],
  //     title: "Flower Print",
  //     design: "2 Designs",
  //     artist: "1 Artists",

  //   },
  //   {
  //     id: 4,
  //     img: [Collection1, Collection2, Collection3],
  //     title: "Flower Print",
  //     design: "2 Designs",
  //     artist: "1 Artists",

  //   },
  // ];

  const history = useHistory();

  const handleClick = (e) => {
    console.log(e.target.id);
    history.push(`/collection/${e.target.id}`);
  }

  useEffect(() => {
    getDecoratorCollection()
      .then((res) => {
        let Templist = [];
        let productImages = [];
        res.forEach((res, index) => {
          // get Product Images
          res.products.forEach((img) => {
            productImages.push(img.image);
          });
          const collectionList = {
            id: index,
            img: productImages ? productImages : [Collection1, Collection2, Collection3],
            title: res.name,
            design: res.number_of_designs,
            artist: res.number_of_artists,
          }
          Templist.push(collectionList);
        });
        setloader(false);
        setcollections(Templist);
      });
  }, []);

  return (
    <div className="user-collections">
      <Grid spacing={1} container>
        {
          loader
            ? (
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <CircularProgress size={50} style={{ color: '#000', margin: '40px 0 60px' }} />
              </div>
            ) : (
              collections && collections.length === 0
                ? (
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    No data to show
                  </div>
                ) : (
                  collections.map((item, index) => {
                    return (
                      <Grid item lg={4} xl={3} sm={6} xs={12} style={{ marginBottom: "30px" }} key={index}>
                        <Grid container direction="column" spacing={1}>
                          <Grid item xs={12} direction="row">
                            <img id={item.id} onClick={handleClick} className='img-header' alt="img1" src={`${process.env.REACT_APP_ROOT_URL}/${item.img[0]}`}></img>
                          </Grid>
                          <Grid container direction="row" spacing={1}>
                            <Grid item xs={12} direction="row">
                              {
                                (item.img.slice(0, 3)).map((current, iid) => {
                                  return (
                                    <img id={item.id} onClick={handleClick} className="img-footer" style={{ display: 'inline', margin: "0 5px 0px 5px", maxHeight: "100px" }} src={current} alt=''></img>
                                  )
                                })
                              }
                            </Grid>
                          </Grid>
                          <h2>{item.title}</h2>
                          <p>{item.design > 1 ? `${item.design} Designs` : `1 Design`}&nbsp;.&nbsp;{item.artist > 1 ? `${item.artist} Artists` : `1 Artist`}</p>
                        </Grid>
                      </Grid>
                    )
                  })
                )
            )
        }
      </Grid>
    </div>
  )
};

export default UserCollections;