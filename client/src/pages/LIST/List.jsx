import "./List.scss";
import Navbar from "../../components/NAVBAR/Navbar";
import Header from "../../components/HEADER/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SEARCHITEM/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);

  const [opendate, setOpendate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainor">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTilte">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={() => setOpendate(!opendate)}>{`${format(
                date[0].startDate,
                "dd/mm/yyyy"
              )} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
              {opendate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.date])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsoption">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per nights</small>
                  </span>
                  <input type="text" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per nights</small>
                  </span>
                  <input type="text" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} placeholder={option.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Child</span>
                  <input type="number" min={0} placeholder={option.child} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} placeholder={option.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
