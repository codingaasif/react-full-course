// Pure Component

import React from "react";

class User0018 extends React.PureComponent{
    
    render(){
        console.log("child re-render")
        return(
            <div className="App">
                <h1>Pure Child Component</h1>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}

export default User0018;