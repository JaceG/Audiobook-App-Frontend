import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/home';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />{' '}
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}
