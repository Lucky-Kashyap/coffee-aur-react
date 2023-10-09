import "./App.css";
import React, { useState } from "react";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Footer from "./components/Footer";

function App() {
  const [tasks,setTasks]=useState([{id:5271,name:"Record Lectures",completed:true},{id:7825,name:"Edit React Lectures",completed:true},{id:8489,name:"Watch Lectures",completed:false}]);

  const[show,setShow]= useState(true);
  
  // let count=0;
  // const [count,setCount] = useState(0);

  // const username = "Divyanshu Kashyap";

  // const add = ()=>{
  //   // count +=1;
  //   // setCount(count+1);
  //   // setCount(count+1);
  //   // setCount(count+1);    // it holds the value

  //   setCount(count=>count+1);
  //   setCount(count=>count+1);
  //   setCount(count=>count+1);
  //   // console.log(count);
  // }
  // const sub = ()=>{
    
  //   setCount(count-1);
  //   console.log(count);
  // }
  // const reset = ()=>{
  //   setCount(0);
  // }

  // delete task

  const handleDelete = (id)=>{
    const updatedTasks = tasks.filter((task) => task.id !== id);
    // this.setState({ tasks: updatedTasks });
    setTasks(updatedTasks);
  }
  return (
    <div className="App">
      {/* <h1>Create react app </h1> */}
      {/* <div className="box">
        <p>{count}</p>
        <button onClick={add} className="add">Add</button>
        <button onClick={sub} className="sub">Sub</button>
        <button onClick={reset} className="sub">Reset</button>
      </div> */}

      {/* <Header/>
      <Card/>
      <Footer/> */}
      {/* {React.createElement('h2',{},'Heading2')}
      <h3>Created By : {username}</h3> */}

<h1>Task List</h1>
<ul>
<button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
  {
    show &&  
      tasks.map(item=>(
        <li key={item.id} className={item.completed ? "completed":"incomplete"}>
          <span>{item.id} - {item.name}</span>
          <button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button>
        </li>
      ))
    
  }
  {/* {
    tasks.map(item=>(
      <li key={item.id}>
        <span>{item.id} - {item.name}</span>
        <button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button>
      </li>
    ))
  } */}
</ul>
    </div>
  );
}

export default App;
