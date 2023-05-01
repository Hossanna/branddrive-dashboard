import './App.css';
import Sidebar from './components/Sidebar'
import Middle from './components/Middle'
import RightSide from './components/RightSide'

function App() {
  return (
    <div className="App">
          <Sidebar />
          <Middle />
          <RightSide />
    </div>
  );
}

export default App;
