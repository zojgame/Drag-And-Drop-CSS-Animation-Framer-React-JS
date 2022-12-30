import './App.css';
import Header from './header';
import ToDoDragAndDropComponent from './ToDo';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet/>
    </div>
  );
}

export default App;
