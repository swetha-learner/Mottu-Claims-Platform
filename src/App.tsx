import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Claims from './pages/Claims';
import Create_claim from './pages/Create_claim';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/claims' element={<Claims />} />
      <Route path='/claims/create_claim' element={<Create_claim />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
