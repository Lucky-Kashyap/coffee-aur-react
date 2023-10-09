import './taskCard.css';
import styles from './TaskCard.module.css';

const TaskCard = ({ task, handleDelete,info }) => {
    return (
        <div className='taskCard'>
      <li className={`${task.completed ? "completed" : "incomplete"}`}>
        {/* <p>Info - {info}</p> */}
          <span className={styles.title}>{task.id} - {task.name} - {info}</span>
          <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
      </li>
      </div>
    )
  }

  export default TaskCard;