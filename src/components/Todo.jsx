import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setList([{ id: Date.now(), text: task }, ...list]);
    setTask("");
  };

  const deleteTask = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h2>Todo App</h2>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          style={{ flex: 1, padding: 10 }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul style={{ marginTop: 20 }}>
        {list.map(item => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10
            }}
          >
            {item.text}
            <button onClick={() => deleteTask(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
