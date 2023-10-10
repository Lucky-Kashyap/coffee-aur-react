import { useState } from 'react';
import './AddTask.css';

const AddTask = ({task,setTask}) => {
    const [taskValue,setTaskValue] = useState(""); 
    const [progress,setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(typeof Boolean(progress));

        const tasks = {
            id:Math.floor(Math.random() * 10000),
            name:taskValue,
            completed:Boolean(progress)
        }
        setTask([...task,tasks]);

        // console.log(task);
        handleReset();
    }

  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="task">Task Name:</label> */}
            {/* <input type="text" onChange={(e) => setTaskValue(e.target.value)} name="task" id='task' autoComplete='off' placeholder='Task Name' /> */}
            <input type="text" value={taskValue} onChange={handleChange} name="task" id='task' autoComplete='off' placeholder='Task Name' />

            <select value={progress} onChange={(e)=>setProgress(e.target.value)}>
                <option value='false'>Pending</option>
                <option value='true'>Completed</option>
            </select>
            <button type="submit">Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        {/* <p>{taskValue.length}</p>  */}
    </section>
  )
}

export default AddTask;