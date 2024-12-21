import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import ChangePassword from '../pages/ChangePassword';
import AuthenticatonLayout from '../layouts/AuthenticatonLayout';
import Dashboard from '../pages/Dashboard/Home';
import GuestLayout from '../layouts/GuestLayout';
import Friends from '../pages/Friends';
import Audiobooks from '../pages/Audiobooks';

export default function AppRoutes() {
	return (
		<Routes>
			<Route element={<GuestLayout />}>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />{' '}
				<Route path='/register' element={<Register />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route
					path='/reset-password/:token'
					element={<ResetPassword />}
				/>
			</Route>
			<Route element={<AuthenticatonLayout />}>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/friends' element={<Friends />} />
				<Route path='/audiobooks' element={<Audiobooks />} />
				<Route path='/change-password' element={<ChangePassword />} />
			</Route>
		</Routes>
	);
}
