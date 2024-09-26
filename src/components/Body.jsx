import resList  from "../utils/mockData";

import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurants";


// Body component   
const Body = () => {
// local state variable - Super powerful variable
const [listOfRestaurants, setListOfRestaurants] = useState(resList);


useEffect(()=>{
  fetchData();
 
},[]);

const fetchData = async()=>{
 fetch("/api/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630")
 .then((res)=>res.json())
 .then((data)=>{
   console.log(data)
 })

}
// const fetchData = async()=>{
//  const data =  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// const json = await data.json();
// console.log(json)
// }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          // filter logic here
          const filteredList= listOfRestaurants.filter((res) => res.data.avgRating > 4);
          setListOfRestaurants(filteredList)
          console.log(listOfRestaurants)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key= {restaurant.data.id} resData = {restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;