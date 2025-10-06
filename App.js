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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor : " #fb2323e0"}}>
            <img className="res-logo" 
                src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"
            />
            <h3>Meghana Foods</h3>
            <h4>Indian,Asian,Continental</h4>
            <h4>4.5 stars</h4>
            <h4>35 mins</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
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