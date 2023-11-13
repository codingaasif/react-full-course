import React, { useState } from 'react';
import './TodoStyle.css'
import ToDoMap from './ToDoMap';


function ToDoList(){
    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([])

    const itemEvent = (event)=>{
        setInputList (event.target.value)
    }

    const listItems = ()=>{
        setItems ((prevItems) =>{
            return [...prevItems, inputList]
        })
        setInputList ('')
    }

    const deleteItems = (id) => {
        console.log("delete");

        setItems((prevItems)=>{
            return prevItems.filter((arrElem, index) =>{
                return index !== id;
            })
        })
             
     }

    return(
        <>
        <div className='main-div' >
            <div className='input-container' >
                <h1>ToDoList</h1>
                <br />
                <input type='text' value={inputList} placeholder='Add To List' className='input-box' onChange={itemEvent} />
                <button className='add-btn' onClick={listItems}>+</button>
                <hr />
            <ol>
              {  
                items.map((itemVal, index)=>
                    <ToDoMap key={index} id={index} text={itemVal} onSelect={deleteItems}/>

                    /* return <li>{itemVal}</li> */
                )
              }
            </ol>
            </div>
        </div>
       
    </>
    )
    
}

export default ToDoList;