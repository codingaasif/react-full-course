//Child forwardRef

import React, {forwardRef} from "react";

function Hooks0015(props, handle){
    return(
        <div>
            <h1>Child forwardRef</h1>
            <input type="text" ref={handle}/>
        </div>
    )
}

export default forwardRef(Hooks0015);