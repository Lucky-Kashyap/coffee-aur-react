import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";


// document.querySelector('#app').innerHTML = `
//   <div>
//    Hello
//   <App />
//   </div>`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


