import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // "Hooks" gives the access to use state variable and other react features without writing a class.
    //Local State Variable - super powerful variable 

    /* Always use the useState function in a component and avoid using it outside of component,
        Inside "if", "for" , any function which creates hindrance to React application. */
    
    const [ListOfRestaurants, setListOfRest]  = useState([]); 
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");
    
    /* "React" follows Loads->render->API->re-renders.
        which is the best practice rather than displaying blank page which is not a best practice.

    /* when user clicks on URL the body starts rendering with old data which already have and then it calls "useEffect"
       which takes one callback function and an dependency array which re-runs when it changes.
       "useEffect" used to fetch api's of outside sites, event listeners,handlers which re-renders the "DOM".
    */
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
   return ListOfRestaurants.length === 0?<Shimmer />:(
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
                        const filteredRestaurant = ListOfRestaurants.filter(
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
                    const filteredList = ListOfRestaurants.filter(
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
          </div>
      )
  } 

export default Body;