//  Handle Obj with List

import React from "react";

function Hooks006() {
  const students = [
    { no: 1, name: "Asif", email: "asif@gmail.com", add: "Delhi", mob: 98743 },
    { no: 2, name: "Prity", email: "prity@gmail.com", add: "Noida", mob: 11111 },
    { no: 3, name: "Vishal", email: "vishal@gmail.com", add: "Gurgon", mob: 22222 },
    { no: 4, name: "Ankit", email: "ankit@gmail.com", add: "Bad", mob: 33333 },
    { no: 5, name: "Sama", email: "sam@gmail.com", add: "Delhi", mob: 12345 },
    { no: 6, name: "Chikki", email: "chikki@gmail.com", add: "Mumbai", mob: 98765 },
    { no: 7, name: "Rahul", email: "rahul@gmail.com", add: "Noida", mob: 12345 },
  ];

  return (
    <div className="App">
      <h1>Handle Obj with List</h1>

      <table style={{margin: "auto"}} border="2">

      <tr style={{color: "blue"}}>
            <td>No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Mobile</td>
        </tr>

      {     students.map((data) => (
        <tr>
            <td>{data.no}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.add}</td>
            <td>{data.mob}</td>
        </tr>
          
    ))}

    </table>

    </div>
  );
}

export default Hooks006;
