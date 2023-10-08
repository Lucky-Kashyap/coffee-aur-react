import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <h1>Create react app</h1>
      {React.createElement('h2',{},'Heading2')}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis ad saepe eum! Ipsa amet nobis soluta. Ea aspernatur, culpa repellendus iste, atque optio, saepe laboriosam tempore sed quo non.</p>
      <img width={'400px'} src="https://images.unsplash.com/photo-1576248004793-2c21b24b7bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
    </div>
  );
}

export default App;
