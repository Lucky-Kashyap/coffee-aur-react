import "./App.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {

  const username = "Divyanshu Kashyap";

  return (
    <div>
      <h1>Create react app </h1>
      <Header/>
      <Card/>
      <Footer/>
      {/* {React.createElement('h2',{},'Heading2')}
      <h3>Created By : {username}</h3> */}
    </div>
  );
}

export default App;
