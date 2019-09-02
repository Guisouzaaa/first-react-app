import React from 'react';

const Todo = ({ todo, index, completeTodoItem, deleteTodoItem }) => {
    return (
        <div className="todo"
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {todo.text}
            <div>
                <button onClick={() => completeTodoItem(index)} className="btnComplete">Complete</button>
                <button onClick={() => deleteTodoItem(index)} className="btnDelete">x</button>
            </div>
        </div>
    );
}

export default Todo;