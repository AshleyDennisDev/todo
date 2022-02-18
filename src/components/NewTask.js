import { Input } from "antd"
import { useState } from "react"

export default function NewTask() {
    const [newTask, setNewTask] = useState('')

    const taskObject = {
        task: newTask,
    }

    const handleButtonSubmit = () => {
        console.log('sending on API')

        fetch('https://much-todo-ad.uc.r.appspot.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(taskObject),
        })
            .then(res => res.json())
            .then(data => console.log('data was added', data))
            .catch(err => alert(err))
    }
    
    const handleInputText = (event) =>{
        setNewTask(event.target.value)
    }
    console.log("newTask state here ->>", newTask)

    return ( 
        <>
        <h2>Add New Task</h2>
        <Input 
        placeholder="Add New Task" 
        onChange={event => handleInputText(event)}/>

        <button 
        onClick={handleButtonSubmit}
        >
            Send new task to API
            </button>
        </>
    )
}