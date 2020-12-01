import React from "react"

function ToDoItem(props) {
    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                defaultChecked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.description} </p>
        </div>
    )
}

export default ToDoItem