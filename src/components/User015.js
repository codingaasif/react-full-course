// componentDidUpdate life cycle

import React from 'react'

class User015 extends React.Component{
    constructor(){
        super();
        console.log("constructor")
        this.state = {
            count : 0
        }
    }
    componentDidUpdate(prevProps, prevState, snapshort){
        console.log("ComponentDidUpadte", prevState.count, this.state.count)
    }
    render(){
        console.log("Render")
        return(
            <div className='App'>
                <h1>Component Did Update {this.state.count}</h1>
                <button onClick={()=> {this.setState({count : this.state.count + 1})}}>Update Name</button>
            </div>
        )
    }
}

export default User015;