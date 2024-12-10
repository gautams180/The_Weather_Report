
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AllReports from './pages/AllReports';

function App() {
  return (
    <div className="h-screen bg-[#0077b6] text-black">
      <div className='text-3xl h-[50px] flex justify-center items-center bg-[#023e8a] text-white font-semibold'>
            The Weather Report
      </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/allReports' element={<AllReports />} />

      </Routes>
    </div>
  );
}

export default App;
