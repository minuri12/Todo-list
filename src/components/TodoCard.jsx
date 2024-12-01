export function TodoCard(props){

    const {index,todos,handledeletetodo}=props;
    const todo=todos[index]
   



    return(
        <div className="card todo-item">

<p>{todo.inpuut}</p>
<div className="todo-buttons">
<button 
disabled={todo.complete}  
onClick={()=>todo.complete=true} 
><h1>Done</h1></button>
<button 
onClick={()=>handledeletetodo(index)}
><h1>Delete</h1></button>
    </div>
        </div>
    )
}