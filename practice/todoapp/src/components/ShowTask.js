import React from 'react'

const ShowTask = ({tasks,setTasks,task,setTask}) => {

    // const tasks = [
    //     {id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030"},
    //     {id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030"},
    //     {id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030"},
    // ]

    const reset=()=>{
        setTasks([]);
    }
    const handleEdit=(id)=>{
        const selectTask = tasks.find(task => task.id === id);
        // console.log(selectTask); // entire object of particuler todo
        setTask(selectTask);
    }
    const handleDelete=(id)=>{
        const deleteTask = tasks.filter(task=>task.id !==id);

        setTasks(deleteTask);
    }
  return (
    <section className="showTask">
    <div className="head">
        <div>
            <span className="title">Todo</span>
            <span className="count">{tasks.length}</span>
        </div>
        <button className="clearAll" onClick={reset}>Clear All</button>
    </div>
    <ul>
        { tasks.map(task => (
            <li key={task.id}>
                <p>
                    <span className="name">{task.name}</span>
                    <span className="time">{task.time}</span>
                </p>
                <i className="bi bi-pencil-square" onClick={()=>handleEdit(task.id)}></i>
                <i className="bi bi-trash" onClick={()=>handleDelete(task.id)}></i>
            </li>
        )) }            
    </ul>
</section>
  )
}

export default ShowTask