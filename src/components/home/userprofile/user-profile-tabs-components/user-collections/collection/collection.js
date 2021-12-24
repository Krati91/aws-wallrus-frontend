import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Footer from "../../../../footer/footer";
import MainNav from "../../../../main-nav/main-nav";
import "./collection.scss";
import userimg from "../../../../../../images/model.svg";
import design1 from "../../../../../../images/design1.svg";
import design2 from "../../../../../../images/design2.svg";
import design3 from "../../../../../../images/design3.svg";
import design4 from "../../../../../../images/design4.svg";
import ProductCard from "../../../../product-cards";
import CollectionModel from "../../../../../collection-model/collection-model";
import { deleteCollection } from "../../../../../../apis/apiCalls";
import { useHistory, useParams } from "react-router";

const Collection = (props) => {
  const [showCollectionModel, setShowCollectionMode] = useState(false);
  const [modelState, setModelState] = useState(true); // True means edit & false means delete
  const { id } = useParams();

  const deleteCollectionHandler = async () => {
    toggleModel(true);
    setModelState(false);
  };

  const editCollectionHandler = () => {
    toggleModel(true);
    setModelState(true);
  };

  const collection = [
    {
      title: "Flower Print",
      designs: "23 Designs",
      artist: "5 Artists",
      description: "This is my fav collection",
      cards: [
        {
          designName: "Art Decon1",
          applications: "Wallpaper",
          name: "Jassie Mario",
          image: design1,
          tags: "Bedroom",
        },
        {
          designName: "Art Decon2",
          applications: "Curtains",
          name: "Ronald Richards",
          image: design2,
          tags: "Kitchen",
        },
        {
          designName: "Art Decon3",
          applications: "Table cloth",
          name: "Leslie Alexander",
          image: design3,
          tags: "Dining Hall",
        },
        {
          designName: "Art Decon4",
          applications: "Curtain blinds",
          name: "Savannah Nguyen",
          image: design4,
          tags: "Room 1",
        },
        {
          designName: "Art Decon2",
          applications: "Curtains",
          name: "Ronald Richards",
          image: design2,
          tags: "Room 2",
        },
        {
          designName: "Art Decon3",
          applications: "Table cloth",
          name: "Leslie Alexander",
          image: design3,
          tags: "Room 3",
        },

        {
          designName: "Art Decon1",
          applications: "Wallpaper",
          name: "Jassie Mario",
          image: design1,
          tags: "Kids Room",
        },
        {
          designName: "Art Decon4",
          applications: "Curtain blinds",
          name: "Savannah Nguyen",
          image: design4,
          tags: "",
        },
      ],
    },
  ];

  // Toggle model handler
  const toggleModel = (boolean) => {
    setShowCollectionMode(boolean);
  };

  return (
    <div>
      {showCollectionModel && (
        <CollectionModel
          setEdit={modelState}
          setDelete={!modelState}
          show={showCollectionModel}
          collection_pk={id}
          toggleModel={(bool) => toggleModel(bool)}
        />
      )}
      <MainNav />
      {collection.map((item, id) => {
        return (
          <div className="collection-container">
            <div className="collection-header">
              <div className="collection-left-content">
                <p className="collection-title">{item.title}</p>
                <p className="collection-subtitle">
                  {item.designs} . {item.artist}
                </p>
                <p className="collection-description">{item.description}</p>
              </div>
              <div className="collection-right-content">
                <Button
                  className=""
                  variant="outlined"
                  onClick={editCollectionHandler}
                >
                  Edit collection
                </Button>
                <Button
                  className=""
                  variant="outlined"
                  onClick={deleteCollectionHandler}
                >
                  Delete collection
                </Button>
              </div>
            </div>
            <Grid
              container
              className="card-container"
              direction="row"
              spacing={5}
            >
              {item.cards.map((curr, index) => {
                return (
                  <ProductCard
                    key={index}
                    fileIcon={false}
                    tags={curr.tags}
                    width="422px"
                    id={index}
                    image={curr.image}
                    userimg={userimg}
                    generaldata
                    artistname={curr.name}
                  />
                );
              })}
            </Grid>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Collection;
