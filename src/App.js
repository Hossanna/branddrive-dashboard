import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter basename='/dashboard'>
        <div className="App">
              <Sidebar />
              <Navbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
