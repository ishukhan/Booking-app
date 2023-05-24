import React from "react";
import Navbar from "../../components/NAVBAR/Navbar";
import Header from "../../components/HEADER/Header";
import Featured from "../../components/FEATURED/Featured";
import "./Home.scss";
import TravelerList from "../../components/TRAVELARLIST/TravelerList";
import FeaturesHotel from "../../components/FEATURES-HOTEL/FeaturesHotel";
import MailList from "../../components/MAILLIST/MailList";
import Footer from "../../components/FOOTER/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainor">
        <Featured />
        <div className="homeTitle">
          Connect with other travellers
          <TravelerList />
        </div>
        <div className="homeTitle">
          Home guests love
          <FeaturesHotel />
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
