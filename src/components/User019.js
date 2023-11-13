//Ref in React js

import React, { createRef } from "react";


class User019 extends React.Component{
    constructor(){
        super()
        this.inputRef = createRef();
    }
    componentDidMount(){
        console.log(this.inputRef)
        // console.log(this.inputRef.current.value= "1000")
    }
    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color ="blue"
        this.inputRef.current.style.backgroundColor ="green"
    }
    render(){
        return(
            <div className="App">
                <h1>Ref in React Js</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=> this.getVal()}>Check Ref</button>
            </div>
        )
    }
}

export default User019;