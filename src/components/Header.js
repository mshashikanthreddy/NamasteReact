import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [btnNameReact,setBtnNameReact] = useState("Login");
console.log("Header Render"); // Here once "setBtnNameReact" function notices a change it automatically re-renders entire "Header" component.

/* when setBtnNamereact function notice change and returns updated value to "useState"
    and "useState" sets the new value to "setBtnNameReact" function which assigns new value to "const"
    variable.*/
/* Actually, const variable cannot be reassigned but when it re-renders the new "const" variable is again 
    created which is assigned to new value */ 

// if no dependency array => useEffect is called on every render
// if there is dependency array([]) => useEffect just render only once on intial render.
// if dependency is [btnNameReact] => useEffect is called every time btnNameReact.
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