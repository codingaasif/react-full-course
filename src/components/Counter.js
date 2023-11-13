import React, { useState } from 'react'



function Counter(){
    const [count, setCount] = useState(0)


    function incNum(){
        setCount(count + 1)
    };

    function decNum(){
        if(count > 0){
            setCount(count - 1)
        }else{
            alert("you cress the limit")
            setCount(0);
        }
        
    };

    return(
        <>
            <h1>Counter</h1>
            <h2> {count} </h2>

            <button onClick={incNum}> Inrement </button>
            <br />
            <button onClick={decNum}> Decrement </button>
        </>
    )
}






export default Counter;