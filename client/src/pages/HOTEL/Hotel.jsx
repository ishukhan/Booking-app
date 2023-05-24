import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/HEADER/Header";
import Navbar from "../../components/NAVBAR/Navbar";
import MailList from "../../components/MAILLIST/MailList";
import Footer from "../../components/FOOTER/Footer";
import "./Hotel.scss";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState("");
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414451458.jpg?k=c3623e610791745b792e0c6f4a93b4dc51f8b53d36c2dcf9d2f05ad65e1ddcf7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414451454.jpg?k=b828efcb8a78901f4c32386faa839a57d5a02fc762109217a3468007dc3ae508&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438937883.jpg?k=534d77cd528d2244d5a199235dc1a1645f19d6a86d2b294bc20433b3680d3090&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438941661.jpg?k=9d33780931bf205e53665debb3520b0a58f07de4d6b7ebb1a647a8f73397599d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414451452.jpg?k=7c89b5dc28c5d9dcc1d2404d38aa2f63675baea3c3aa7114d68bea2b80d18459&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414451361.jpg?k=830183542c3c9d844bebcbaac7345d59e9a49dcb43afe1f3560f43b66d0d7125&o=&hp=1",
    },
  ];

  const handleSlider = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleArrow = (direction) => {
    let newSliderNumber;
    if (direction === "l") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainor">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleArrow("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleArrow("r")}
            />
          </div>
        )}
        <div className="hotleWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Family Hotel Delhi</h1>
          <div className="hotelAddresh">
            <FontAwesomeIcon icon={faLocationArrow} />
            <span>Rajori garden west</span>
          </div>
          <span className="hotelDistance">
            Exelent 500-miter Mahipalpur New Delhi
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 50049 at this propertiy and free taxi
          </span>
          <div className="hotelImage">
            {photos.map((photos, i) => (
              <div className="hotelImageWrappr">
                <img
                  onClick={() => handleSlider(i)}
                  src={photos.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetail">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">Stay with the heart odf delhi</h1>
              <p className="hotlDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid provident, praesentium illum quo, similique, dolorum eos
                velit expedita saepe sunt molestiae! Quibusdam rem voluptate, ut
                distinctio alias veniam hic molestiae, dolorem dolore quam quos
                ipsam quisquam quas obcaecati, non quis vel explicabo tenetur
                deleniti? Pariatur nostrum deserunt quis! Accusamus,
                perferendis. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Expedita corporis ad, sequi quo delectus aliquid.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for nigth stay</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, eum.
              </span>
              <h2>
                <b>₹5049</b> (9 nights)
              </h2>
              <button>Reserv or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
