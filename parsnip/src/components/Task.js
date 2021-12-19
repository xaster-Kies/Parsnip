import React from 'react'

const Task = props => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
            </div>
        </div>
    )
}

export default Task
