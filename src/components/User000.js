import React, {Component} from 'react';


export function User000() {
  return (
    <div className="App">
      <h1> Hello Users </h1>
      <p>This is React Tutorial</p>
      <p>{30 + 20}</p>
    </div>
  );
}




class Users1 extends Component {
    render(){
        return (
            <h1 className="Text">Hello Class Component</h1>
        )
    }
}





export function Users2(){
    return React.createElement('div', null, "Hello World")
}




export default Users1;
