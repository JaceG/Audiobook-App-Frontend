import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { StoreContext } from '../App';
import { useContext } from 'react';

const GuestLayout = () => {
	const {
		store: {
			auth: { token },
		},
	} = useContext(StoreContext);
	return token ? <Navigate to={'/dashboard'} /> : <Outlet />;
};

export default GuestLayout;
