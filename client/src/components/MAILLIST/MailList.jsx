import React from "react";
import "./MailList.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Money, Save time!</h1>
      <span className="mailDesc">Sign up we'll send the best deal to you</span>
      <div className="mailInputcontainor">
        <input type="text" placeholder="Enter your email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
