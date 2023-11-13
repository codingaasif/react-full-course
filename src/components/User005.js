import React from "react"
import { useState } from "react"




function User005(){
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    
      function getData(val){
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
      }
    
      return(
        <div className='App'>
          <h1>Get Input Value !</h1>
        {
          print?
          <h2>{data}</h2>
          :null
        }
          <input type='text' onChange={getData}/>
          <br />
          <button onClick={()=> setPrint(true)}>Print Data</button>
        </div>
      )
    }
    

export default User005;