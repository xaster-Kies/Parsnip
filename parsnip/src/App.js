import './App.css';
import TaskPage from './components/TaskPage';


function App() {
  return (
    <div className='main-content'>
      <TaskPage tasks={mockTasks}/>
    </div>
  );
}

export default App;
