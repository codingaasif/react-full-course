//child Component
//child to parent

import React from "react"

function Hooks0012(props){

    let data = {name: 'Asif', email: 'asif@gmail.com', contact: 123456789, address: 'Delhi'} 
    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={()=> props.alert(data)}>Click Me</button>
        </div>
    )
}

export default Hooks0012;