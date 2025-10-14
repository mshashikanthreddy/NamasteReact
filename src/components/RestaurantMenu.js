import {useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = data.json();
        console.log(json);

    setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const {name,cloudinaryImageId,cuisines,avgRating} = resInfo?.info;

    return resInfo === null ? ( 
    <Shimmer /> 
    ) : (
        <div className="menu">
            <img src={CDN_URL+cloudinaryImageId}  />
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurantMenu;