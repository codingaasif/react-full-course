import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <h1>NavBar</h1>
            <ul>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;