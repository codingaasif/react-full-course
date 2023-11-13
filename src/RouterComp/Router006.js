//useLocation

import React from 'react'
import Router0006 from './Router0006';
import Router00006 from './Router00006';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function Router006(){
   
    return(
        <div className='App'>
            <h1>useLocation</h1>
            <BrowserRouter>
            <Link to='/router0006' state={{name: 'asif', age: 22}}>Child useLocation</Link>
            <br />
            <Link to='/router00006'>Child 2 useLocation</Link>

           
                <Routes>
                    <Route path='/router0006' element={<Router0006/>} />
                    <Route path='/router00006' element={<Router00006/>} />
                </Routes>
           </BrowserRouter>
        </div>
    )
}

export default Router006;