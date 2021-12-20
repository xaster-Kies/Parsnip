import React, { Component } from 'react'
import TaskList from './TaskList';


const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

export default class TaskPage extends Component {
   
    renderTaskLists() {
       const { tasks } = this.props;
       return TASK_STATUSES.map(status => {
           const statusTasks = tas-ks.filter(task => task.status === status);
           return <TaskList key={status} status={status} tasks = {statusTasks} />
       })
   }

    
    render() {
        return (
            <div className='tasks'>
                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        )
    }
}
