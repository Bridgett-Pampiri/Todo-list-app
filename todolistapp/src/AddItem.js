
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddItem({ AddItem }) {
  const [text, setText] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setShowDatePicker(true); // Show the date picker on submit
    }
  };

  const handleDateSubmit = () => {
    if (text.trim()) {
      AddItem({
        text,
        dueDate
      });
      setText('');
      setDueDate(null);
      setShowDatePicker(false); // Hide the date picker after submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Add item</label>
        <input
          type="text"
          id="item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new activity"
        />
        <button type="submit">Add</button>
      </form>

      {showDatePicker && (
        <div className="date-picker-modal">
          <h3>Select Due Date</h3>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a due date"
            autoFocus
          />
          <button onClick={handleDateSubmit}>Submit Date</button>
          <button onClick={() => setShowDatePicker(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default AddItem;
