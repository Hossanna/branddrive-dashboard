import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
                <Sidebar />
                

              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
