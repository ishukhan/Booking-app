import React from "react";
import "./Featured.scss";
import { delhi, india, kolkata, patna, ranchi } from "../../assets";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={delhi} alt="Delhi" className="featuredImg" />
        <div className="featuredTitle">
          <h1>
            Delhi
            <span>
              <img src={india} alt="" />
            </span>
          </h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src={patna} alt="Patna" className="featuredImg" />
        <div className="featuredTitle">
          <h1>
            Patna
            <span>
              <img src={india} alt="" />
            </span>
          </h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src={kolkata} alt="Kolkata" className="featuredImg" />
        <div className="featuredTitle">
          <h1>
            Kolkata
            <span>
              <img src={india} alt="" />
            </span>
          </h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src={ranchi} alt="Ranchi" className="featuredImg" />
        <div className="featuredTitle">
          <h1>
            Ranchi
            <span>
              <img src={india} alt="" />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
