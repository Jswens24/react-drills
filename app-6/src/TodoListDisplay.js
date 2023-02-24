import React from 'react';

const TodoListDisplay = ({ todoList }) => {

    return (
        <div>
            {todoList.map((item, index) => {
                return <h3>{item}</h3>
            })}
        </div>
    )
};

export default TodoListDisplay;