//List with Bootstrap and Unique Key

import React from "react";
import {Table} from 'react-bootstrap'


function Hooks007(){

        const users = [
          { no: 1, name: "Asif", email: "asif@gmail.com", id: 101, company: "Softmind" },
          { no: 2, name: "Prity", email: "prity@gmail.com", id: 102, company: "Softmind" },
          { no: 3, name: "Vishal", email: "vishal@gmail.com", id: 103, company: "Softmind" },
          { no: 4, name: "Ankit", email: "ankit@gmail.com", id: 104, company: "Softmind" },  
    ]
    return(
        <div className="App">
            <h1>List with Bootstrap and Unique Key</h1>

            <Table striped variant="dark">
            <tbody>
                <tr>
                    <td>No.</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>ID</td>
                    <td>Company</td>
                </tr>

            {
                users.map((item, i)=>
               // condition
               item.company === 'Softmind' ?
                <tr key={i}>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.id}</td>
                    <td>{item.company}</td>
                </tr>
                :null
                )
            }
            </tbody>
            </Table>
        </div>
    )
}


export default Hooks007;