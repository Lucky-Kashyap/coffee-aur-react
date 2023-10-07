import { useState } from 'react'

import './App.css';

function App() {
  const[change,setChange]= useState('rgb(0,0,0)');

  const generateRandom = ()=>{
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    setChange(`rgb(${red},${green},${blue})`);
  }

  // const changeColor = ()=>{
  //   setChange('red');
  // }

  return (
    <div className='text-center w-full h-screen duration-200' style={{backgroundColor:change}}>

<h1 className='text-center text-white font-bold py-4'>BackGround Color : {change}</h1> <br /> <br />
     <div className='fixed flex flex-wrap justify-content gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
<button onClick={generateRandom} className='text-center outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>Click on this to generate Random Color </button>
{/* <button onClick={generateRandom}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>GREEN</button> */}

{/* <button onClick={generateRandom}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>ORANGE</button> */}

     </div>

     
        
    </div>
  )
}

export default App
