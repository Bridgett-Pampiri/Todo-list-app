import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddItem({ addItem }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState('low'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addItem({ text, dueDate, priority });
      setText('');
      setDueDate(null);
      setPriority('low');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Add item</label>
      <input
        type="text"
        id="item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new activity"
      />
      
      <label htmlFor="dueDate">Due date</label>
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select a due date"
      />
      <fieldset>
        <legend>Priority</legend>
        <label>
          <input
            type="radio"
            value="low"
            checked={priority === 'low'}
            onChange={() => setPriority('low')}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            value="medium"
            checked={priority === 'medium'}
            onChange={() => setPriority('medium')}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            value="high"
            checked={priority === 'high'}
            onChange={() => setPriority('high')}
          />
          High
        </label>
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
