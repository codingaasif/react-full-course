import React from "react";




class User002 extends React.Component {

    constructor(){
        super();
        this.state = {
            data: "Asif"
            // data: 0
        }
    }
    update(){
        alert("Update Data")
        this.setState ({data: "Noor"})
        // this.setState({data: this.state.data+1})
    }

    render(){
        return (
            <div className="App">
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.update()}> Update Data</button>
            </div>
        )
    }
    
}


export default User002;