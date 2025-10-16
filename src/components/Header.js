import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [btnNameReact,setBtnNameReact] = useState("Login");
console.log("Header Render"); 
// Here once "setBtnNameReact" function notices a change it automatically re-renders entire "Header" component.


useEffect(() => {

},[btnNameReact]);

    return (
        <div className="header">
            <div className="logo-Container">
                <img 
                    className="logo" src={LOGO_URL} 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <button className="login-btn"
                        onClick={() => {
                            btnNameReact === "Login" ?
                            setBtnNameReact("Logout"):
                            setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;