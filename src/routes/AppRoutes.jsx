import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthenticatonLayout from '../layouts/AuthenticatonLayout';
import Dashboard from '../pages/Dashboard/Home';
import GuestLayout from '../layouts/GuestLayout';

export default function AppRoutes() {
	return (
		<Routes>
			<Route element={<GuestLayout />}>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />{' '}
				<Route path='/register' element={<Register />} />
			</Route>
			<Route element={<AuthenticatonLayout />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
		</Routes>
	);
}
