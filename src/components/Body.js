import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // "Hooks" gives the access to use state variable and other react features without writing a class.
    //Local State Variable - super powerful variable 
    const [ListOfRestaurants, setListOfRest]  = useState([]); 
    
    /* "React" follows Loads->render->API->re-renders.
        which is the best practice rather than displaying blank page which is not a best practice.

    /* when user clicks on URL the body starts rendering with old data which already have and then it calls "useEffect"
       which takes one callback function and an dependency array which re-runs when it changes.
       "useEffect" used to fetch api's of outside sites, event listeners,handlers which re-renders the "DOM".
    */
   useEffect(()=> {
    fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);

    // Optional chaining
    setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

   //conditional Rendering
   return ListOfRestaurants.length === 0?<Shimmer />:(
          <div className="body">
              <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.5
                );
                setListOfRest(filteredList); // Here we are using "setListOfRest" which is function which updates list when it is called.
            }}
                >Top Rated Restaurants
                </button>
              </div>
              <div className="res-container">
                  {ListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} /> 
                  ))};
              </div>
          </div>
      )
  } 

export default Body;