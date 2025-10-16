import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    
    const [listOfRestaurants, setListOfRest]  = useState([]); 
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");
    

   useEffect(()=> {
    fetchData();
   },[])

   //Here we are using "corsproxy" which solves CORS problem and works for outer use.
    const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);

    // Optional chaining
    setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
   }

   //conditional Rendering
   return listOfRestaurants.length === 0?<Shimmer />:(
          <div className="body">
              <div className="filter">
                <div className="search">
                <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        //Filter the restaurant cards and updates UI for each value like for each "letter" it re-renders.
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );                  
                    setFilteredRestaurant(filteredRestaurant);
                    
                }}
                >
                Search
                </button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.6
                );
                setFilteredRestaurant(filteredList); // Here we are using "setListOfRest" which is function which updates list when it is called.
            }}
                >Top Rated Restaurants
                </button>
              </div>
              <div className="res-container">
                  {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} /> 
                  ))};
              </div>
              <div className="menu-container">
                {resInfo.map((menu) => (
                    <RestaurantMenu  key={menu?.info?.id} resInfo={menu}/>
                ))}
            </div>
          </div>
      )
  } 

export default Body;