// componentWillUnmount

import React from "react";

class User0017 extends React.Component{
    componentWillUnmount(){
        alert("componentWillUnmount")
        console.log("componentWillUnmount")
    }
    render(){
        return(
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}

export default User0017;