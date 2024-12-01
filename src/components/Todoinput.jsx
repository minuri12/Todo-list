import React from 'react'
import { useState } from 'react'



export function Todoinput(props){

    const {handleaddtodo}=props
    const [inputvalue, setinputvalue] = useState('');

    





    return(
        <div className="input-container">
           <input value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} className="todo-input" type="text" placeholder="What needs to be done?" />
           <button className="todo-button" onClick={()=>{if (!inputvalue) { return } handleaddtodo(inputvalue); setinputvalue('')}}>Add</button>
        </div>
    )
}