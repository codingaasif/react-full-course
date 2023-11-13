import React from "react";



function User003(props){
    console.log(props.name)
    return(
        <div className="App">
            <h1>Hello {props.name} </h1>
            {/* <h2>Email: {props.email}</h2>
            <h2>Company: {props.company}</h2>
            <h3>Address: {props.address}</h3> */}
        </div>
    )
}








export default User003;