import Footer from "../../components/FOOTER/Footer";
import Header from "../../components/HEADER/Header";
import MailList from "../../components/MAILLIST/MailList";
import Navbar from "../../components/NAVBAR/Navbar";
import "./Flight.scss";

const Flight = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="cab">
        <div className="cabitem">
          <img src="https://i.ibb.co/qY6GNDS/production.gif" alt="PRODUCTION" />
          <div class="service">
            <h2 className="sTiltle">Flight Service</h2>
            <p className="sDesc">This service is currently in production.</p>
            <span className="badge">In Production</span>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Flight;
