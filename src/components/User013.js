import React from "react";


class User013 extends React.Component{
    render(){
        console.log("Render Method", this.props.name)
        return(
            <div className="App">
                <h1>User Component</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default User013;