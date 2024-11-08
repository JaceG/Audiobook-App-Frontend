import AppRoutes from './routes/AppRoutes';

/// Style
import './assets/vendor/swiper/css/swiper-bundle.min.css';
import './assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import './assets/css/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<>
			<AppRoutes />
			<ToastContainer />
		</>
	);
}
