//About Page

import { Link } from "react-router-dom";

function Router0002(){
    return(
        <div>
            <h1>About Page</h1>
            <p>this is a About Page of our awesome App</p>
            <p>And here we are learning Route Page</p>
            <Link to="/">Go Home</Link>

            {/* <a href="/">Go Home</a> */}
        </div>
    )
}

export default Router0002;