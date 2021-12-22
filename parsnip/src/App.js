import {Component} from 'react';
import {connect} from 'react-redux';
import createTask, {editTask} from './actions';
import './App.css';
import TaskPage from './components/TaskPage';

class App extends Component {

  onStatusChange = (id, status) => {
    this
      .props
      .dispatch(editTask(id, {status}))
  }

  onCreateTask = ({title, description}) => {
    this
      .props
      .dispatch(createTask({title, description}))
  }

  render() {
    console.log('Props from App: ', this.props)
    return (
      <div className='main-content'>
        <TaskPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {tasks: state.tasks}
}

export default connect(mapStateToProps)(App);
