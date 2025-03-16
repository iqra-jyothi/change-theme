// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { Alert } from "bootstrap";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// import React from 'react';
// // import {Alert ,Card,Container}
// // import Alerts from './Components/Alerts';
// // import Button from 'react-bootstrap/Button'
// import Alerts from './Components/Alerts';
// import Button from 'react-bootstrap/Button'


// function App(){
//   return(

//   <div>
//     <p>hello world</p>
//     <Alerts></Alerts>
//     </div>
// )

// }
// export default App
// import { useState } from 'react';
// import Alerts from './Components/Alerts';
// import './App.css'
// function App() {
//   const [count, setCount] = useState("");
//   const chnage=(value)=>{
// setCount(value)
//   }
// return(
//   <div>
//     <h2>new page{count}</h2>
//     <Alerts chnage={chnage}></Alerts>
//   </div>
// )
// }
// export default App;
// import { useRef, useState } from 'react';
// import React from 'react';
// function App(){
//   const refememt=useRef("")
//   const [name,setname]=useState("vashita")
//   console.log(refememt)
//   const handle=(e)=>{
//     const value=e.target.value
//     console.log(value)
// setname(value)

//   }
//   const reset=()=>{
//     setname("")
//     refememt.current.focus()
//   }
//   const handleinput=()=>{
// refememt.current.style.color="blue";
// refememt.current.value="helo";
//   }
//   return(
//     <div>
//       <h1>learning use ref</h1>
//       <input ref={refememt} value={name} onChange={handle}type="text" />
//       <button onClick={reset}>reset</button>
//       <button  onClick={handleinput}>color</button>
//     </div>
//   );
// }
// export default App\
// import { Alert } from 'bootstrap';
// import { createContext, useState } from 'react';
// import React, { useRef } from 'react';
// import './Carousel.css'; // Style your carousel

// const App = () => {
//    const refememt=useRef("");
//    const [time,settime]=useState(0)
// const start=()=>{
//   // if(!refememt.current)
//   // {
//     refememt.current=setInterval(()=>{
//       settime((pre)=>pre+1)
//     })
  //   elseif(refememt.current)
  //     {
  //       refememt.current=setInterval(()=>{
  //         settime((pre)=>pre+1)
  //       })
  // }

// }
  

// const stop=()=>{
//   if(refememt.current)
//   {
//     clearInterval(refememt.current)
//   }
// }
//     return (
//        <div>
//         <button onClick={start}>start</button>
//         <p>the time is {time} </p>
//         <button onClick={stop}>stop</button>
//        </div>
//     );
// };

// export default App;
// import Alerts from './Components/Alerts';
// import { createContext} from 'react';
// export{data,data1}
// const data=useContext();
//   const data1=useContext();
// function App(){
  
//   const name="jyothi"
//   const age=25;
//   return(
//     <div>
//       <data.provider value={name}>
//         <data1.provider value={age}>
// <Alerts></Alerts>
//         </data1.provider>
//       </data.provider>
//     </div>
//   )
// }
// export default App;
// export{data,data1}


// import { Todoitemscontext } from "./stor/Todoitemscontext";

import { Todoitemscontext } from "./stor/Todoitemscontext";
import Alerts from "./Components/Alerts";

import {useState}from 'react'
function App()
{
  const [theme,settheme]=useState('light');
  const toggle=()=>{
    settheme((prethem)=>{const newthem=prethem==='light'?'dark':'light'
      return newthem;
    })
    
  }
  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    height: '100vh',
    width:'100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow:'hidden'
  };
  return(
    <center style={appStyle}>
    <Todoitemscontext.Provider value={{theme,toggle}}>
        <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
    <Alerts></Alerts>
   </Todoitemscontext.Provider>
   </center>
  )
}
export default App;