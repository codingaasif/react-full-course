// Pure Component

import React from "react";
import User0018 from "./User0018";

class User018 extends React.PureComponent{
    constructor (){
        super()
        this.state ={
            count : 0
        }
    }
    render(){
        console.log("parent re-render")
        return(
            <div className="App">
                <h1>Pure Component</h1>
                <User0018 count= {this.state.count}/>
                {/* <h1>{this.state.count}</h1> */}
                <button onClick={()=> this.setState({count: this.state.count + 1})}>Update Count</button>
            </div>
        )
    }
}

export default User018;