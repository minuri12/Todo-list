export function Header(props){

    const {todos}=props;
    const todolength=todos.length
    const istaskplural=todolength!=1
    const tasksortask=istaskplural? "tasks":"task"


    return(
        <header>
            <h1 className="text-gradient">You have {todolength} open {tasksortask}</h1>
        </header>
    )
}