import { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
    const [taskValue,setTaskValue] = useState(""); 

  return (
    <section className='addtask'>
        <form>
            {/* <label htmlFor="task">Task Name:</label> */}
            <input type="text" onChange={(e) => setTaskValue(e.target.value)} name="task" id='task' autoComplete='off' placeholder='Task Name' />
            <button type="submit">Add Task</button>
        </form>
        <p>{taskValue.length}</p> 
    </section>
  )
}

export default AddTask;