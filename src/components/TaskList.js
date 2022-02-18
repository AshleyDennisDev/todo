import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";


const fakeTasks = [
    {id: 1, task: 'Buy Milk', done: false},
    {id: 2, task: 'Brew Beer', done: false},
    {id: 3, task: 'Buy Trulys', done: true},
    {id: 4, task: 'Drink Wine', done: false},
    {id: 5, task: 'Buy Paper Towels', done: false}
]


export default function TaskList() {
    const [tasks, setTasks] = useState('')
    useEffect(() => {
        // Get data from API
        fetch('https://much-todo-ad.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(alert)
    }, [])
    // tasks has all data

    // we need to pass this TASKS => data to the List component
    return (
        <List
        bordered
        dataSource={tasks}
        renderItem = { item => <Task item = {item}/>}
        />
    )
}