import { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
    const [taskValue,setTaskValue] = useState(""); 

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
    }

  return (
    <section className='addtask'>
        <form>
            {/* <label htmlFor="task">Task Name:</label> */}
            {/* <input type="text" onChange={(e) => setTaskValue(e.target.value)} name="task" id='task' autoComplete='off' placeholder='Task Name' /> */}
            <input type="text" value={taskValue} onChange={handleChange} name="task" id='task' autoComplete='off' placeholder='Task Name' />

            <button type="submit">Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        {/* <p>{taskValue.length}</p>  */}
    </section>
  )
}

export default AddTask;