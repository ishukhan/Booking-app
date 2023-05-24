import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCab,
  faCalendarDay,
  faPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "date",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const [destination, setDestination] = useState("");
  const handleChnage = () => {
    navigate("./hotels", { state: { destination, date, option } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainor listnode" : "headerContainor"
        }
      >
        <div className="headerList">
          <NavLink
            exact
            to="/"
            style={{ textDecoration: "none", color: "black" }}
            activeClassName="active"
            className="headerListItem "
          >
            <FontAwesomeIcon icon={faBed} />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span>Hotel</span>
            </Link>
          </NavLink>
          <NavLink
            exact
            to="/flight"
            style={{ textDecoration: "none", color: "black" }}
            activeClassName="active"
            className="headerListItem"
          >
            <FontAwesomeIcon icon={faPlane} />
            <Link
              to="/flight"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Flight</span>
            </Link>
          </NavLink>
          <NavLink
            exact
            to="/car"
            style={{ textDecoration: "none", color: "black" }}
            activeClassName="active"
            className="headerListItem"
          >
            <FontAwesomeIcon icon={faCab} />
            <Link to="/car" style={{ textDecoration: "none", color: "black" }}>
              <span>Car rentals</span>
            </Link>
          </NavLink>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of Discount? its's Genius
            </h1>
            <p className="headerDesc">
              Get reward for your travle - unlock instant saving of 10% or more
              with a free Ishubooking account
            </p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSeacrhItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSeacrhItem">
                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/mm/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.date])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSeacrhItem">
                <FontAwesomeIcon icon={faUser} className="headerIcon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >{`${option.adult} Adult ${option.child} Child ${option.room} Room`}</span>
                {openOption && (
                  <div className="option">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.adult <= 1}
                          className="optionCountBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{option.adult}</span>
                        <button
                          className="optionCountBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Child</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.child <= 0}
                          className="optionCountBtn"
                          onClick={() => handleOption("child", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{option.child}</span>
                        <button
                          className="optionCountBtn"
                          onClick={() => handleOption("child", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.room <= 1}
                          className="optionCountBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{option.room}</span>
                        <button
                          className="optionCountBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSeacrhItem">
                <button className="headerButton" onClick={handleChnage}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
