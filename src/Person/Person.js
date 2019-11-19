import React from 'react';

import './Person.css';

const Person = (props) =>{
    return(
        <div className="Person">
            <h3 onClick={props.click}>My name is {props.name} and i am {props.age} years old</h3>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    ) 
}

// import React, {Component} from 'react'
// class Person extends Component {
//   state ={
//       person:[
//           {name: "MIchael" , age: 45}
//       ]
//   }
//     render(){
//         return(
//             <div>
//                 <h3>My name is {this.state.person[0].name} and i am {this.state.person[0].age} years</h3>
//             </div>
//         )
//     }
// }
export default Person;