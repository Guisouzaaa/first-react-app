import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <div>
            <form className="todoForm">
                <input type="text"
                    className="input"
                    value={value}
                    placeholder="New Todo"
                    onChange={e => setValue(e.target.value)} />
                    <button onClick={handleSubmit}>Add new todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
