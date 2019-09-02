import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
    const [todos, setTodos] = useState([{
        text: "React todo list",
        completed: false
    }]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }

    const completeTodoItem = index => {
        const newTodos = [...todos];
        if (newTodos[index].completed) {
            newTodos[index].completed = false;
        } else {
            newTodos[index].completed = true;
        }

        setTodos(newTodos);
    }

    const deleteTodoItem = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <h1>Lista de Tarefas - React.Js</h1>
            <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} completeTodoItem={completeTodoItem} deleteTodoItem={deleteTodoItem} />
                ))}
            </div>
        </div>
    );
}

export default App;