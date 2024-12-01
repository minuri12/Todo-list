import { TodoCard } from "./TodoCard";

export function Todolist(props) {
    
    const {todos,selecttab,handledeletetodo}=props

    const tab=selecttab
    const filtertodolist=tab=="all"?todos:tab=="Open"?todos.filter(val=>!val.complete):todos.filter(val=>val.complete);

    
    return(
        <>
           {
            filtertodolist.map((todo,index)=>{
                return(
                    <TodoCard key={index} index={index} {...props}/>

                )
            })
            
           }
        </>
    )
}