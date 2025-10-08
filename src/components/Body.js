import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    // "Hooks" gives the access to use state variable and other react features without writing a class.
    //Local State Variable - super powerful variable 
    const [ListOfRestaurants, setListOfRest]  = useState(resList); 
    

    /* Normal variable
    let ListOfRestaurants = [];*/
      return (
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