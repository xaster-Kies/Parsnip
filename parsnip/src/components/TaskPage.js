import React, {Component} from 'react'
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

export default class TaskPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: '',
      description: ''
    }
  }

  onTitleChange = (e) => {
    this.setState({title: e.targe.value})
  }

  onDescriptionChange = (e) => {
    this.setState({description: e.target.value})
  }

  resetForm() {
    this.setState({showNewCardForm: false, title: '', description: ''})
  }

  onCreateTask = (e) => {
    e.preventDefault();
    this
      .props
      .onCreateTask({title: this.state.title, description: this.state.description})
    this.resetForm();
  }

  toggleForm = () => {
    this.setState({
      showNewCardForm: !this.state.showNewCardForm
    })
  }

  renderTaskLists() {
    const {tasks} = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks}/>
    })
  }

  render() {
    return (
      <div className='tasks'>
        <div className="task-lists">
          <div className="task-list-header">
            <div className="button button-default" onClick={this.toggleForm}>+ New Task</div>
          </div>
          {this.state.showNewCardForm && (
            <form onSubmit={this.onCreateTask} className="task-list-form">
              <input
                type="text"
                onChange={this.onTitleChange}
                value={this.state.title}
                className="ful-width-input"
                placeholder='Title'/>
              <input
                type="text"
                onChange={this.onDescriptionChange}
                value={this.state.description}
                className="ful-width-input"
                placeholder='Description'/>
              <button className="button" type='submit'>
                Save
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}
