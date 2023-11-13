//Home Page

import { Link } from "react-router-dom";


function Router0001(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>this is a Home Page of our awesome App</p>
            <p>And here we are learning Route Page</p>
            <Link to="/router00001">Go About</Link>
        </div>
    )
}

export default Router0001;