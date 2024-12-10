import React from 'react';
import { connect } from 'react-redux'; // Corrected the import statement

const TodoList = ({ tasks, dispatchAddTodo }) => {
    // Component logic here, such as rendering the list of tasks
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button onClick={() => dispatchAddTodo('New Task')}>
                Add Todo
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    tasks: state.todos, // Assumes 'todos' is the state key for the list of tasks
});

const mapDispatchToProps = dispatch => ({
    dispatchAddTodo: (text) => dispatch({ 
        type: 'ADD_TODO', // Assumes 'ADD_TODO' is the correct action type in your reducer
        payload: text, // Corrected the key from 'text' to 'payload' to match typical Redux action convention
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);  
