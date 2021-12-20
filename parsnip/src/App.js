import './App.css';
import TaskPage from './components/TaskPage';

const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my',
    status: 'in Progress'
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal',
    status: 'in Progress'
  }
]

function App() {
  return (
    <div className='main-content'>
      <TaskPage tasks={mockTasks}/>
    </div>
  );
}

export default App;
