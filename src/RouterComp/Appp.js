import React from 'react'
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Protected from './Protected';

function Appp(){
    return (
        <div className='App'>
            <BrowserRouter>
            <NavBar />  
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/about' element={<Protected Component={About}/>} />
                    <Route path='/home' element={<Protected Component={Home}/>} />
                    <Route path='/contact' element={<Protected Component={Contact}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Appp;