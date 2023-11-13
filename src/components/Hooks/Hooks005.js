//Handle Array with List

import React from "react";


function Hooks005(){
    const students = ['Asif', 'Prity', 'Nitish', 'Aakansh', 'Shishu', 'Vishal']


//     students.map((item)=>{
//         console.log(item)

// })

//     for(let i=0; i<students.length; i++){
//         console.log(students[i]);
//     }


    return (
        <div className="App">
            <h1>Handle Array with List</h1>
            {
                students.map((data) =>
                    <h1>Name is : {data}</h1>
                )
            }
            
        </div>
    )
}

export default Hooks005;