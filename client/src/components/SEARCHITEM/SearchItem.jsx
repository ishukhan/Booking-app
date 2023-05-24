import "./SearchItem.scss";

const SearchItem = () => {
  return (
    <div className="SearchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/414451368.webp?k=1f345c27109b01a7709dd028ad3b55a6ae6a897aa2a06cad663c0e49cb79c874&o=&s=1"
        alt=""
        className="sImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Family Hotel Delhi</h1>
        <span className="siDistance">14.9 km from centre</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubTitle">
          Deluxe King Room with Air conditioning
        </span>
        <span className="siFeatures">1 double bed + 1 Bathroom</span>
        <span className="siCancelOp">FREE cancellation</span>
        <span className="siSubCancelOp">
          Only 6 rooms left at this price on our site
        </span>
      </div>
      <div className="siDetail">
        <div className="siRating">
          <span>Good</span>
          <button>5.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice">₹ 5078</span>
          <span className="siTax">Include Taxes and fees</span>
          <button className="siCheckBtn">Check Avilablity</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
