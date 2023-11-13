import React, { useState } from "react";


function User009(){
    const [logedIn, setLogedIn] = useState(2)


        return(
            <div className="App">
                {logedIn == 1? <h1>Welcome Asif</h1> :logedIn == 2? <h1>Welcome Guest 1</h1> : <h1>Welcome Guest 2</h1>}
            </div>

        )
}


export default User009;