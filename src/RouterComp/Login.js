import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(){

    const loginFunc =()=>{
        localStorage.setItem('login', true)
        // navigate('/')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login ==="true") {
            navigate('/')
        }
    })

    return (
        
        <div className='App'>
            <h1>Login page</h1>
            <input type='text' />
            <br /> <br />
            <input type='text' />
            <br /> <br />
            <button onClick={loginFunc}>Login</button>
        </div>
    )
}

export default Login;