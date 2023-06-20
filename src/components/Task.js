import { useState, useEffect } from "react";
import { List, Button, Checkbox } from "antd";

export default function Task ({item, tasks, setTasks}) {
    const [itemStyle, setItemStyle] = useState({});
    useEffect(() => {
      if (item.done) {
        setItemStyle({
          color: "grey",
          display: "flex",
          width: "auto",
          textDecoration: "line-through",
        });
      } else {
        setItemStyle({
          color: "black",
          display: "flex",
          width: "auto",
          textDecoration: "none",
        });
      }
    }, [item]);

    const handleToggleTaskDone = () => {
      fetch(`https://much-todo-ad.uc.r.appspot.com/tasks/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: !item.done }),
      })
        .then(() => {
          fetch("https://much-todo-ad.uc.r.appspot.com/tasks")
            .then((response) => response.json())
            .then((data) => setTasks(data));
        })
        .catch(alert);
    };

    const handleDelete = () => {
        fetch(`https://much-todo-ad.uc.r.appspot.com/tasks/${item.id}`, {
    method: 'DELETE'
    })
    .then(() => {
        fetch('https://much-todo-ad.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
    })
    .catch(alert)
    }
        


    return (
      <>
        <List.Item style={itemStyle}>
          <Checkbox
            onClick={handleToggleTaskDone}
            checked={item.done}
          ></Checkbox>
          {item.task}
          <Button type='dashed' danger onClick={()=>handleDelete(item)}>Delete</Button>
        </List.Item>
      </>
    );
}