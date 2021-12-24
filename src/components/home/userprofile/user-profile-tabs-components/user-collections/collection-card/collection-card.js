import React from "react";
import "./collection-card.scss";

const CollectionCard = (props) => {
  const { headerImg, otherImg, collectionName, designs, artists, onClick, id } = props;

  return (
    <div className="collection-card" onClick={() => onClick(id)}>
      <div className="collection-card--grid">
        <img
          className="collection-card--header-img"
          src={headerImg}
          alt="header-img"
        />
        {otherImg.map((img) => (
          <img
            className="collection-card--other-img"
            src={img}
            alt="header-img"

          />
        ))}
      </div>
      <h3 className="collection-card--name">{collectionName}</h3>
      <p className="collection-card--general">{`${designs} Designs . ${artists} Artists`}</p>
    </div>
  );
};

export default CollectionCard;
