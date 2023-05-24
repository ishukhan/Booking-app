import React from "react";
import "./FeaturesHotel.scss";

const FeaturesHotel = () => {
  return (
    <div className="fHotel">
      <div className="fHotelItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=1887d9e0a796fe553436a57823a481ed3584310d6a940e69cc8db875b110ae66&o=&s=1"
          alt=""
          className="fHotelImg"
        />
        <span className="fName">Farmhouse</span>
        <span className="fCity">lonawala, Mumbai</span>
        <span className="fPrice">
          Starting from <span>₹ 8,115</span>
        </span>
        <div className="fHotelRating">
          <button>5.8</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fHotelItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/105762573.webp?k=2d60f1bc92863378df6d230f19d726197363e101ca22090bf88810eb89dea86b&o="
          alt="FarmHouse"
          className="fHotelImg"
        />
        <span className="fName">House with stairs</span>
        <span className="fCity">punjab, india</span>
        <span className="fPrice">
          Starting from <span>₹ 10,115</span>
        </span>
        <div className="fHotelRating">
          <button>7.8</button>
          <span>Exelent</span>
        </div>
      </div>
      <div className="fHotelItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/356249609.webp?k=faba3b81c4ff82b74bc9cb2b8a42215e5551442e577539e1bc7de25edf6039fd&o="
          alt=""
          className="fHotelImg"
        />
        <span className="fName">Mini hotel stay </span>
        <span className="fCity">Pune, india</span>
        <span className="fPrice">
          Starting from <span>₹ 7,134</span>
        </span>
        <div className="fHotelRating">
          <button>6.8</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fHotelItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o="
          alt=""
          className="fHotelImg"
        />
        <span className="fName">Carinya Park</span>
        <span className="fCity">Mumbai, india</span>
        <span className="fPrice">
          Starting from <span>₹ 18,115</span>
        </span>
        <div className="fHotelRating">
          <button>9.8</button>
          <span>Exelent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHotel;
