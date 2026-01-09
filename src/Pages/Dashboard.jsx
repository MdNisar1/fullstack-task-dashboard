import { useState } from "react";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
