import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";
import Checkbox from "antd/lib/checkbox/Checkbox";


export default function TaskList({tasks, setTasks}) {
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
        size= 'large'
        dataSource={tasks}
        renderItem = { item =>
        <Task item={item} setTasks={setTasks}/>}
        />
    )
}