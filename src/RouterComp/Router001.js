//Main Page

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Router0001 from "./Router0001";
import Router00001 from "./Router00001";
import Router000001 from "./Router000001";

function Router001(){
    return(
        <div className="App">
            <BrowserRouter>
                <h1>Hello React Router v6</h1>
                <Link to="/router00001">About</Link>
                <br/>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/*">404 Page</Link>
                <Routes>
                <Route path="/" element={<Router0001/>}/>
                <Route path="/router00001" element={<Router00001/>}/>
                <Route path="/*" element={<Router000001/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default Router001;