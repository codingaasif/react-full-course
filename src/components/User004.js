import React from "react";


class User004 extends React.Component{


    render(){
        console.log(this.props)
        return(
            
            <div> 
                <h1>Hey {this.props.name} </h1>
                <h2>{this.props.email}</h2> 
            </div>
        )
    }
}





export default User004;