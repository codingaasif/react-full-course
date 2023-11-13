// shouldComponentUpdate life cycle Method

import React from "react";

class User016 extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        console.log("contructor")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate", this.state.count);
        return (true)   //by default false
        // if(this.state.count > 5 && this.state.count < 50){
        //     return(true);
        // }else{
            
        // }
        
    }

    render(){
        console.log("render");
        return(
        <div className="App">
            <h1>Should Component Update {this.state.count}</h1>
            <button onClick={()=> {this.setState({count: this.state.count+1})}}>Update Counter</button>
        </div>
        );
    }
}
export default User016;