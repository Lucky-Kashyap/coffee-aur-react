import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasks={tasks}
        setTasks={setTasks}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
