import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem('data');
    if (savedTasks) {
      this.setState({ tasks: JSON.parse(savedTasks) });
    }
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addTask = () => {
    const { inputValue, tasks } = this.state;
    if (inputValue.trim() === '') {
      alert('You must write something in the input field');
      return;
    }
    const newTask = { text: inputValue, completed: false };
    this.setState({
      tasks: [...tasks, newTask],
      inputValue: '',
    });
  };

  toggleTaskCompletion = (index) => {
    const { tasks } = this.state;
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: newTasks });
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div style={styles.body}>
        <div style={styles.container}>
          <h1>To-Do List</h1>
          <div style={styles.row}>
            <input
              type="text"
              style={styles.input}
              value={inputValue}
              onChange={this.handleInputChange}
              placeholder="Add your tasks"
            />
            <button
              style={styles.button}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
              onClick={this.addTask}
            >
              Add
            </button>
          </div>
          <ul style={styles.list}>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={task.completed ? { ...styles.listItem, ...styles.checked } : styles.listItem}
                onClick={() => this.toggleTaskCompletion(index)}
              >
                {task.text}{' '}
                <span
                  style={styles.span}
                  onMouseOver={(e) => (e.currentTarget.style.color = styles.spanHover.color)}
                  onMouseOut={(e) => (e.currentTarget.style.color = styles.span.color)}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.deleteTask(index);
                  }}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '70%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    marginLeft: '10px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checked: {
    textDecoration: 'line-through',
    color: '#6c757d',
  },
  span: {
    color: '#dc3545',
    cursor: 'pointer',
  },
  spanHover: {
    color: '#c82333',
  },
};
