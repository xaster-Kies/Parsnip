import { connect } from 'react-redux';
import './App.css';
import TaskPage from './components/TaskPage';


function App() {
  return (
    <div className='main-content'>
      <TaskPage tasks={this.props.tasks}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.task
  }
}

export default connect (mapStateToProps) (App);
