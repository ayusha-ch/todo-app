import React from "react"

function ToDoItem(props) {
    return(
        <div className="todo-item">
            <input type="checkbox" defaultChecked={props.item.completed} onChange={() => console.log("prop changed!")}/>
            <p>{props.item.description} </p>
        </div>
    )
}

export default ToDoItem

{/* <input type="checkbox"></input> */}