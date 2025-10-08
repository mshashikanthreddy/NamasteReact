import { LOGO_URL } from "../utils/constants";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-Container">
                <img 
                    className="logo" src={LOGO_URL} 
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

export default Header;