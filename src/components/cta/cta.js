import React from "react";
import "./cta.scss";
import MaskGroup1 from "../../images/Mask Group 2.svg";
import MaskGroup2 from "../../images/Mask Group 1.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="cta">
      <img className="right top" src={MaskGroup1} />
      <img className="left bottom" src={MaskGroup2} />
      <h2 className="h2 x-bold">Don’t miss out any updates</h2>
      <p className="para">
        Get weekly email containing all latest design, trends, artists, events
        and lots more.
      </p>
      <div className="grid-cols-2">
        <input
          className="primary-input"
          type="email"
          placeholder="Your email id"
        />
        <Link to="/signup">
          <Button variant="contained" className="btn-filled">
            Push. Don’t Pull
          </Button>
        </Link>
      </div>
      <p className="para-small">Zero spam. Unsubscribe any time</p>
    </div>
  );
};

export default Cta;
