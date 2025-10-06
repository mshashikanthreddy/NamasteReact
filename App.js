import React from "react";
import ReactDOM from "react-dom/client"; 

/**
 * Header
 *  - Logo
 *  - Nav(Login,Signup,Home,profile).
 * Body
 *  - Restaurant Container
 *  - Restaurant Card
 *      - Img
 *      - Name of Res, Star Rating, Cuisines, Delivery Time. 
 * Footer
 *  - contact
 *  - careers
 *  - Address
 *  - copyrights
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-Container">
                <img 
                    className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP57IpBjnxab7h53tzZMlgmXmd9mWVsDtBRfzb7quotfBSKi1ibSkCXSPNhSuiXqKDqTY&usqp=CAU" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Login/Signup</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={{backgroundColor : " #fb2323e0"}}>
            <img className="res-logo" 
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/"+resData.cloudinaryImageId
            }
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating} Rating</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.minDeliveryTime} Min</h4>
        </div>
    )
};

const resObj = {
                            "id": "18973",
                            "name": "Nandhana Palace",
                            "city": "1",
                            "slugs": {
                              "restaurant": "nandhana-palace-koramangala-koramangala"
                            },
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
                            "locality": "Koramangala",
                            "areaName": "Koramangala",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                              "Biryani",
                              "Andhra",
                              "South Indian",
                              "North Indian"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                              "restaurantId": "18973",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "40K+",
                            "promoted": true,
                            "adTrackingId": "cid=33497041~p=0~adgrpid=33497041#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=18973~plpr=COLLECTION~st=meghana foods~eid=91d513e8-41d0-452a-ae7a-669a3e85e4a0~srvts=1759773203073~collid=56861",
                            "sla": {
                              "deliveryTime": 28,
                              "minDeliveryTime": 25,
                              "maxDeliveryTime": 30,
                              "serviceability": "SERVICEABLE",
                              "slaString": "25-30 MINS",
                              "lastMileTravelString": "0.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-10-07 02:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                  "description": "Delivery!"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "ITEMS",
                              "subHeader": "AT ₹99",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "9.7K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "33497041"
                          }

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resObj}/>
                <RestaurantCard resData={resObj}/>
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);