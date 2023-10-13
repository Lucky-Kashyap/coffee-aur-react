import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const[tasks,setTasks] = useState([]);
  return (
    <div className='App'>
     <Header/>
     <AddTask tasks={tasks} setTasks={setTasks}/>
     <ShowTask tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
