const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data; // Corrected to access resData.data
  
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/druwjzmfmz7qvepq3bkr"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4> {/* Join cuisines array into a string */}
            <h4>{`AvgRating : ${avgRating}`}</h4>
            <h4>{`Cost for Two: $${(costForTwo / 100).toFixed(2)}`}</h4> {/* Display cost correctly */}
            <h4>{`Delivery Time: ${deliveryTime} mins`}</h4> {/* Added delivery time display */}
        </div>
    );
  };
  
  export default RestaurantCard;
  
  
  
  
  
  
  
  
  
  
  
  