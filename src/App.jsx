import { useState, useEffect } from 'react'
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { Todolist } from './components/Todolist';
import { Todoinput } from './components/Todoinput';


function App() {
  
  const [todos,settodos]=useState([{inpuut:"Add my first Todo" , complete:true}])
  const [selecttab,setselecttab]=useState("all")

  function handleaddtodo(newtodo){
    const newtodolist=[...todos,{inpuut:newtodo,complete:false}]
    settodos(newtodolist)
    handleSaveData(newtodolist)

  }


  function handledeletetodo(index){
    let newtodolist=todos.filter((val,valindex)=>{
      return (valindex!=index)
    })

    settodos(newtodolist)
    handleSaveData(newtodolist)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){
      return
    }
    let db=JSON.parse(localStorage.getItem('todo-app'))
    settodos(db.todos)
  },[])

  return (

  
    
      <>
        <Header todos={todos}/>
        
        <Tabs todos={todos}  setselecttab={setselecttab} selecttab={selecttab}/>
        <Todoinput handleaddtodo={handleaddtodo}/>
        <Todolist todos={todos} selecttab={selecttab} handledeletetodo={handledeletetodo}/>
       
       </>
   
  )
}

export default App
