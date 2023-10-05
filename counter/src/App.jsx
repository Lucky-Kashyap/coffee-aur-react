import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount]=useState(0);

  let counter = 5;

  // const addValue = ()=>{
  //   // console.log('add value function called');
  //   // counter = counter + 1;
  //   // console.log('add value called',counter);
  //   setCount(count+1);
  // }

  const addValue = () => {
    //counter = counter + 1
    setCount(prevCount => prevCount + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>Coffee aur react</h1>
      <h3>Counter value : {count}</h3>

      <button onClick={addValue}>Add value {count}</button>

      

      <button
      onClick={removeValue}
      >remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
