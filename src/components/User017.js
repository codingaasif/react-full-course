// componentWillUnmount Method

import React from "react";
import User0017 from "./User0017";


class User017 extends React.Component{
    constructor(){
        super()
        this.state ={
            show : true
        }
    }
    render(){
        console.log("Render")
        return(
            <div className="App">
                
                <h1>Component Will Unmount</h1>
                {
                    this.state.show ? <User0017 /> : <h1>Child Component Removed</h1>
                }
                <button onClick={()=> this.setState({show: !this.state.show})}>Toggle Child Component</button>
            </div>
        )
    }
}


export default User017;