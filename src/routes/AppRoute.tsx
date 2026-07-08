import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

const AppRoute = () => {
    
    return (
        <Routes>
            <Route path="/customers/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoute;