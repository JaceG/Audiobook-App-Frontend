import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../App';
import WebAudioPlayer from '../components/AudioPlayer';
// eslint-disable-next-line react/prop-types
function AuthenticatonLayout() {
	const sidebariconHover = false;
	const sideMenu = false;
	const {
		store: {
			auth: { token },
		},
	} = useContext(StoreContext);

	return (
		<>
			{token ? (
				<>
					<div
						id='main-wrapper'
						className={`show ${
							sidebariconHover ? 'iconhover-toggle' : ''
						} ${sideMenu ? 'menu-toggle' : ''}`}>
						<Nav />
						<div
							className='content-body'
							style={{
								minHeight: '100vh',
								position: 'relative',
							}}>
							<div className='container-fluid'>
								<Outlet />
							</div>
						</div>
						<Footer changeFooter='out-footer style-2' />
					</div>
					<WebAudioPlayer className='web-audio-player' />
				</>
			) : (
				<Navigate to={'/login'} />
			)}
		</>
	);
}

export default AuthenticatonLayout;
