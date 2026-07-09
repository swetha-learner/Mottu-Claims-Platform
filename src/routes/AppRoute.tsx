import { Routes, Route } from 'react-router-dom';

import Landing from '../pages/Landing_Page'
import Login from '../pages/customer/Login';
import Claims from '../pages/customer/Claims';
import Create_claim from '../pages/customer/Create_claim';
import Dashboard from '../pages/customer/Dashboard';

const AppRoute = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/customers/login" element={<Login />} />
            <Route path="/customers/claims" element={<Claims />} />
            <Route path="/customers/create-claims" element={<Create_claim />} />
            <Route path="/customers/Dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoute;