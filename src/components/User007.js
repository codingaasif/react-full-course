import React from "react";
import { useState } from "react";



function User007(){
    const [name, setName] = useState("")
    const [tnc, setTnc] = useState(false)
    const [opt, setOpt] = useState("")

    function getFormData(e){
        e.preventDefault()
        console.log(name, tnc, opt)
    }

    return(
        <div className="App">
            <h1> Handle Form </h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enetr name" onChange={(e)=> setName(e.target.value)}/>
                <br />
                <select onChange={(e)=> setOpt(e.target.value)} >
                    <option>Marvel</option>
                    <option>DC Hero</option>
                    <option>Heros</option>
                </select>
                <br />
                <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)} />
                <span>Accept Term and Conditions</span>
                <br /> <br />
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}







export default User007;