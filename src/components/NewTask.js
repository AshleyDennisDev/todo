import { Input } from "antd"
import { useState } from "react"

export default function NewTask({setTasks}) {
    const [newTask, setNewTask] = useState('')

    const handleButtonSubmit = () => {
        if(newTask.trim() === '') {
            return
           }
        const taskObject = {
            task: newTask,
        }

        fetch('https://much-todo-ad.uc.r.appspot.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(taskObject),
        })
            .then(() => {
                setNewTask('')
                fetch('https://much-todo-ad.uc.r.appspot.com/tasks')
                .then(response => response.json())
                .then(data => setTasks(data))
            })
            .catch(err => alert(err))
    }
    
    const handleInputText = (event) =>{
        setNewTask(event.target.value)
    }

    return ( 
        <>
        <Input.Search 
        placeholder="Add New Task" 
        value={newTask}
        enterButton= 'Add Task'
        size= 'large'
        onSearch ={handleButtonSubmit}
        onChange={handleInputText}/>
        </>
    )
}