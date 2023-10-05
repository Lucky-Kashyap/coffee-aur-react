import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// import {jsx as _jsx} from "react/jsx-runtime.js";

// document.querySelector('#app').innerHTML = `
//   <div>
//    Hello
//   <App />
//   </div>`

function MyApp() {
  return (
    <div>
      <h3>Custom React ...!</h3>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to open google
  </a>
);

const anotherUser = "Divyanshu";

const reactElement = React.createElement(
  "a",
  {
    target: "_blank",
    href: "https://www.facebook.com",
  },
  "click me to visit facebook",
  anotherUser
);

// ReactDOM.createRoot(document.getElementById('root')).render(

// reactElement,
// )

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
