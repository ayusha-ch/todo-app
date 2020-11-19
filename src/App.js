import { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import todosData from "./todosData"

// function App() {
    
//     const todosComponent = todosData.map(task => <ToDoItem key={task.id} task={task} />)

//   return (
//     <div className="todo-list">
//         {todosComponent}
//     </div>
//   );
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}

export default App;
