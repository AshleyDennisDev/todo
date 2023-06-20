import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";


export default function TaskList({tasks, setTasks}) {
    useEffect(() => {
        fetch('https://much-todo-ad.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(alert)
    }, [])
    // tasks has all data

    return (
        <List
        bordered 
        size= 'large'
        dataSource={tasks}
        renderItem = { item =>
        <Task item={item} setTasks={setTasks}/>}
        />
    )
}