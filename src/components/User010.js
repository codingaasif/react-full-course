import React, { useState } from "react";


function User010(){
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState(false)
    const [passError, setPassError] = useState(false)

    function loginHandle(e){
        e.preventDefault()

        if(id.length < 3 || password.length < 3){
            alert("Invalid")
        }else{
            alert("submited")
        }

    }
    function userHandler(e){
        let item = e.target.value;
        if(item.length < 3){
            setUserError(true)
            console.log("invalid")
        }else{
            setUserError(false)
        }
        setId(item)
        console.log(e.target.value.length)
    }

    function passwordHandler(e){
        let item = e.target.value;
        if(item.length < 3){
            setPassError(true)
            console.log("invalid")
        }else{
            setPassError(false)
        }
        setPassword(item)
        console.log(e.target.value.length)
    }


        return(
            <div className="App">
                <h1>Login</h1>
                <form onSubmit={loginHandle}>
                    <input type="text" placeholder="Enter your Id" onChange={userHandler} />
                    {userError? <span>user not valid</span> : "" }
                    <br /> <br />
                    <input type="password" placeholder="Enter Password" onChange={passwordHandler} />
                    {passError? <span>password not valid</span> : "" }
                    <br /> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
}

export default User010;