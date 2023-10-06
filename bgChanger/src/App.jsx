import { useState } from 'react'

import './App.css';

function App() {
  const[change,setChange]= useState('purple');

  // const changeColor = ()=>{
  //   setChange('red');
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:change}}>

     <div className='fixed flex flex-wrap justify-content gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
<button onClick={()=>setChange('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>RED</button>
<button onClick={()=>setChange('green')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>GREEN</button>

<button onClick={()=>setChange('orange')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>ORANGE</button>

     </div>

     
        
    </div>
  )
}

export default App
