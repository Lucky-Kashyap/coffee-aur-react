import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const img = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  // let myObj = {
  //   username:'divyanshu',
  //   ag:23
  // }

  // let newArr = [1,2,3,4];

  return (
    <>
     <h1 className="text-3xl bg-green-500 p-4 rounded-lg font-bold mb-4">
      Hello world!
    </h1>
   
<Card username="Divyanshu" btnText ="click me"/>
<Card username="lucky"  />

    {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-mediu">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  )
}

export default App
