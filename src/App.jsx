// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       <Para />
//     </>
//   );
// }
// export default App;

/////////////// ES6 Modules Import Export in React Js #20 ///////////////

// const youtuber = "gareeb clasher";
// const favprog = "React js";

// function myName() {
//   let name = "shivam";
//   return name;
// }
// function myNames() {
//   let names = "shivam singh";
//   return names;
// }
// export default youtuber;
// export { favprog, myName, myNames };

//////////////////// ReactJS Bonus: How to Type Emoji 👍 in VS Code | VS Code Emoji Extension ////////////////
// import React from "react";

// const App = () => {
//   let x = "thapa 😄 ❤️ 👍";
//   return <h1> My name is {x}</h1>;
// };
// export default App;

/////////////////// #13 Handling Events in ReactJs ////////////////
// import React, { useState } from "react";
// const App = () => {
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);
//   const [name, setName] = useState("click Me");
//   const bgChange = () => {
//     // console.log("clicked");
//     let newBg = "#34495e";
//     setBg(newBg);
//     setName("Ouch!! 🐺 ");
//   };
//   const bgBack = () => {
//     setBg(purple);
//     setName("Ayyo!! 😠 ");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onMouseEnter={bgChange} onMouseLeave={bgBack}>
//           {name}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

/////////////////// Forms in ReactJS | React Controlled Vs Uncontrolled Component #34 ///////////////
import React, { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastNameNew] = useState("");
  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };
  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName} {lastNamenew}
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={name}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={inputEventTwo}
              value={lastName}
            />
            <button type="submit">Click Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
