import {Component} from 'react';
import {connect} from 'react-redux';
import createTask from './actions';
import './App.css';
import TaskPage from './components/TaskPage';


class App extends Component {

  
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description}))
  }

  render() {
    console.log('Props from App: ', this.props)
    return (
      <div className='main-content'>
        <TaskPage tasks={this.props.tasks}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {tasks: state.tasks}
}

export default connect(mapStateToProps)(App);
