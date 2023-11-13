// class components life cycle method
// (1) constructor life cycle method

import React from "react";


class User012 extends React.Component{
    constructor(){
        super();
        this.state = {      //state define or ready before html
            data : "Asif"
        }
        console.log("constructor")
    }
    render()
    {
        return(
            <div className="App">
                <h1>Class Component Life Cycle Methos</h1>
                <h1>Hello {this.state.data}</h1>
            </div>
        )
    }
}


export default User012;