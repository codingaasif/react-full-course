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
            alert("you cross the limit")
            setCount(0);
        }
        
    };

    return(
        <div className='App'>
            <h1>Counter</h1>
            <h2> {count} </h2>

            <button onClick={incNum}> Increment </button>
            <br /><br />
            <button onClick={decNum}> Decrement </button>
        </div>
    )
}

export default Counter;