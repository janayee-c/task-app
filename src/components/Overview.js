// Overview.js

import React, { Component } from "react";

const Overview = (props) => { //must be able to use tasks as an inherent property 
    const { tasks, onDeleteTask } = props;

    return (
        <ul>
            {tasks.map((task) => { //map over each task in the task array with a defined callback function that returns the task text
                return <li key={task.id}>
                    {task.text}
                    <button onClick={() => onDeleteTask(task.id)}>Delete Me</button>
                    </li>
            })}
        </ul>
    )

}

export default Overview;