import React from 'react';
import ListItem from './ListItem';

const DisplayList = ({ todoList }) => {

    return (
        <div>
            {todoList.map((todo) => {
                return (
                    <ListItem todo={todo} />
                )
            })}
        </div>
    )
};

export default DisplayList;