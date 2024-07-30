import React, { useState } from 'react';
import './App.css';

const getColor = (deadline) => {
  const hoursLeft = (new Date(deadline) - new Date()) / 36e5;

  if (hoursLeft < 24) return 'red';
  if (hoursLeft < 48) return 'yellow';
  return 'green';
};

const Task = ({ task, onDelete, onEdit, onComplete }) => (
  <div className="task" style={{ backgroundColor: getColor(task.deadline) }}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onComplete(task.id)}
    />
    <span className={task.completed ? 'completed' : ''}>{task.text}</span>
    <span className="deadline">({task.deadline})</span>
    <button onClick={() => onEdit(task.id)}>Edit</button>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDeadline, setNewDeadline] = useState('');

  const addTask = () => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([
      ...tasks,
      { id, text: newTask, deadline: newDeadline, completed: false },
    ]);
    setNewTask('');
    setNewDeadline('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setNewTask(task.text);
    setNewDeadline(task.deadline);
    deleteTask(id);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="datetime-local"
          value={newDeadline}
          onChange={(e) => setNewDeadline(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
            onComplete={completeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

