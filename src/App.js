import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Middle from './components/Middle/Middle'
import RightSide from './components/RightSide/RightSide'

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
