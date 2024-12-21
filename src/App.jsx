import AppRoutes from './routes/AppRoutes';

/// Style
import './assets/vendor/swiper/css/swiper-bundle.min.css';
import './assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import './assets/css/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import store from './store/store';

export const StoreContext = createContext(store);

export default function App() {
	useEffect(() => {
		const token = localStorage.getItem('token');
		setToken(token ?? null);
	}, []);
	const [globalStore, setGlobalStore] = useState(store);

	const setToken = (token) => {
		if (token) {
			localStorage.setItem('token', token);
			setGlobalStore({
				...globalStore,
				auth: {
					...globalStore.auth,
					token,
				},
			});
		}
	};

	const removeToken = () => {
		localStorage.removeItem('token');
		setGlobalStore({
			...globalStore,
			auth: {
				...globalStore.auth,
				token: null,
			},
		});
	};

	const setAudiobook = (id, url) => {
		setGlobalStore({
			...globalStore,
			currentAudiobook: { id, url },
		});
	};

	const clearAudiobook = () => {
		setGlobalStore({
			...globalStore,
			currentAudiobook: null,
		});
	};
	return (
		<StoreContext.Provider
			value={{
				store: globalStore,
				setToken,
				removeToken,
				setAudiobook,
				clearAudiobook,
			}}>
			<AppRoutes />
			<ToastContainer />
		</StoreContext.Provider>
	);
}
