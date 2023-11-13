//Dynamic Routing with Params


import React from "react";
import Router0002 from "./Router0002";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";



function Router002(){
    return (
        <div className="App">
        <BrowserRouter>
        <NavLink 
        style={({isActive})=> {return {color: isActive ? 'green' : ''}}}
        to="/router0002/asif">Asif</NavLink>
        <br/>
        <NavLink 
        style={({isActive})=> {return {color: isActive ? 'green' : ''}}}
        to="/router0002/anil">Anil</NavLink>
        <br/>
        <NavLink 
        style={({isActive})=> {return {color: isActive ? 'green' : ''}}}
        to="/router0002/vishal">Vishal</NavLink>
        <br/>
        <NavLink 
        style={({isActive})=> {return {color: isActive ? 'green' : ''}}}
        to="/router0002/akansh">Akansh</NavLink>
        <br/>
        <NavLink 
        style={({isActive})=> {return {color: isActive ? 'green' : ''}}}
        to="/router0002/prakash">Prakash</NavLink>
        <br/>
        <NavLink 
        style={({isActive})=> {return {color: isActive ? 'green' : ''}}}
        to="/router0002/nitish">Nitish</NavLink>
        <Routes>
            <Route path="/router0002/:name" element={<Router0002/>}/>
        </Routes>

        </BrowserRouter>
        </div>
    )
}

export default Router002;