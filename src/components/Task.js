import { useState, useEffect } from "react";
import { List } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

export default function Task ({item, setTasks}) {
    const [itemStyle, setItemStyle] = useState({})
    useEffect(() => {
        if(item.done){
            setItemStyle({ color: 'grey', textDecoration: 'line-through'})
        }else{
                setItemStyle({color:'black', textDecoration: 'none'})
        }
            }, [item])
    const handleToggleTaskDone = () => {
// check if task is done or not
// get Task ID
// call api -- patch: `/tasks/${item.id}` send {done: !item.done}
fetch(`https://much-todo-ad.uc.r.appspot.com/tasks/${item.id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({done: !item.done})
})
    .then(() => {
        fetch('https://much-todo-ad.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
    })
    // THEN: fetch our tasks
// THEN: setTasks(data)
    .catch(alert)

    }
    return (
        <>
    <List.Item  style={itemStyle} >      
    <Checkbox style={{margin:'10px'}}onClick={handleToggleTaskDone} checked={item.done}></Checkbox>
{item.task}</List.Item>
    </>
    )
}