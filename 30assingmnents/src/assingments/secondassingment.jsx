import React, { useState, useEffect } from 'react';


function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('You must write something');
    } else {
      setTasks([...tasks, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="todoapp">
        <h2>
          TO-DO List <img src="./pencil-square.svg" alt="" />
        </h2>

        <div className="row">
          <input
            type="text"
            placeholder="Add your text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul id="list-container">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.checked ? 'checked' : ''}
              onClick={() => toggleTask(index)}
            >
              {task.text}
              <span onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
