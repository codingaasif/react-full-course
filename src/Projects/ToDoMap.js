import React from "react";

const ToDoMap = (props) => {

    return (
        <>
            <div className="item-style">
                <li>{props.text}</li>
                 <i className="fa-solid fa-trash" onClick={()=>{
                    props.onSelect(props.id)
                 }}></i>
            </div>
        </>
    )

}

export default ToDoMap;