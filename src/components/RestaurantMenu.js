import {useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const {resId} = useParams();
    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch();
        const json = await data.json();
        console.log(json);

    setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(resInfo === null) return <Shimmer />

    const {name,cloudinaryImageId,cuisines,avgRating} = resInfo?.info;

    return  (
        <div className="menu">
            <img src={CDN_URL+cloudinaryImageId}  />
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{avgRating}</h3>
            
        </div>
    )
}

export default RestaurantMenu;