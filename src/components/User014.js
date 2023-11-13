//componentDidMount life cycle

import React from "react";


class User014 extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "Asif"
        }
            console.log("constructor")
    
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    render(){
        console.log("Render")
    //    let data =this.setState({name : "Noor"})


    const func = ()=>{
       const  data = document.getElementById("id") 
       data.style.color="red"
    }

        return(
            <div className="App">
                <h1 id="id">Component Did Mount</h1>
                <h2>{this.state.name}</h2>
                <button onClick={()=> func()}>Color</button>
                <br />
                <button onClick={()=> {this.setState({name : "Noor"})}}>Update Name</button>
            </div>
        )
    }

}

export default User014;