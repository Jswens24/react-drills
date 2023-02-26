import React, { useState } from 'react';

const NewTask = ({ todoList, setTodoList }) => {
    const [userInput, setUserInput] = useState('');

    const inputHandler = (e) => {
        setUserInput(e.target.value);
    };

    const addTaskHandler = () => {
        setTodoList([...todoList, userInput])

        console.log(todoList);
    }

    return (
        <div>
            <input onChange={inputHandler} placeholder='enter todo' />
            <button onClick={addTaskHandler}>Add</button>
        </div>
    )
};

export default NewTask;