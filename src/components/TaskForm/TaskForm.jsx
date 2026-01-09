import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
