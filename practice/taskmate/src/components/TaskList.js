import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
import "./taskList.css";

export const TaskList = ({ title, info }) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);
  const [show, setShow] = useState(true);
  const styles={
    color:show?'#3D8361':'#be3434',
    border:'2px solid',
    borderColor:show?'#3D8361':'#be3434',
    borderRadius:'5px',
    fontSize:'20px',
    padding:'20px'
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
         <h1 style={styles}>
        Task List - {title}
      </h1>
      {/* <h1 style={{ color: "#be3434", border: "1px solid #be3434" }}>
        Task List - {title}
      </h1> */}
      {/* <p>Info - {info}</p> */}
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
        {show?'Hide':'show'}
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              info={info}
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
            // <li
            //   key={task.id}
            //   className={task.completed ? "completed" : "incomplete"}
            // >
            //   <span>
            //     {task.id} - {task.name}
            //   </span>
            //   <button onClick={() => handleDelete(task.id)} className="delete">
            //     Delete
            //   </button>
            // </li>
          ))}
      </ul>
      {/* <BoxCard res="success"/> */}
      {/* <BoxCard res="alert"/> */}
      {/* <BoxCard res="warning"/> */}

      <BoxCard res="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet adipisicing elit. Perferendis, vel!
        </p>
      </BoxCard>
      <BoxCard res="alert">
        <p className="title">Lorem ipsum </p>
        <p className="description">
          Lorem ipsum dolor, sit amet bore eaque furehenderit assumenda maxime,
          nam perferendis impedit libero odit eius eum aut cum ad, excepturi
          officiis repudiandae. Molestiae, eum cumque?
        </p>
        {/* <p>Lorem dipisicing elit. Accusamus, nulla?</p> */}
      </BoxCard>

      <BoxCard res="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor, excepturi officiis repudiandae. Molestiae, eum
          cumque?
        </p>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla?</p> */}
      </BoxCard>
    </section>
  );
};
