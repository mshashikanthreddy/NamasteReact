import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor : " #fb2323e0"}}>
            <img className="res-logo" 
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.minDeliveryTime} Min</h4>
        </div>
    )
};

export default RestaurantCard;