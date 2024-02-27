
import { useState, useEffect } from 'react';
import LOGO_URL from "../utils/constants";
import { Link } from 'react-router-dom';

/*

Link just refreshes the component
and <a> anker tag reloads the whole page 


*/

const Header = () => {

    const [btnName, setbtnName] = useState("login");
    //if no dependency array => useEffect will be called in every render
    //if no dependency array is empty => useEffect will be called in initial render
    //if dependency array is [btnName] => useEffect will be called when btnName value will be changed
    useEffect(()=>{
        console.log('Header UseEffect called');
    },[btnName])
    console.log("header rendered");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li><Link to ="/cart">Cart</Link></li>
                    <button className="login" onClick={() => {
                        if (btnName == "login") {
                            setbtnName("logout");
                        } else {
                            setbtnName("login");
                        }

                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header;