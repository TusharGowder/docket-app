import React, { useState } from 'react'
import './todo.css'

function TodoForm() {
    const [task, settask] = useState('')
    const [taskList, settaskList] = useState([])
    const handleChange = e => {
        settask(e.target.value)
    }
    const addTask = e => {
        e.preventDefault();
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted:false

            };
            settaskList([...taskList, taskDetails]);
        }
    };
    const ondelete=(e,id)=>{
       e.preventDefault();
       settaskList(taskList.filter((t)=>t.id !== id))

    }
    const onComplete=(e,id)=>{
        e.preventDefault();
        const element =taskList.findIndex((elem)=>elem.id === id);
       const  newTaskList= [...taskList]

       newTaskList[element]={
         ...newTaskList[element],  
        isCompleted:true,
 
       }
       settaskList(newTaskList)
      
    }
    console.log(taskList)
    return (
        <div className="todo">
            <input type ="text" placeholder="Add to List" onChange={(e) => handleChange(e)}>
            </input>
            <button className="add-btn" onClick={addTask}>List-It</button>
            {taskList !== [] ? (
                <ul>
                    {taskList.map((t) => (
                        <li className={t.isCompleted ? "crossText" :"listitem"} key={t.id}>{t.value}
                        <button className="completed" onClick={(e)=>onComplete(e,t.id)}>Completed</button>
                    <button className="delete" onClick={(e)=>ondelete(e,t.id)}>Delete</button>
                    
                        </li>
                    )
                    )}
                </ul>
            )
                : null
                }
        </div>
    )
}

export default TodoForm
