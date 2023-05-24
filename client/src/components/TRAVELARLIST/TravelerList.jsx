import React from "react";
import "./TravelerList.scss";
import { tajmahal, three, travel1 } from "../../assets";

const TravelerList = () => {
  return (
    <div className="travel">
      <div className="travelItems">
        <img src={tajmahal} alt="Tajmahal" className="travelImg" />
        <div className="travelTitle">
          <h4>india</h4>
          <p>Travler Community 155,073 travellers</p>
        </div>
      </div>
      <div className="travelItems">
        <img src={three} alt="Threee people" className="travelImg" />
        <div className="travelTitle">
          <h4>Travel Discussion</h4>
          <p>View forum 559,436 travellers</p>
        </div>
      </div>
      <div className="travelItems">
        <img src={travel1} alt="Three people" className="travelImg" />
        <div className="travelTitle">
          <h4>MOre Communication</h4>
          <p>View all 9,559,490 travellers</p>
        </div>
      </div>
    </div>
  );
};

export default TravelerList;
