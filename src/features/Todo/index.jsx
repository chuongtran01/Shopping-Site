import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat',
        },
        {
            id: 2,
            title: 'Play',
        },
        {
            id: 3,
            title: 'Sleep',
        },

    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;