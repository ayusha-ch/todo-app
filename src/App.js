import { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import todosData from "./todosData"

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                // console.log(todo.completed)
                return todo
            })
            // console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}

export default App;
