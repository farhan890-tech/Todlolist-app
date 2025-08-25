import React, { useState } from "react";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  const toggleComplete = (idx) => {
    setTasks(
      tasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>

      <div className="inputGroup">
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className={`listItem ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <span>
              <button
                className={`button ${
                  task.completed ? "undoButton" : "completeButton"
                }`}
                onClick={() => toggleComplete(idx)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="button deleteButton"
                onClick={() => deleteTask(idx)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
