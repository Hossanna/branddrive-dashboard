import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Middle from './components/Middle/Middle'
import RightSide from './components/RightSide/RightSide'

function App() {
  return (
    <div className="App">
          <Sidebar />
          <Navbar />
          <Middle />
          <RightSide />
    </div>
  );
}

export default App;
