const TaskCard = ({ task, handleDelete,info }) => {
    return (
      <li className={task.completed ? "completed" : "incomplete"}>
        {/* <p>Info - {info}</p> */}
          <span>{task.id} - {task.name} - {info}</span>
          <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
      </li>
    )
  }

  export default TaskCard;