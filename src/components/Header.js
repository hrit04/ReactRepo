
import { useState, useEffect } from 'react';
import LOGO_URL from "../utils/constants";
import { Link } from 'react-router-dom';

import useOnlineStatus from '../utils/useOnlineStatus';

/*

Link just refreshes the component
and <a> anker tag reloads the whole page 


*/

const Header = () => {

    const [btnName, setbtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    //if no dependency array => useEffect will be called in every render
    //if no dependency array is empty => useEffect will be called in initial render
    //if dependency array is [btnName] => useEffect will be called when btnName value will be changed
    useEffect(()=>{
        console.log('Header UseEffect called');
    },[btnName])
    console.log("header rendered");
    return (
        <div className="flex justify-between bg-pink-200 shadow-2xl">
            <div className="logo-container">
                <img className="h-32" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex justify-between p-4 m-4'>
                    <li className='px-4'>Online Status { (onlineStatus) ? '✅' : '🚨' }</li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/about">About US</Link></li>
                    <li className='px-4'><Link to="/contact">Contact US</Link></li>
                    <li className='px-4'><Link to ="/cart">Cart</Link></li>
                    <li className='px-4'><Link to ="/grocery">Grocery</Link></li>
                    <li className='px-4'><Link to ="/login">Login</Link></li>
                    {/* <button className="login inline-block h-6 w-6 rounded-full ring-2 ring-white"  onClick={() => {
                        if (btnName == "login") {
                           
                            setbtnName("logout");
                        } else {
                            setbtnName("login");
                        }

                    }}>{btnName}</button> */}
                </ul>
            </div>

        </div>
    )
}
export default Header;