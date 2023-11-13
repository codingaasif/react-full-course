//Nested Routing

import React, {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Router0005 from "./Router0005";
import Router00005 from "./Router00005";
import Router000005 from "./Router000005";
import Router0000005 from "./Router000000";

function Router005(){

    return (
        <div className="App">
            <h1>Nested Routing Page</h1>
            <p>This is Nested Routing Page</p>
            <BrowserRouter>

            <Link to="/router0005">Channel</Link><br/>
            <Link to="/router00005">Company</Link><br/>
            <Link to="/router000005">Other</Link><br/>
            <Link to="/router0000005">Filter</Link><br/>

                <Routes>
                    <Route path="/router005" element={<Router005/>} />
                    <Route path="/router0005" element={<Router0005/>} />
                    <Route path="/router00005" element={<Router00005/>} />
                    <Route path="/router000005" element={<Router000005/>} />
                    <Route path="/router0000005" element={<Router0000005/>}/>
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}

export default Router005;