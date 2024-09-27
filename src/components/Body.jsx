import resList from "../utils/mockData";

import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurants";
import Shimmer from "./Shimmer";

// Body component
const Body = () => {
  // local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  //   fetch("/api/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  const data = await fetch("https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.65200&lng=77.16630");
  // const data = await fetch("/api/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630");
  const json = await data.json();

  // optional chaining
  setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // FILTER THE RESTAURANTS CARDS AND UPDATE THE UI
              // SEARCH tEXT
              console.log(searchtext);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchtext.toLowerCase())
              );

              filteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;




