import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthenticatonLayout from '../layouts/AuthenticatonLayout';
import Dashboard from '../pages/Dashboard/Home';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />{' '}
			<Route path="/register" element={<Register />} />
			<Route element={<AuthenticatonLayout/>}>
				<Route path="/dashboard" element={<Dashboard />} />
    	    </Route>
		</Routes>
	);
}
