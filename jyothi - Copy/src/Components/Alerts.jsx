// import React from "react";
// import { Card, Container } from "react-bootstrap";
// // import{Alert}from 'rect-bootstrap'
// // import Alert from 'react-bootstrap/Alert';
// import Badge from 'react-bootstrap/Badge';
// function Alerts() {
//     const[show,setShow]=useState(true);
//     if(show){
//         return( 
//                 <>

// import { Alert } from "bootstrap"
// import { useContext } from "react";

               
//                 <Badge>hkhj,mjbm</Badge>
                
//                 </>
//               );
//       }
//       else{
//         return(
//                 <div>
//                 <button onClick={()=>{setShow(true)}}>open</button>
//                 </div>
//         )
//       }
//     }
        
//         // <div>
//         //     <Container><Alert>this a alert</Alert></Container>
//         //     <Card>
//         //         </Card>    


//         //</div>
//         //)}
        
    

// export default Alerts
// import { useState } from 'react';
// import Newcom from "./Newcom";
// const  Alerts=({chnage})=> {
//     const [current,setcurrent]=useState('')
//     const [old,setnew]=useState(false)
//     const handle=(e)=>{
//       const value=e.target.value
//   setcurrent(value)
//   chnage(value)
//   console.log(value)
//     }
//     function handles(e)
//     {
//      setnew('true')
//     }
//   return (

// <div>
// {!old ? (
//   <>
//     <h1>Hello World {current}</h1>
//     <input type="text" onChange={handle}></input>
//     <button onClick={handles}>Submit</button>
//   </>
// ) : (
//   <Newcom newvalue={current} /> // Render Newcom when button is clicked
// )}
// </div>

//   )
//   }
//   export default Alerts;
// import React, { useContext } from 'react';
// import { Data, Data1 } from './App';

// const Alerts = () => {
//   // Consume context values
//   const name = useContext(Data);
//   const age = useContext(Data1);

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>Hello, world! Age: {age}</h2>
//     </div>
//   );
// };

// export default Alerts;
import React, { useContext } from 'react';
import { Todoitemscontext } from '../stor/Todoitemscontext';
// import App from '../App';
const Alerts = () => {
  const { theme, toggle } = useContext(Todoitemscontext);
return(
  <div>
 <button
      onClick={toggle}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#000000' : '#ffffff',
        color: theme === 'light' ? '#ffffff' : '#000000',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  </div>
)
}
export default Alerts