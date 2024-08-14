import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('data');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('You must write something');
      return;
    }
    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-Do List</h1>
        <div className="row">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add your task" />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'checked' : ''} onClick={() => toggleTaskCompletion(index)}>
              {task.text} <span onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
