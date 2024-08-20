
import { Outlet } from 'react-router-dom'; 
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App"> 
     <Outlet/>
    </div>
  );
}

export default App;
