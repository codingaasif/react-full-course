//Nested List with Nested Array

import React from "react";
import { Table } from "react-bootstrap";

function Hooks008() {
  const users = [
    {
      no: 1,
      name: "Asif",
      email: "asif@gmail.com",
      address: [
        { Hn: "102", city: "Delhi", country: "India" },
        { Hn: "182", city: "Noida", country: "India" },
        { Hn: "120", city: "Purnia", country: "India" },
        { Hn: "134", city: "Gurgon", country: "India" },
      ],
    },

    {
      no: 2,
      name: "Prity",
      email: "prity@gmail.com",
      address: [
        { Hn: "222", city: "Bangalore", country: "India" },
        { Hn: "123", city: "Hoskote", country: "India" },
        { Hn: "192", city: "Gurgaon", country: "India" },
        { Hn: "109", city: "Mumbai", country: "India" },
      ],
    },

    {
      no: 3,
      name: "Vishal",
      email: "vishal@gmail.com",
      address: [
        { Hn: "111", city: "Delhi", country: "India" },
        { Hn: "234", city: "Nagar", country: "India" },
        { Hn: "198", city: "Katihar", country: "India" },
        { Hn: "100", city: "Patna", country: "India" },
      ],
    },

    {
      no: 4,
      name: "Ankit",
      email: "ankit@gmail.com",
      address: [
        { Hn: "234", city: "Jaipur", country: "India" },
        { Hn: "465", city: "Rajasthan", country: "India" },
        { Hn: "635", city: "Jodhpur", country: "India" },
        { Hn: "987", city: "Bhagalpur", country: "India" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Nested List with Nested Array</h1>
      <Table variant="dark" striped>
        <tbody>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>

          {users.map((items) => (
            <tr>
              <td>{items.no}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>

              
                <td>
                <Table variant="dark" striped>
              <tbody>
                  {items.address.map((data) => (
                    <tr>
                      <td>{data.Hn}</td>
                      <td>{data.city}</td>
                      <td>{data.country}</td>
                    </tr>
                  ))}
                  </tbody>
                  </Table>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Hooks008;
