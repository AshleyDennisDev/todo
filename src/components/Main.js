import TaskList from "./TaskList"
import NewTask from "./NewTask"

export default function Main(){
    return(
        <section>
            <h1>Much To Do</h1>
            <TaskList/>
            <NewTask/>
        </section>
    )
}