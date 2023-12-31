import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import "./App.css";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask task={tasks} setTask={setTasks} />
        <TaskList task={tasks} setTask={setTasks} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
