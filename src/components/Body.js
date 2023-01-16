import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import Shimmar from "./Shimmar";


function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
 // const [restaurants, setRestaurants] = useState([]);

  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [allRestaurants,setAllRestaurants] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setFilteredRestaurants(response?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(response?.data?.cards[2]?.data?.data?.cards);  
  }

  if(!allRestaurants) return null;

  //if(filteredRestaurants?.length === 0) return <h1>No restaurant in your location</h1>

  return allRestaurants.length === 0 ? (
    <Shimmar />
  ) : (
    <>
      <div className="search-container">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cls-card-wrapper">
        
        {
        (filteredRestaurants?.length === 0) ? (
            <h1>No restaurant in your location</h1>
        ):
        filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })
        
        }
      </div>
    </>
  );
};

export default Body;
